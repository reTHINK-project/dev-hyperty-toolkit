// jshint varstmt: false
// Karma configuration
// Generated on Wed Mar 16 2016 17:55:36 GMT+0000 (WET)

var fs = require('fs');

// TODO use webpack in tests
module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'resources/descriptors/Runtimes.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/ProtoStubs.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/IDPProxys.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/Hyperties.json', watched: false, included: false, served: true, nocache: false },
      { pattern: 'resources/descriptors/DataSchemas.json', watched: false, included: false, served: true, nocache: false },
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    // webpack configuration
    webpack: {
      devtool: 'inline-source-map'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'html'],

    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: false, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: false,      // do not print information about skipped tests
      showSpecTiming: true,      // print the time elapsed for each spec
      failFast: false              // test would finish with error when a first fail occurs.
    },

    // the default configuration
    htmlReporter: {
      outputFile: 'test/units.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'reThink Project performance tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    plugins: ['karma-spec-reporter',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-sourcemap-loader',
      'karma-htmlfile-reporter',
      'karma-mocha-reporter',
      'karma-chrome-launcher'],

    protocol: 'https',

    httpsServerOptions: {
      key: fs.readFileSync('./gulp/ssl/local-server.key', 'utf8'),
      cert: fs.readFileSync('./gulp/ssl/loca-server.crt', 'utf8')
    },

    proxyValidateSSL: false,

    customHeaders: [{
      name: 'Access-Control-Allow-Origin',
      value: '*'
    }],

    client: {
      captureConsole: false
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
