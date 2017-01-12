// jshint varstmt: false
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var babel = require('babelify');
var gutil = require('gulp-util');
var through = require('through2');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var getStage = require('./stage');
var getEnvironment = require('./environment');

var extensions = ['.js', '.json'];

function getHypertyConfiguration(filePath) {

  var fileObject = path.parse(filePath);

  try {

    console.log('Get Hyperty Configuration: ', fileObject);

    var config = fs.readFileSync(fileObject.dir + '/' + fileObject.name + '.json', 'utf8');
    var parsedConfig = JSON.parse(config);
    var constraints = parsedConfig.constraints ? parsedConfig.constraints : null;

    if (constraints) {

      var result = Object.keys(constraints).filter(function(key) {
        return constraints[key] === true;
      });

      return result[0];

    }

  } catch (error) {
    return;
  }

}

module.exports = function transpile(opts) {

  // Return for browser
  return through.obj(function(chunk, enc, cb) {

    var fileObject = path.parse(chunk.path);
    var stage = getStage();
    var args = {};

    var compact = false;
    if (stage === 'production') {
      compact = true;
    }

    args.entries = [chunk.path];
    args.extensions = extensions;
    if (opts.debug) args.debug = opts.debug;
    if (opts.standalone) args.standalone = opts.standalone;

    var filename = opts.filename || fileObject.base;

    var environment = getEnvironment();

    if (environment === 'all') {
      var configEnv = getHypertyConfiguration(chunk.path);
      console.log('configEven: ', configEnv, filename);

      if (configEnv === 'node' && !filename.includes('.hy.js')) {
        gutil.log('Converting ' + filename + ' to be used on ' + configEnv);
        return transpileNode(chunk.path, opts, chunk, cb);
      } else {
        gutil.log('Converting ' + filename + ' to be used on ' + configEnv);
        return transpileBrowser(args, filename, opts, chunk, cb);
      }

    } else if (environment === 'browser' || environment === 'core' || environment === 'node' && !filename.includes('.hy.js')) {
      gutil.log('Converting ' + filename + ' to be used on browser');
      return transpileBrowser(args, filename, opts, chunk, cb);

    } else {
      gutil.log('Converting ' + filename + ' to be used on node');
      return transpileNode(chunk.path, opts, chunk, cb);
    }

  });

};

function transpileBrowser(args, filename, opts, chunk, cb) {
  var fileObject = path.parse(chunk.path);

  return browserify(args)
        .transform(babel)
        .bundle()
        .on('error', function(err) {
          gutil.log(gutil.colors.red(err));
          this.emit('end');
        })
        .pipe(source(filename))
        .pipe(gulp.dest(opts.destination))
        .on('end', function() {
          chunk.contents = fs.readFileSync(opts.destination + '/' + fileObject.base);
          chunk.path = opts.destination + '/' + fileObject.base;
          cb(null, chunk);
        });
}

function transpileNode(filename, opts, chunk, cb) {
  var fileObject = path.parse(chunk.path);

  return browserify(chunk.path, {
    standalone: 'activate'
  })
    .transform(babel, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source(filename))
    .pipe(gulp.dest(opts.destination))
    .on('end', function() {
      chunk.contents = fs.readFileSync(opts.destination + '/' + fileObject.base);
      chunk.path = opts.destination + '/' + fileObject.base;
      cb(null, chunk);
    });
}
