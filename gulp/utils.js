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

module.exports = {
  replacePattern: replacePattern,
  unixifyPath: unixifyPath
}
