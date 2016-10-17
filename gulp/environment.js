// jshint varstmt: false

var argv = require('yargs').argv;

var getEnvironment = function() {

  var environment = 'browser';

  if (argv.browser) {
    environment = 'browser';
  }

  if (argv.node) {
    environment = 'node';
  }

  if (process.env.hasOwnProperty('ENVIRONMENT')) {
    environment = process.env.environment === 'browser' ? 'browser' : 'node';
  }

  return environment;
};

module.exports = getEnvironment;
