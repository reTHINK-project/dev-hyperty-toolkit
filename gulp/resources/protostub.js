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

function filterProtostubs(environment) {

  var filePath = path.join(config.protostubs.repository, config.protostubs.sourceCode);
  var stubs = [];

  walk(filePath, function(filepath, rootdir, subdir, filename) {
    if (filename.includes('.ps.json') || filename.includes('.idp.json')) {
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
      var r = temp.hasOwnProperty('constraints') && temp.constraints.hasOwnProperty(typeOfEnvironment) && temp.constraints[typeOfEnvironment];

      if (typeOfEnvironment === 'browser') {
        r = temp.hasOwnProperty('constraints') && (temp.constraints.hasOwnProperty(typeOfEnvironment) && temp.constraints[typeOfEnvironment] || temp.constraints.hasOwnProperty('windowSandbox'));
      }

      return r;
    } else {
      return true;
    }

  }).map(function(file) {
    var dir = path.parse(file.folder + file.filename).dir;
    var folder = dir.replace(filePath, '');
    return { dir: folder, filename: file.filename };
  });
}

function checkProtostubsFile() {

  var name = 'ProtoStubs';
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
  checkProtostubsFile: checkProtostubsFile,
  filterProtostubs: filterProtostubs,
  convertProtoStub: convertProtoStub
};
