// base on http://www.bymichaellancaster.com/blog/nodejs-recursively-access-folder/

// jshint varstmt: false

var fs = require('fs');
var path = require('path');

// Windows?
var win32 = process.platform === 'win32';

// Normalize \\ paths to / paths.
function unixifyPath(filepath) {
  if (win32) {
    return filepath.replace(/\\/g, '/');
  } else {
    return filepath;
  }
}

function walk(rootdir, callback, subdir) {
  var abspath = subdir ? path.join(rootdir, subdir) : rootdir;
  fs.readdirSync(abspath).forEach(function(filename) {
    var filepath = path.join(abspath, filename);
    if (fs.statSync(filepath).isDirectory()) {
      walk(rootdir, callback, unixifyPath(path.join(subdir || '', filename || '')));
    } else {
      callback(unixifyPath(filepath), rootdir, subdir, filename);
    }
  });
}

module.exports = walk;
