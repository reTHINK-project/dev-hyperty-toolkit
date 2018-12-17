var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var through = require('through2');

var gutil = require('gulp-util');

var walk = require('../walk');
var readFiles = require('../utils').readFiles;

var config = require('../toolkit.config');
var transpile = require('../transpile');
var resource = require('../resources');

function convertHyperty() {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);
    var dir = path.dirname(chunk.path);

    return gulp.src([chunk.path])
      .on('end', function() {
        gutil.log('-----------------------------------------------------------');
        gutil.log('Converting at ' + dir );
        gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
      })
      .pipe(transpile({
        destination: path.join(dir, '../../dist'),
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

function filterHyperties(environment) {

  var filePath = path.join(config.hyperties.repository, config.hyperties.sourceCode);
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
      var typeOfEnvironment = environment === 'core' ? 'browser' : environment;
      return temp.hasOwnProperty('constraints') && temp.constraints.hasOwnProperty(typeOfEnvironment) && temp.constraints[typeOfEnvironment];
    } else {
      return true;
    }

  }).map(function(file) {
    var dir = path.parse(file.folder + file.filename).dir;
    var folder = dir.replace(filePath, '');
    return { dir: folder, filename: file.filename };
  });
}

function checkHypertiesFile() {

  var name = 'Hyperties';
  var resourcePath = '/resources/descriptors/' + name + '.json';

  try {
    var stats = fs.lstatSync(path.resolve(process.cwd() + resourcePath));
    return true;
  } catch (e) {
    fs.writeFile(path.resolve(process.cwd() + resourcePath), '{}', (err) => {
      if (err) throw new Error(err);
      return true;
    });
  }

}

module.exports = {
  checkHypertiesFile: checkHypertiesFile,
  filterHyperties: filterHyperties,
  convertHyperty: convertHyperty
};
