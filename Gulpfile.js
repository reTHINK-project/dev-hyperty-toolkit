// jshint varstmt: false

// var pkg = require('./package.json');
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var browserSync = require('browser-sync').create('Toolkit');

var _ = require('lodash');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var through = require('through2');
var Base64 = require('js-base64').Base64;
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');
var gulpif = require('gulp-if');
var systemConfig = require('./system.config.json');

var extensions = ['.js', '.json'];
var environment = 'production';

// var uglify = require('gulp-uglify');
// var replace = require('gulp-replace');
// var insert = require('gulp-insert');

gulp.task('serve', function(done) {

  var develop = argv.dev || process.env.MODE;
  environment = develop ? 'development' : 'production';

  console.log(argv);

  console.log(process.env.MODE);

  process.env.environment = environment;

  var sequence = ['environment', 'js', 'server'];
  if (environment !== 'production') {
    sequence.push('watch');
  }

  runSequence.apply(runSequence, sequence, done);

});

// use default task to launch Browsersync and watch JS files
gulp.task('server', function(done) {

  // Serve files from the root of this project
  browserSync.init({
    open: false,
    online: true,
    port: 443,
    minify: false,
    ghostMode: false,
    https: {
      key: 'rethink-certificate.key',
      cert: 'rethink-certificate.cert'
    },
    server: {
      baseDir: './',
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      },
      routes: {
        '/.well-known/hyperty': 'resources/descriptors/'
      }
    }
  }, done);

});

gulp.task('environment', function() {

  var develop = argv.dev || process.env.MODE;
  environment = develop ? 'development' : 'production';
  process.env.environment = environment;

  var configuration = systemConfig[environment];

  return gulp.src('./')
  .pipe(createFile('config.json', new Buffer(JSON.stringify(configuration, null, 2))))
  .pipe(gulp.dest('./'))
  .on('end', function() {
    gutil.log('You are in the ' + environment + ' mode');
  });

});

gulp.task('watch', function(done) {

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch(['src/*.js', 'system.config.json'], ['main-watch']);
  gulp.watch(['src/**/*.js'], ['hyperties-watch']);
  gulp.watch(['src/**/*.json'], ['schemas']);
  gulp.watch(['examples/*.html', 'examples/**/*.hbs', 'examples/**/*.js'], browserSync.reload);

});

gulp.task('main-watch', ['js'], browserSync.reload);
gulp.task('hyperties-watch', ['hyperties'], browserSync.reload);

gulp.task('js', ['hyperties'], function() {

  return gulp.src('./src/main.js')
  .on('end', function() {
    var fileObject = path.parse('./src/main.js');
    gutil.log('-----------------------------------------------------------');
    gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
  })
  .pipe(transpile({destination: __dirname + '/dist', debug: false}))
  .on('end', function() {
    gutil.log('The main file was created like a distribution file on /dist');
    gutil.log('-----------------------------------------------------------');
    browserSync.reload();
  });

});

// process JS files and return the stream.
gulp.task('hyperties', function() {

  return gulp.src('./src/**/*.hy.js')
  .pipe(through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);

    return gulp.src([chunk.path])
    .on('end', function() {
      gutil.log('-----------------------------------------------------------');
      gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
    })
    .pipe(transpile({
      destination: __dirname + '/resources',
      standalone: 'activate',
      debug: false
    }))
    .pipe(resource())
    .resume()
    .on('end', function() {
      gutil.log('Hyperty', fileObject.name, ' was converted and encoded');
      gutil.log('-----------------------------------------------------------');
      done();
    });

  }));

});

gulp.task('schemas', function() {

  return gulp.src('./src/**/*.ds.json')
  .pipe(through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);

    return gulp.src([chunk.path])
    .on('end', function() {
      gutil.log('-----------------------------------------------------------');
      gutil.log('Encoding ' + fileObject.base + ' to base64');
    })
    .pipe(resource())
    .resume()
    .on('end', function() {
      gutil.log('DataSchema', fileObject.name, ' was encoded');
      gutil.log('-----------------------------------------------------------');
      done();
    });

  }));
});

gulp.task('encode', function(done) {

  var files = [];
  var dirFiles = fs.readdirSync('resources');
  files = dirFiles.filter(isFile);
  files = files.map(function(file) {
    return 'resources/' + file;
  });

  function isFile(file) {
    if (file.indexOf('Hyperty') !== -1 || file.indexOf('ProtoStub') !== -1 ||
    file.indexOf('DataSchema') !== -1 ||
    file.indexOf('ProxyStub') !== -1 ||
    (file.indexOf('runtime') !== -1 || file.indexOf('Runtime') !== -1)) {
      return fs.statSync('resources/' + file).isFile();
    }
  }

  gulp.src('./', {buffer:false})
    .pipe(prompt.prompt([{
      type: 'list',
      name: 'file',
      message: 'File to be converted:',
      choices: files
    },
    {
      type: 'list',
      name: 'esVersion',
      message: 'This file are in ES5 or ES6',
      choices: ['ES5', 'ES6']
    },
    {
      type: 'input',
      name: 'configuration',
      message: 'Resource configuration, use something like {"url": "wss://msg-node.localhost:9090/ws"}:'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Name of hyperty, protostub, dataschema (not specify use the file name):'
    },
    {
      type: 'list',
      name: 'defaultFile',
      message: 'This will be a default file to be loaded?',
      choices: ['no', 'yes']
    }], function(res) {

      fs.access(res.file, fs.R_OK | fs.W_OK, function(err) {
        if (err) done(new Error('No such file or directory'));
        return;
      });

      var configuration = JSON.parse(res.configuration || '{}');

      var isDefault = false;
      if (res.defaultFile === 'yes' || res.defaultFile === 'y') {
        isDefault = true;
      }

      var opts = {
        configuration: configuration,
        isDefault: isDefault
      };

      var transpileOpts = {
        configuration: {},
        debug: false,
        standalone: path.parse(res.file).basename,
        destination: __dirname + '/resources/tmp'
      };

      if (res.name) {
        opts.name = res.name;
      }

      var isES6 = false;
      if (res.esVersion === 'ES6') {
        isES6 = true;
        transpileOpts.standalone = 'activate';
      }

      if (res.file) {
        return gulp.src(res.file)
        .pipe(gulpif(isES6, transpile(transpileOpts)))
        .pipe(resource(opts))
        .on('end', function() {
          gutil.log('encoded');
        });
      }
    })
  );

});

function transpile(opts) {

  return through.obj(function(file, enc, cb) {

    var fileObject = path.parse(file.path);
    var args = {};

    var develop = argv.dev || process.env.MODE;
    environment = develop ? 'development' : 'production';
    process.env.environment = environment;

    var compact = false;
    if (environment === 'production') {
      compact = true;
    }

    args.entries = [file.path];
    args.extensions = extensions;
    if (opts.debug) args.debug = opts.debug;
    if (opts.standalone) args.standalone = opts.standalone;

    var filename = opts.filename || fileObject.base;

    return browserify(args)
    .transform(babel, {
      compact: compact,
      presets: ['es2015', 'stage-0'],
      plugins: ['add-module-exports', 'transform-inline-environment-variables']
    })
    .bundle()
    .on('error', function(err) {
      gutil.log(gutil.colors.red(err.message));
      this.emit('end');
    })
    .pipe(source(filename))
    .pipe(gulp.dest(opts.destination))
    .on('end', function() {
      file.contents = fs.readFileSync(opts.destination + '/' + fileObject.base);
      file.path = opts.destination + '/' + fileObject.base;
      cb(null, file);
    });

  });

}

function resource(opts) {

  return through.obj(function(file, enc, done) {

    gutil.log('Resource: ', file.path);
    var fileObject = path.parse(file.path);

    opts = _.extend({
      configuration: {},
      isDefault: false
    }, opts || {});

    var filename = fileObject.name;
    var descriptorName;
    if (filename.indexOf('hy') !== -1) {
      descriptorName = 'Hyperties';
    } else if (filename.indexOf('ProtoStub') !== -1) {
      descriptorName = 'ProtoStubs';
    } else if (filename.indexOf('ds') !== -1) {
      descriptorName = 'DataSchemas';
    } else if (filename.indexOf('runtime') !== -1 || filename.indexOf('Runtime') !== -1) {
      descriptorName = 'Runtimes';
    } else if (filename.indexOf('ProxyStub') !== -1) {
      descriptorName = 'IDPProxys';
    }

    var defaultPath = 'resources/';
    if (fileObject.dir.indexOf('tmp') !== -1) {
      defaultPath = 'resources/tmp/';
    }

    opts.descriptor = descriptorName;

    gutil.log('Encoding: ', defaultPath, filename, JSON.stringify(opts));

    return gulp.src([file.path])
    .pipe(encode(opts))
    .pipe(source(opts.descriptor + '.json'))
    .pipe(gulp.dest('resources/descriptors/'))
    .on('end', function() {
      var path = 'resources/descriptors/' + opts.descriptor + '.json';
      file.contents = fs.readFileSync(path);
      file.path = path;
      done(null, file);
    });

  });

}

function encode(opts) {

  opts = _.extend({}, opts || {});

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    gutil.log('Encode: ', file.path);

    var fileObject = path.parse(file.path);
    var descriptor = fs.readFileSync('resources/descriptors/' + opts.descriptor + '.json', 'utf8');
    var json = JSON.parse(descriptor);
    var contents = fs.readFileSync(file.path, 'utf8');

    var encoded = Base64.encode(contents);
    var value = 'default';
    var filename = fileObject.name;

    if (fileObject.name.indexOf('.hy') !== -1) {
      filename = fileObject.name.replace('.hy', '');
    } else if (fileObject.name.indexOf('.ds') !== -1) {
      filename = fileObject.name.replace('.ds', '');
    }

    if (opts.isDefault) {
      value = 'default';
    } else {
      value = opts.name || filename;
    }

    if (!json.hasOwnProperty(value)) {
      var newObject = {};
      json[value] = newObject;
      json[value].sourcePackage = {};
    }

    var language = 'javascript';
    if (opts.descriptor === 'DataSchemas') {
      language = 'JSON-Schema';
    }

    var cguid = 0;
    switch (opts.descriptor) {
      case 'Hyperties':
        cguid = 10001;
        break;
      case 'DataSchemas':
        cguid = 20001;
        break;
      case 'Runtimes':
        cguid = 30001;
        break;
      case 'ProtoStubs':
        cguid = 40001;
        break;
      case 'IDPProxys':
        cguid = 50001;
        break;
    }

    Object.keys(json).map(function(key, index) {
      json[key].cguid = cguid + index;
    });

    // json[value].cguid = cguid;
    json[value].type = opts.descriptor;
    json[value].version = '0.1';
    json[value].description = 'Description of ' + filename;
    json[value].objectName = filename;

    if (opts.configuration) {
      if (_.isEmpty(opts.configuration) && json[value].hasOwnProperty('configuration')) {
        opts.configuration = json[value].configuration;
      }
      json[value].configuration = opts.configuration;
      gutil.log('setting configuration: ', opts.configuration);
    }

    if (opts.descriptor === 'Runtimes') {
      json[value].runtimeType = 'browser';
      json[value].hypertyCapabilities = {mic: false };
      json[value].protocolCapabilities = {http: true };
    }

    if (opts.descriptor === 'ProtoStubs' || opts.descriptor === 'IDPProxys') {
      json[value].constraints = '';
    }

    json[value].sourcePackageURL = '/sourcePackage';
    json[value].sourcePackage.sourceCode = encoded;
    json[value].sourcePackage.sourceCodeClassname = filename;
    json[value].sourcePackage.encoding = 'base64';
    json[value].sourcePackage.signature = '';
    json[value].language = language;
    json[value].signature = '';
    json[value].messageSchemas = '';
    json[value].dataObjects = [];
    json[value].accessControlPolicy = 'somePolicy';

    var newDescriptor = new Buffer(JSON.stringify(json, null, 2));
    cb(null, newDescriptor);

  });
}

function createFile(path, contents) {

  return through({ objectMode: true}, function(chunk, enc, cb) {
    var file = new gutil.File({cwd: '', base: '', path: path, contents: contents});
    cb(null, file);
  });

}
