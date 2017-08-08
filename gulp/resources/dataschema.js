var gulp = require('gulp');
var path = require('path');
var through = require('through2');

var gutil = require('gulp-util');

var resource = require('../resources');

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

module.exports = {
  convertSchema: convertSchema
};
