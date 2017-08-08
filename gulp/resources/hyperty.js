var gulp = require('gulp');
var path = require('path');
var through = require('through2');

var gutil = require('gulp-util');

var transpile = require('../transpile');
var resource = require('../resources');

function convertHyperty() {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);

    return gulp.src([chunk.path])
      .on('end', function() {
        gutil.log('-----------------------------------------------------------');
        gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
      })
      .pipe(transpile({
        destination: path.join(__dirname, '..', '..', '..', 'resources'),
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

module.exports = {
  convertHyperty: convertHyperty
};
