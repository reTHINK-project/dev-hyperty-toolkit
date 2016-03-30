// jshint varstmt: false

// var pkg = require('./package.json');
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var browserSync = require('browser-sync').create('Toolkit');

var _ = require('lodash');
var es = require('event-stream');
var babel = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var through = require('through2');
var Base64 = require('js-base64').Base64;
var prompt = require('gulp-prompt');

var extensions = ['.js', '.json'];

// var uglify = require('gulp-uglify');
// var replace = require('gulp-replace');
// var insert = require('gulp-insert');

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js'], function() {

  // Serve files from the root of this project
  browserSync.init({
    open: false,
    port: 443,
    minify: false,
    https: {
      key: 'rethink-certificate.key',
      cert: 'rethink-certificate.cert'
    },
    server: {
      baseDir: './'
    }
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch(['src/*.js', 'resources/**/*.js', 'system.config.json'], ['main-watch']);
  gulp.watch(['src/**/*.hy.js'], ['hyperties']);

});

gulp.task('main-watch', ['js'], browserSync.reload);
gulp.task('hyperties-watch', ['hyperties'], browserSync.reload);

gulp.task('js', ['hyperties'], function() {

  return browserify('./src/main.js', {
    extension: extensions
  })
  .transform('babelify', {
    compact: false,
    presets: ['es2015', 'stage-0'],
    plugins: ['add-module-exports']
  })
  .bundle()
  .on('error', function(err) {
    console.error('ERROR:', err);
    this.emit('end');
  })
  .on('end', function() {
    console.log('-----------------------------------------------------------');
    console.log('Converting main.js from ES6 to ES5');
  })
  .pipe(source('main.js'))
  .pipe(gulp.dest(__dirname + '/dist'))
  .on('end', function() {
    console.log('The main file was created like a distribution file on /dist');
    console.log('-----------------------------------------------------------');
    browserSync.reload();
  });

});

// process JS files and return the stream.
gulp.task('hyperties', function() {

  var files = [];
  var sourceDir = fs.readdirSync(__dirname + '/src/');
  var dirs = sourceDir.filter(function(dir) {
    var path = __dirname + '/src/' + dir;
    return fs.lstatSync(path).isDirectory();
  });

  dirs.filter(function(dir) {
    var path = __dirname + '/src/' + dir;
    var dirFiles = fs.readdirSync(path);
    return dirFiles.filter(function(file) {
      return isFile(path + '/' + file);
    });
  });

  function isFile(file) {
    var currentFile = path.parse(file);
    if (currentFile.base.indexOf('.hy.') !== -1 && fs.lstatSync(file).isFile()) {
      files.push(file);
    }
  }

  var tasks = files.map(function(file) {

    var currentFile = path.parse(file);
    return browserify({
      entries: [currentFile.dir + '/' + currentFile.base],
      standalone: 'activate',
      extension: extensions,
      debug: true
    }).transform(babel, {
      compact: false,
      presets: ['es2015'],
      plugins: ['add-module-exports']
    })
    .bundle()
    .on('error', function(err) {
      console.error('ERROR:', err);
      this.emit('end');
    })
    .on('end', function() {
      console.log('-----------------------------------------------------------');
    })
    .pipe(source(currentFile.base))
    .pipe(gulp.dest('resources/'))
    .pipe(resource())
    .on('end', function() {
      console.log('Hyperty ', currentFile.name, ' was converted and encoded');
      console.log('-----------------------------------------------------------');
    });

  });

  return es.merge.apply(null, tasks);

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
      type: 'input',
      name: 'configuration',
      message: 'ProtoStub Configuration, use something like:\n{"url": "wss://msg-node.localhost:9090/ws"}\nConfiguration:',
      validate: function(value) {
        try {
          JSON.parse(value);
          return true;
        } catch (e) {
          console.log('Default value is {}');
          return true;
        }
      }
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

      if (res.file) {
        return gulp.src(res.file)
        .pipe(resource(opts))
        .on('end', function() {
          console.log('encoded');
        });
      }
    })
  );

});

function resource(opts) {

  return through.obj(function(file, enc, cb) {

    var fileObject = path.parse(file.path);

    opts = _.extend({
      configuration: {},
      isDefault: false
    }, opts || {});

    var filename = fileObject.name;
    var extension = fileObject.ext;
    var descriptorName;
    if (filename.indexOf('hy') !== -1) {
      descriptorName = 'Hyperties';
    } else if (filename.indexOf('ProtoStub') !== -1) {
      descriptorName = 'ProtoStubs';
    } else if (filename.indexOf('DataSchema') !== -1) {
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

    console.log('Encoding file', defaultPath, filename, opts);

    if (extension === '.js') {
      return gulp.src([file.path])
      .pipe(encode(file.path, opts))
      .pipe(source(opts.descriptor + '.json'))
      .pipe(gulp.dest('resources/descriptors/'))
      .on('end', function() {
        cb();
      });

    } else if (extension === '.json') {

      return gulp.src(['resources/' + filename + '.json'])
      .pipe(gulp.dest('resources/'))
      .pipe(encode(file, opts))
      .pipe(buffer())
      .pipe(source(descriptorName + '.json'))
      .pipe(gulp.dest('resources/descriptors/'))
      .on('end', function() {
        cb();
      });
    }

  });

}

function encode(file, opts) {

  opts = _.extend({}, opts || {});

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    var fileObject = path.parse(file.path);
    var descriptor = fs.readFileSync('resources/descriptors/' + opts.descriptor + '.json', 'utf8');
    var json = JSON.parse(descriptor);
    var contents = fs.readFileSync(file.path, 'utf8');

    var encoded = Base64.encode(contents);
    var value = 'default';
    var filename = fileObject.name.replace('.hy', '');

    if (opts.isDefault) {
      value = 'default';
    } else {
      value = filename;
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

    json[value].cguid = Math.floor(Math.random() + 1);
    json[value].type = opts.descriptor;
    json[value].version = '0.1';
    json[value].description = 'Description of ' + filename;
    json[value].objectName = filename;

    if (!json[value].hasOwnProperty('configuration') && opts.configuration) {
      json[value].configuration = opts.configuration;
      console.log('setting configuration: ', opts.configuration);
    }

    if (opts.descriptor === 'Runtimes') {
      json[value].runtimeType = 'browser';
      json[value].hypertyCapabilities = {mic: false };
      json[value].protocolCapabilities = {http: true };
    }

    if (opts.descriptor === 'ProtoStubs') {
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
