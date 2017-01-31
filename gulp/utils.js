function replacePattern(str, value) {
  const regex = /%domain%/gm;
  const subst = value;

  try {
    strToReplace = String(str)
  } catch (error) {
    strToReplace = String(JSON.stringify(str));
  }

  // The substituted value will be contained in the result variable
  return strToReplace.replace(regex, subst);
}

module.exports = {
  replacePattern: replacePattern
}