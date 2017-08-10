var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var through = require('through2');

var gutil = require('gulp-util');

var walk = require('../walk');

var config = require('../toolkit.config');
var transpile = require('../transpile');
var resource = require('../resources');

function convertProtoStub() {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);

    return gulp.src([chunk.path])
      .on('end', function() {
        gutil.log('-----------------------------------------------------------');
        gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
      })
      .pipe(transpile({
        destination: path.join(process.cwd(), 'resources'),
        standalone: 'activate',
        debug: false
      }))
      .pipe(resource())
      .resume()
      .on('end', function() {
        gutil.log('Protostub', fileObject.name, ' was converted and encoded');
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
    return { filename: filename, folder: dirname, content: content };
  });
}

function filterProtostubs(environment) {

  var filePath = path.join(config.protostubs.repository, config.protostubs.sourceCode);
  var stubs = [];

  walk(filePath, function(filepath, rootdir, subdir, filename) {
    if (filename.includes('.ps.json')) {
      readFiles(path.join(rootdir, '/', subdir, '/'), filename).forEach(function(fileObject) {
        stubs.push(fileObject);
      });
    }
  });

  return stubs.filter(function(file) {
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

module.exports = {
  filterProtostubs: filterProtostubs,
  convertProtoStub: convertProtoStub
};
