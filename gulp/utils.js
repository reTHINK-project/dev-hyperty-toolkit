var fs = require('fs');

function replacePattern(str, value) {
  const regex = /%domain%/gm;
  const subst = value;
  var strToReplace;

  try {
    strToReplace = String(str);
  } catch (error) {
    strToReplace = String(JSON.stringify(str));
  }

  // The substituted value will be contained in the result variable
  return strToReplace.replace(regex, subst);
}

// Normalize \\ paths to / paths.
function unixifyPath(filepath) {

  // Windows?
  var win32 = process.platform === 'win32';

  if (win32) {
    return filepath.replace(/\\/g, '/');
  } else {
    return filepath;
  }
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

module.exports = {
  replacePattern: replacePattern,
  unixifyPath: unixifyPath,
  readFiles: readFiles
}
