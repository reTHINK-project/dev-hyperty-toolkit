// jshint varstmt: false
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var _ = require('lodash');
var gutil = require('gulp-util');
var through = require('through2');
var source = require('vinyl-source-stream');

var encode = require('./descriptors').encode;

module.exports = function resource(opts) {

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

};
