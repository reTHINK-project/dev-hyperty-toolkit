var gulp = require('gulp');
var path = require('path');

var gutil = require('gulp-util');

var webpack = require('webpack');
var source = require('vinyl-source-stream');
var webpackStream = require('webpack-stream');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var browserSync = require('./server').browserSync;

var config = require('../toolkit.config.json');

var convertSchema = require('./resources/dataschema').convertSchema;
var convertHyperty = require('./resources/hyperty').convertHyperty;
var createDescriptor = require('./descriptors').createDescriptor;

function watchHTML() {

  gulp.watch(['./../server/*.*', process.env.HYPERTY_REPO + '/examples/main.js'], bundleHTML);

  bundleHTML();
}

function bundleHTML() {

  var webpackConfig = {
    entry: {
      rethink: __dirname + '/../server/rethink.js'
    },
    output: {
      path: __dirname + '/../app',
      filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
      modules: [
        'node_modules',
        path.resolve(process.env.HYPERTY_REPO + '/examples')
      ],
      alias: {
        app: path.resolve(process.env.HYPERTY_REPO + '/examples/main.js')
      }
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'My App',
      template: 'server/index.ejs',
      files: {
        css: [],
        js: []
      }
    })]
  };

  return gulp.src(['./../server/*.*', process.env.HYPERTY_REPO + '/examples/main.js'])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('app/'));
}

function watchHyperties(done) {

  console.log('Watching hyperties:', process.env.HYPERTY_REPO);
  var hypertyPath = process.env.HYPERTY_REPO;

  gulp.watch([hypertyPath + '/src/**/*.js'], function(event) {

    console.log('Hyperty:', event);

    if (event.type === 'changed') {

      var fileObject = path.parse(event.path);
      var filePath = fileObject.dir + '/*.hy.js';
      watchHyperty(filePath);

    }

  });

  gulp.watch([hypertyPath + '/src/**/*.hy.json'], function(event) {

    return gulp.src(event.path)
      .pipe(createDescriptor())
      .pipe(gulp.dest('./resources/descriptors/'))
      .on('end', function() {
        gutil.log('the preconfiguration hyperty was changed, and the Hyperties.json was updated');
        browserSync.reload();
      });

  });

}

function watchHyperty(filePath) {
  console.log('Watch:', filePath);
  return gulp.src(filePath)
    .pipe(convertHyperty())
    .resume()
    .on('end', function() {
      browserSync.reload();
    });
}

function watchProtostubs() {

}

function watchIdpProxies() {
    
}

function createHyperties(done) {

  var hyperties = config.include_hyperties || [];

  var sourceCode = hyperties.map(function(hyperty) {
    return process.env.HYPERTY_REPO + '/src/' + hyperty + '/*.hy.js';
  });

  var descriptor = hyperties.map(function(hyperty) {
    return process.env.HYPERTY_REPO + '/src/' + hyperty + '/*.hy.json';
  });


  gulp.src(descriptor)
    .pipe(createDescriptor())
    .pipe(gulp.dest('./resources/descriptors/'))
    .on('end', function() {
      gutil.log('the preconfiguration hyperty was changed, and the Hyperties.json was updated');
      browserSync.reload();
    });

  return gulp.src(sourceCode)
    .pipe(convertHyperty())
    .on('end', function() {
      browserSync.reload();
    });
}

function createDataSchemas() {

  return gulp.src([process.env.HYPERTY_REPO + '/src/**/*.ds.json', './resources/schemas/**/*.ds.json'])
    .pipe(convertSchema())
    .on('end', function() {
      browserSync.reload();
    });
}

module.exports = {
  createHyperties: createHyperties,
  createDataSchemas: createDataSchemas,

  watchHTML: watchHTML,
  watchHyperties: watchHyperties
};
