// jshint varstmt: false

var getEnvironment = function() {

  var environment = 'browser';

  if (process.env.hasOwnProperty('ENVIRONMENT')) {
    environment = process.env.ENVIRONMENT;
  }

  return environment;
};

module.exports = getEnvironment;
