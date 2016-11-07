// jshint varstmt: false

var argv = require('yargs').argv;

var getStage = function() {

  var stage = 'production';

  if (argv.dev) {
    stage = argv.dev ? 'develop' : 'production';
  }

  if (process.env.hasOwnProperty('DEVELOPMENT')) {
    stage = process.env.DEVELOPMENT === 'true' ? 'develop' : 'production';
  }

  return stage;
};

module.exports = getStage;
