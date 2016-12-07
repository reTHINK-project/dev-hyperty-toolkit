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
var babelrcPath = path.resolve(__dirname + '/../.babelrc');

module.exports = function transpile(opts) {

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
          extends: babelrcPath
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

};
