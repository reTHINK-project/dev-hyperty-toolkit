// jshint varstmt: false

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var _ = require('lodash');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var through = require('through2');
var prompt = require('gulp-prompt');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');

var getEnvironment = require('./gulp/environment');
var getStage = require('./gulp/stage');
var server = require('./gulp/server');
var descriptorBase = require('./gulp/descriptors').descriptorBase;
var encode = require('./gulp/descriptors').encode;
var walk = require('./gulp/walk');

var systemConfig = require('./system.config.json');
var dirname = __dirname;
var extensions = ['.js', '.json'];

gulp.task('serve', function(done) {

  var stage = getStage();
  var sequence = ['stage', 'clean', 'checkHyperties', 'checkDataSchemas', 'src-hyperties', 'descriptor', 'schemas', 'js', 'hyperties', 'server'];
  if (stage !== 'production') {
    sequence.push('watch');
  }

  runSequence.apply(runSequence, sequence, done);

});

gulp.task('checkHyperties', function() {

  try {
    var stats = fs.lstatSync(__dirname + '/resources/descriptors/Hyperties.json');
    console.log(stats.isFile());
  } catch (e) {
    fs.writeFile(__dirname + '/resources/descriptors/Hyperties.json', '{}', (err) => {
      if (err) throw new Error(err);
      return true;
    });
  }

});

gulp.task('checkDataSchemas', function() {

  try {
    var stats = fs.lstatSync(path.resolve(__dirname + '/resources/descriptors/DataSchemas.json'));
    console.log(stats.isFile());
  } catch (e) {
    fs.writeFile(path.resolve(__dirname + '/resources/descriptors/DataSchemas.json'), '{}', (err) => {
      if (err) throw new Error(err);
      return true;
    });
  }

});

gulp.task('src-hyperties', function(done) {

  var srcPath;
  if (process.env.HYPERTY_REPO) {

    srcPath = path.resolve(path.join('../', process.env.HYPERTY_REPO));

    fs.stat(srcPath, function(error) {
      if (error) {
        console.log('ERROR:', error);
        return error;
      }

      copyHyperties(srcPath, done);
    });

  } else {
    var parentDirs = fs.readdirSync(path.resolve('../'));
    gulp.src('./', {buffer:false})
      .pipe(prompt.prompt([{
        type: 'list',
        name: 'folders',
        message: 'Where is dev-hyperty?',
        choices: parentDirs
      }
    ], function(res) {
      srcPath = path.join('../', res.folders);
      copyHyperties(srcPath, done);
    }));

  }

});

gulp.task('clean', function() {
  return gulp.src([
    'src',
    'app',
    'resources/descriptors/Hyperties.json',
    'resources/descriptors/DataSchemas.json'], {read: false}).pipe(clean());
});

gulp.task('copy-src', copySrc);
gulp.task('copy-assets', copyAssets);
gulp.task('copy-examples', copyExamples);

// use default task to launch Browsersync and watch JS files
gulp.task('server', server);

gulp.task('stage', function() {

  var stage = getStage();
  var configuration = systemConfig[stage];

  // console.log(configuration, stage);

  if (process.env.DEVELOPMENT && process.env.DOMAIN) {
    // console.log(process.env.DEVELOPMENT, process.env.DOMAIN);

    if (process.env.DEVELOPMENT) {
      configuration.development = process.env.DEVELOPMENT;
    }

    if (process.env.RUNTIME_URL) {
      configuration.runtimeURL = process.env.RUNTIME_URL;
    } else {
      delete configuration.runtimeURL;
    }

    if (process.env.DOMAIN) {
      configuration.domain = process.env.DOMAIN;
    }

  } else {
    gutil.log(gutil.colors.yellow('To use the environment variables you need use'));
    console.log('export DEVELOPMENT=true|false\nexport DOMAIN=<your domain>\nexport RUNTIME_URL=<runtime location> (optional)');
    gutil.log(gutil.colors.yellow('For default the settings applied are in the system.config.json file'));

    configuration = systemConfig[stage];
  }

  return gulp.src('./')
  .pipe(createFile('config.json', new Buffer(JSON.stringify(configuration, null, 2))))
  .pipe(gulp.dest('./'))
  .on('end', function() {
    gutil.log('You are in the ' + stage + ' mode');
    gutil.log('Your configuration \n', JSON.stringify(configuration, null, 2));
  });

});

function copyFiles(opts) {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);
    var dest = '';
    if (opts && opts.dest) {
      dest = opts.dest;
    }

    var indexOfDest = fileObject.dir.indexOf(dest);
    var dirPath = fileObject.dir.substring();
    if (indexOfDest !== -1) {
      dirPath = fileObject.dir.substring(indexOfDest);
    } else {
      dirPath = dest + fileObject.dir.substring(fileObject.dir.lastIndexOf('/'));
    }

    var dir = __dirname + '/' + dirPath;

    if (dirPath.indexOf(dirname) !== -1) {
      dir = dirPath;
    }

    gutil.log('Copy changes from ' + fileObject.base + ' to ' + dir);
    return gulp.src(chunk.path)
    .pipe(gulp.dest(dir))
    .on('end', function() {

      fs.readFile(dir + '/' + fileObject.base, function(err, data) {
        if (err) throw err;
        var a = chunk;
        a.path = dir + '/' + fileObject.base;
        a.contents = data;
        done(null, a);
      });

    });

  });

}

gulp.task('watch', function() {

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch(['system.config.json'], ['main-watch']);
  gulp.watch(['./resources/schemas/**/*.ds.json'], ['schemas'], browserSync.reload);

  gulp.watch(['./server/rethink.js', './resources/factories/*.js', './app/main.js'], function() {
    return gulp.src('./server/rethink.js')
    .pipe(transpile({destination: __dirname + '/app/dist', debug: true}))
    .resume()
    .on('end', browserSync.reload);
  });

  gulp.watch(['./src/**/*.js'], function(event) {
    var fileObject = path.parse(event.path);
    return gulp.src([fileObject.dir + '/*.hy.js'])
    .pipe(convertHyperty())
    .resume()
    .on('end', function() {
      browserSync.reload();
    });
  });

  gulp.watch(['./src/**/*.ds.json'], function(event) {
    var fileObject = path.parse(event.path);
    return gulp.src([fileObject.dir + '/*.ds.js'])
    .pipe(convertSchema())
    .on('end', function() {
      browserSync.reload();
    });
  });

  gulp.watch(['./src/**/*.hy.json'], function(event) {

    return gulp.src(event.path)
    .pipe(createDescriptor())
    .pipe(gulp.dest('resources/descriptors/'))
    .on('end', function() {
      gutil.log('the preconfiguration hyperty was changed, and the Hyperties.json was updated');
      browserSync.reload();
    });

  });

  // Watch
  gulp.watch([dirname + '/src/**/*.js'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'src'}));
  });

  gulp.watch([dirname + '/src/**/*.json'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'src'}));
  });

  gulp.watch([dirname + '/examples/*.html', dirname + '/examples/**/*.hbs'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'app'}))
    .resume()
    .on('end', function() {
      gutil.log('The html templates are copied with success');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });
  });

  gulp.watch([dirname + '/examples/main.js'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'app'}))
    .pipe(transpile({destination: __dirname + '/app/dist', debug: true}))
    .resume()
    .on('end', function() {
      gutil.log('The main file was created like a distribution file on /dist');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });
  });

  gulp.watch([dirname + '/examples/**/*.js', '!' + dirname + '/examples/main.js'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'app'}))
    .pipe(transpile({destination: __dirname + '/app', debug: true}))
    .resume()
    .on('end', function() {
      gutil.log('The javascript was copied and converted to es5');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });
  });

});

gulp.task('main-watch', ['js'], browserSync.reload);
gulp.task('hyperties-watch', ['hyperties'], browserSync.reload);

gulp.task('js', function() {

  return gulp.src(['./app/main.js', './server/rethink.js'])
  .on('end', function() {
    var fileObject = path.parse('./app/main.js');
    gutil.log('-----------------------------------------------------------');
    gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
  })
  .pipe(transpile({destination: __dirname + '/app/dist', debug: true}))
  .on('end', function() {
    gutil.log('The main file was created like a distribution file on /dist');
    gutil.log('-----------------------------------------------------------');
    browserSync.reload();
  });

});

// process JS files and return the stream.
gulp.task('hyperties', function() {

  return gulp.src('./src/**/*.hy.js')
  .pipe(convertHyperty())
  .on('end', function() {
    browserSync.reload();
  });

});

gulp.task('schemas', function() {

  return gulp.src(['./src/**/*.ds.json', './resources/schemas/**/*.ds.json'])
  .pipe(convertSchema())
  .on('end', function() {
    browserSync.reload();
  });

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
    file.indexOf('Stub') !== -1 ||
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
      type: 'list',
      name: 'interworking',
      message: 'This component is to work with interworking:',
      choices: ['no', 'yes']
    },
    {
      type: 'list',
      name: 'interworking',
      message: 'This component is to work with interworking:',
      choices: ['no', 'yes']
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

      opts.interworking = false;
      if (res.interworking === 'yes') {
        opts.interworking = true;
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

gulp.task('descriptor', function() {

  return gulp.src('./src/**/*.hy.json')
  .pipe(createDescriptor())
  .pipe(gulp.dest('./resources/descriptors/'))
  .on('end', function() {
    browserSync.reload();
  });

});

function createDescriptor() {

  var descriptor = fs.readFileSync('./resources/descriptors/Hyperties.json', 'utf8');
  var data = JSON.parse(descriptor);

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);
    var nameOfHyperty = fileObject.name.replace('.hy', '');
    var preconfig = JSON.parse(chunk.contents);

    gutil.log('---------------------- ' + nameOfHyperty + ' ------------------------');

    if (!data.hasOwnProperty(nameOfHyperty)) {
      data[nameOfHyperty] = descriptorBase('hyperty');
    }

    var updated = _.extend(data[nameOfHyperty], preconfig);
    data[nameOfHyperty] = updated;

    var newChunk = _.clone(chunk);
    newChunk.path = path.resolve('./descriptors/Hyperties.json');
    newChunk.contents = new Buffer(JSON.stringify(data, null, 2));
    gutil.log('Initial Configuration');
    gutil.log(JSON.stringify(preconfig, null, 2));

    done(null, newChunk);
  });
}

function convertHyperty() {

  return through.obj(function(chunk, enc, done) {

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

  });

}

function readFiles(dirname, file) {
  var files = fs.readdirSync(dirname);
  return files.filter(function(filename) {
    return filename.includes(file);
  }).map(function(filename) {
    var content = fs.readFileSync(dirname + filename, 'utf-8');
    return {filename: filename, folder: dirname, content: content};
  });
}

function filterHyperties(environment) {

  var filePath = path.resolve(dirname + '/src/');
  var hyperties = [];

  walk(filePath, function(filepath, rootdir, subdir, filename) {
    if (filename.includes('.hy.json')) {
      readFiles(path.join(rootdir, '/', subdir, '/'), filename).forEach(function(fileObject) {
        hyperties.push(fileObject);
      });
    }
  });

  return hyperties.filter(function(file) {
      var temp;
      try {
        temp = JSON.parse(file.content);
      } catch (e) {
        temp = file.content;
      }

      if (environment !== 'all') {
        return temp.hasOwnProperty('constraints') && temp.constraints.hasOwnProperty(environment) && temp.constraints[environment];
      } else {
        return true;
      }
    }).map(function(file) {
      var dir = path.parse(file.folder + file.filename).dir;
      var folder = dir.replace(filePath, '');
      return {dir: folder, filename: file.filename};
    });
}

function convertSchema() {

  return through.obj(function(chunk, enc, done) {

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

  });

}

function transpile(opts) {

  // Return for browser
  return through.obj(function(file, enc, cb) {

    var fileObject = path.parse(file.path);
    var stage = getStage();
    var args = {};

    var compact = false;
    if (stage === 'production') {
      compact = true;
    }

    args.entries = [file.path];
    args.extensions = extensions;
    if (opts.debug) args.debug = opts.debug;
    if (opts.standalone) args.standalone = opts.standalone;

    var filename = opts.filename || fileObject.base;
    var _this = this;

    var environment = getEnvironment();
    if (environment === 'browser' || environment === 'all'  || environment === 'node' && !filename.includes('.hy.js')) {
      gutil.log('Converting ' + filename + ' to be used on browser');
      return browserify(args)
        .transform(babel, {
          compact: false,
          sourceMaps: true,
          extends: __dirname + '/.babelrc'
        })
        .bundle()
        .on('error', function(err) {
          gutil.log(gutil.colors.red(err));
          _this.emit('end');
        })
        .pipe(source(filename))
        .pipe(gulp.dest(opts.destination))
        .on('end', function() {
          file.contents = fs.readFileSync(opts.destination + '/' + fileObject.base);
          file.path = opts.destination + '/' + fileObject.base;
          cb(null, file);
        });

    } else {
      gutil.log('Converting ' + filename + ' to be used on node');
      return browserify(file.path, {
        standalone: 'activate'
      })
        .transform(babel, {
          presets: ['es2015']
        })
        .bundle()
        .pipe(source(filename))
        .pipe(gulp.dest(opts.destination))
        .on('end', function() {
          file.contents = fs.readFileSync(opts.destination + '/' + fileObject.base);
          file.path = opts.destination + '/' + fileObject.base;
          cb(null, file);
        });
    }

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
    } else if (filename.indexOf('P2P') !== -1) {
      descriptorName = 'ProtoStubs';
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

function createFile(path, contents) {

  return through({ objectMode: true}, function(chunk, enc, cb) {
    var file = new gutil.File({cwd: '', base: '', path: path, contents: contents});
    cb(null, file);
  });

}

function copySrc() {

  var hyperties = filterHyperties(getEnvironment());

  // copy utils folder
  gulp.src([dirname + '/src/utils/*'])
    .pipe(gulp.dest('./src/utils'));

  // copy each folder of filter directories
  var filesToBeCopied = [];
  var filesToBeExcluded = [];
  hyperties.forEach(function(hyperty) {
    var selectedHyperty = path.parse(path.resolve(dirname + '/src' + hyperty.dir + '/' + hyperty.filename));

    walk(path.resolve(dirname + '/src' + hyperty.dir), function(filepath) {
      var fileObject = path.parse(filepath);
      if (fileObject.name.includes(selectedHyperty.name) ||
          fileObject.ext === '.js' && fileObject.ext === '.json' || !fileObject.name.includes('.hy')) {
        filesToBeCopied.push(filepath);
      } else {
        filesToBeExcluded.push('!' + filepath);
      }
    });
  });

  filesToBeCopied.concat(filesToBeExcluded);

  filesToBeCopied.forEach(function(file) {
    var fileObject = path.parse(file);
    var directory = fileObject.dir.substr(fileObject.dir.indexOf('/src/'));
    return gulp.src(file)
      .pipe(gulp.dest('.' + directory));

  });

}

function copyAssets() {
  return gulp.src(['./server/assets/*.png', './server/assets/*.ico'])
  .pipe(gulp.dest('./app/assets'));
}

function copyExamples() {
  return gulp.src([dirname + '/examples/**/*'])
  .pipe(gulp.dest('./app'));
}

function copyHyperties(from, done) {
  if (from) {
    dirname = from;
    var stage = getStage();
    if (stage !== 'production') {
      runSequence('copy-src', 'copy-examples', 'copy-assets', done);
    } else {
      runSequence('copy-examples', 'copy-assets', done);
    }
  }
}
