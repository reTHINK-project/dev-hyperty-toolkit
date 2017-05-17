// jshint varstmt: false

var getStage = function() {

  var stage = 'production';

  if (process.env.hasOwnProperty('MODE')) {
    stage = process.env.MODE === 'dev' || process.env.MODE === 'develop' || process.env.MODE === 'development' ? 'develop' : 'production';
  }

  return stage;
};

module.exports = getStage;
