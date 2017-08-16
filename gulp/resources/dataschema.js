var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var through = require('through2');

var gutil = require('gulp-util');

var walk = require('../walk');
var readFiles = require('../utils').readFiles;
var resource = require('../resources');
var config = require('../toolkit.config');

function convertDataSchema() {

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

function filterDataSchema() {

  var filePath = path.join(config.hyperties.repository, config.hyperties.sourceCode);
  var schemas = [];

  walk(filePath, function(filepath, rootdir, subdir, filename) {
    if (filename.includes('.ds.json')) {
      readFiles(path.join(rootdir, '/', subdir, '/'), filename).forEach(function(fileObject) {
        schemas.push(fileObject);
      });
    }
  });

 
  return schemas.map(function(file) {
    var dir = path.parse(file.folder + file.filename).dir;
    var folder = dir.replace(filePath, '');
    return { dir: folder, filename: file.filename };
  });

}

function checkDataSchemasFile() {

  var name = 'DataSchemas';
  var resourcePath = '/resources/descriptors/' + name + '.json';

  try {
    var stats = fs.lstatSync(path.resolve(process.cwd() + resourcePath));
    console.log(stats);
    return true;
  } catch (e) {
    fs.writeFile(path.resolve(process.cwd() + resourcePath), '{}', (err) => {
      if (err) throw new Error(err);
      return true;
    });
  }

}

module.exports = {
  checkDataSchemasFile: checkDataSchemasFile,
  convertDataSchema: convertDataSchema,
  filterDataSchema: filterDataSchema
};
