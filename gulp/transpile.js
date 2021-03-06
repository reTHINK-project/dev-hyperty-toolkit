// jshint varstmt: false
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var gutil = require('gulp-util');
var through = require('through2');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// var CompressionPlugin = require('compression-webpack-plugin');

var getStage = require('./stage');
var getEnvironment = require('./environment');

var extensions = ['.js', '.json'];

function getHypertyConfiguration(filePath) {

  var fileObject = path.parse(filePath);

  try {

    var config = fs.readFileSync(fileObject.dir + '/' + fileObject.name + '.json', 'utf8');
    var parsedConfig = JSON.parse(config);
    var constraints = parsedConfig.constraints ? parsedConfig.constraints : null;

    if (constraints) {

      var result = Object.keys(constraints).filter(function(key) {
        return constraints[key] === true;
      });

      return result[0];

    }

  } catch (error) {
    return;
  }

}

module.exports = function transpile(opts) {

  // Return for browser
  return through.obj(function(chunk, enc, cb) {

    var fileObject = path.parse(chunk.path);
    var args = {};

    args.entries = [chunk.path];
    args.extensions = extensions;
    if (opts.debug) args.debug = opts.debug;
    if (opts.standalone) args.standalone = opts.standalone;

    var filename = opts.filename || fileObject.base;

    var environment = opts.environment || getEnvironment();

    if (environment === 'all') {
      return chooseTranspileMode(args, filename, opts, chunk, cb);
    } else if ((environment === 'browser' || environment === 'core') && !filename.includes('.hy.js')) {
      return chooseTranspileMode(args, filename, opts, chunk, cb);
    } else {
      return chooseTranspileMode(args, filename, opts, chunk, cb);
    }

  });

};

function chooseTranspileMode(args, filename, opts, chunk, cb) {
  var configEnv = getHypertyConfiguration(chunk.path);
  if (configEnv === 'node') {
    gutil.log('Converting ' + filename + ' to be used on node');
    return transpileNode(chunk.path, opts, chunk, cb);
  } else {
    gutil.log('Converting ' + filename + ' to be used on browser');
    return transpileBrowser(args, filename, opts, chunk, cb);
  }

}

const webPackPlugins = [
  new webpack.DefinePlugin({
    global: {},
    'process.env.NODE_ENV': '"production"'
  }),
  new UglifyJsPlugin(),

  // new webpack.optimize.UglifyJsPlugin({
  //   mangle: true,
  //   compress: {
  //     pure_getters: true,
  //     unsafe: true,
  //     unsafe_comps: true,
  //     screw_ie8: true
  //   },
  //   output: {
  //     comments: false
  //   },
  //   exclude: [/\.min\.js$/gi, /node_modules/] // skip pre-minified libs
  // }),
  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  new webpack.NoErrorsPlugin()

  // new CompressionPlugin({
  //   asset: '[path].gz[query]',
  //   algorithm: 'gzip',
  //   test: /\.js$|\.css$|\.html$/,
  //   threshold: 10240,
  //   minRatio: 0
  // })
];

function transpileBrowser(args, filename, opts, chunk, cb) {
  var fileObject = path.parse(chunk.path);
  var stage = getStage();
  var varPlugins = stage === 'develop' ? [] : webPackPlugins;
  var varCache = stage === 'develop' ? false : true;
  var varDevtool = stage === 'develop' ? 'eval-source-map' : 'none';

  if (filename == 'VertxAppProtoStub.ps.js') {
    varPlugins = [];
    varCache = false;
    varDevtool = 'eval-source-map';
  }

  return gulp.src(chunk.path)
    .pipe(webpackStream({
      plugins: varPlugins,
      cache: varCache,
      devtool: varDevtool,
      output: {
        path: path.join(opts.destination),
        library: opts.standalone,
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
        filename: fileObject.base
      },
      module: {
        rules: [
          {
            test: /\.json$/,
            use: [
              { loader: 'json-loader'}
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              { loader: 'babel-loader', options: {
                extends: path.join(__dirname, '..', '.babelrc')
              }}
            ]
          }
        ]
      }
    }, webpack))
    .on('error', function(err) {
      gutil.log(gutil.colors.red(err));
      this.emit('end');
    })
    .pipe(gulp.dest(opts.destination))
    .on('end', function() {
      var resolvedPath = verifyAndCreate(path.resolve(opts.destination + '/' + fileObject.base));
      chunk.contents = fs.readFileSync(resolvedPath);
      chunk.path = resolvedPath;
      cb(null, chunk);
    });
}

function transpileNode(filename, opts, chunk, cb) {

  var fileObject = path.parse(chunk.path);
  var stage = getStage();

  return gulp.src(chunk.path)
    .pipe(webpackStream({
      target: 'node',
      plugins: stage === 'develop' ? [] : webPackPlugins,
      cache: stage === 'develop' ? false : true,
      devtool: stage === 'develop' ? 'eval-source-map' : 'none',
      output: {
        path: path.join(opts.destination),
        library: opts.standalone,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: fileObject.base
      },
      module: {
        rules: [
          {
            test: /\.json$/,
            use: [
              { loader: 'json-loader'}
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              { loader: 'babel-loader', options: {
                extends: path.join(__dirname, '..', '.babelrc')
              }}
            ]
          }
        ]
      }
    }, webpack))
    .on('error', function(err) {
      gutil.log(gutil.colors.red(err));
      this.emit('end');
    })
    .pipe(gulp.dest(opts.destination))
    .on('end', function() {
      var resolvedPath = verifyAndCreate(path.resolve(opts.destination + '/' + fileObject.base));
      chunk.contents = fs.readFileSync(resolvedPath);
      chunk.path = resolvedPath;
      cb(null, chunk);
    });
}

function verifyAndCreate(path) {

  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '', 'utf8');
  }

  return path;
}
