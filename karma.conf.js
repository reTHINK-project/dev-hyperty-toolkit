// jshint varstmt: false
// Karma configuration
// Generated on Wed Mar 16 2016 17:55:36 GMT+0000 (WET)

var fs = require('fs');

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'resources/descriptors/Runtimes.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/ProtoStubs.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/IDPProxys.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/Hyperties.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/DataSchemas.json', watched: false, included: false, served: true, nocache: false },
      'test/**/*.spec.js'
    ],

    plugins: [
     'karma-mocha',
     'karma-browserify',
     'karma-mocha-reporter',
     'karma-chrome-launcher'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.spec.js': ['browserify']
    },

    browserify: {
      transform: [
        ['babelify']
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    protocol: 'https',

    httpsServerOptions: {
      key: fs.readFileSync('rethink-certificate.key', 'utf8'),
      cert: fs.readFileSync('rethink-certificate.cert', 'utf8')
    },

    proxyValidateSSL: false,

    customHeaders: [{
      name: 'Access-Control-Allow-Origin',
      value: '*'
    }],

    client: {
      captureConsole: true
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['CustomChrome'],

    // you can define custom flags
    customLaunchers: {
      CustomChrome: {
        base: 'Chrome',
        flags: [
          '--disable-web-security',
          '--ignore-certificate-errors'
        ],
        debug: false
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
