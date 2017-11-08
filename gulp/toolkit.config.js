var hypertiesIncluded = process.env.HYPERTY_INCLUDES || [];
var stubsIncluded = process.env.PROTOSTUB_INCLUDES || [];

if (typeof hypertiesIncluded === 'string') {
  hypertiesIncluded = hypertiesIncluded.split(',');
}

if (typeof stubsIncluded === 'string' ) {
  stubsIncluded = stubsIncluded.split(',');
}

var config = {
  templates: process.env.HYPERTY_TEMPLATES_PATH || 'examples',
  hyperties: {
    repository: process.env.HYPERTY_REPO || '../dev-hyperty',
    sourceCode: process.env.HYPERTY_SOURCECODE_PATH || 'src',
    include_hyperties: hypertiesIncluded
  },
  protostubs: {
    repository: process.env.PROTOSTUB_REPO || '../dev-protostubs',
    sourceCode: process.env.PROTOSTUB_SOURCECODE_PATH || 'src',
    include_stubs: stubsIncluded
  }
};

module.exports = config;
