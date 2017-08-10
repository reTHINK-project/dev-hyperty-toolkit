var gulp = require('gulp');
var path = require('path');

var gutil = require('gulp-util');

var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var browserSync = require('./server').browserSync;

var config = require('./toolkit.config.js');

var convertSchema = require('./resources/dataschema').convertSchema;
var { filterHyperties, convertHyperty } = require('./resources/hyperty');
var { filterProtostubs, convertProtoStub } = require('./resources/protostub');
var createDescriptor = require('./descriptors').createDescriptor;

function watchHTML() {

  gulp.watch(['./../server/*.*', process.env.HYPERTY_REPO + '/examples/main.js'], bundleHTML);

  return bundleHTML();
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
        path.resolve(process.env.HYPERTY_REPO + '/' + process.env.HYPERTY_TEMPLATES_PATH)
      ],
      alias: {
        app: path.resolve(process.env.HYPERTY_REPO + '/' + process.env.HYPERTY_TEMPLATES_PATH + '/main.js')
      }
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Hyperty Toolkit',
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

  var hypertyPath = config.hyperties.repository;
  var hypertySrc = config.hyperties.sourceCode;
  var hyperties = config.hyperties.include_hyperties || ['**'];
  var filtered = filterHyperties(process.env.ENVIRONMENT);

  if (hyperties.length === 0) {
    hyperties = filtered.map(resource => resource.dir.replace('/', ''));
  }

  var sourceCode = hyperties.map((hyperty) => {
    hyperty = hyperty.trim();
    return hypertyPath + '/' + hypertySrc + '/' + hyperty + '/*.js';
  }).filter((hyperty) => {
    return !!filtered.filter(resource => hyperty.includes(resource.dir)).length;
  });

  gulp.watch(sourceCode, function(event) {

    if ((event.type === 'changed' || event.type === 'added') && !event.path.includes('node_modules')) {
      var fileObject = path.parse(event.path);
      var filePath = fileObject.dir + '/*.hy.js';
      watchHyperty(filePath);
    }

  });

  var descriptor = hyperties.map((hyperty) => {
    hyperty = hyperty.trim();
    return hypertyPath + '/' + hypertySrc + '/' + hyperty + '/*.hy.json';
  }).filter((hyperty) => {
    return !!filtered.filter(resource => hyperty.includes(resource.dir)).length;
  });

  gulp.watch(descriptor, function(event) {

    return gulp.src(event.path)
      .pipe(createDescriptor('hyperty'))
      .pipe(gulp.dest('./resources/descriptors/'))
      .on('end', function() {
        gutil.log('the preconfiguration hyperty was changed, and the Hyperties.json was updated');
        browserSync.reload();
      });

  });

}

function watchHyperty(filePath) {
  return gulp.src(filePath)
    .pipe(convertHyperty())
    .resume()
    .on('end', function() {
      browserSync.reload();
    });
}

function watchProtostubs() {

  var stubPath = config.protostubs.repository;
  var stubSrc = config.protostubs.sourceCode;
  var stubs = config.protostubs.include_stubs || ['**'];
  var filtered = filterProtostubs(process.env.ENVIRONMENT);

  if (stubs.length === 0) {
    stubs = filtered.map(resource => resource.dir.replace('/', ''));
  }

  var sourceCode = stubs.map((stub) => {
    stub = stub.trim();
    return stubPath + '/' + stubSrc + '/' + stub + '/*.js';
  }).filter((stub) => {
    return !!filtered.filter(resource => stub.includes(resource.dir)).length;
  });

  gulp.watch(sourceCode, function(event) {

    if ((event.type === 'changed' || event.type === 'added') && !event.path.includes('node_modules')) {
      var fileObject = path.parse(event.path);
      var filePath = fileObject.dir + '/*.ps.js';
      watchStub(filePath);
    }

  });


  var descriptor = stubs.map((stub) => {
    stub = stub.trim();
    return stubPath + '/' + stubSrc + '/' + stub + '/*.ps.json';
  }).filter((stub) => {
    return !!filtered.filter(resource => stub.includes(resource.dir)).length;
  });

  gulp.watch(descriptor, function(event) {

    return gulp.src(event.path)
      .pipe(createDescriptor('protostub'))
      .pipe(gulp.dest('./resources/descriptors/ProtoStubs.json'))
      .on('end', function() {
        gutil.log('the preconfiguration protostubs was changed, and the ProtoStubs.json was updated');
        browserSync.reload();
      });

  });

}

function watchStub(filePath) {
  return gulp.src(filePath)
    .pipe(convertProtoStub())
    .resume()
    .on('end', function() {
      browserSync.reload();
    });
}

function watchIdpProxies() {
    
}

function createHypertiesSourceCode(done) {

  var hyperties = config.hyperties.include_hyperties;
  var filtered = filterHyperties(process.env.ENVIRONMENT);

  if (hyperties.length === 0) {
    hyperties = filtered.map(resource => resource.dir.replace('/', ''));
  }

  var sourceCode = hyperties.map((hyperty) => {
    hyperty = hyperty.trim();
    return config.hyperties.repository + '/' + config.hyperties.sourceCode + '/' + hyperty + '/*.hy.js';
  }).filter((hyperty) => {
    return !!filtered.filter(resource => hyperty.includes(resource.dir)).length;
  });

  return gulp.src(sourceCode)
    .pipe(convertHyperty())
    .on('end', function() {
      browserSync.reload();
    });
}

function createHypertiesDescriptors() {

  var hyperties = config.hyperties.include_hyperties;
  var filtered = filterHyperties(process.env.ENVIRONMENT);

  if (hyperties.length === 0) {
    hyperties = filtered.map(resource => resource.dir.replace('/', ''));
  }

  var descriptor = hyperties.map((hyperty) => {
    hyperty = hyperty.trim();
    return config.hyperties.repository + '/' + config.hyperties.sourceCode + '/' + hyperty + '/*.hy.json';
  }).filter((hyperty) => {
    return !!filtered.filter(resource => hyperty.includes(resource.dir)).length;
  });


  return gulp.src(descriptor)
    .pipe(createDescriptor('hyperty'))
    .pipe(gulp.dest('./resources/descriptors/'))
    .on('end', function() {
      gutil.log('the preconfiguration hyperty was changed, and the Hyperties.json was updated');
      browserSync.reload();
    });

}

function createProtoStubsSourceCode() {
  var stubs = config.protostubs.include_stubs;
  var filtered = filterProtostubs(process.env.ENVIRONMENT);

  if (stubs.length === 0) {
    stubs = filtered.map(resource => resource.dir.replace('/', ''));
  }

  var sourceCode = stubs.map((stub) => {
    stub = stub.trim();
    return config.protostubs.repository + '/' + config.protostubs.sourceCode + '/' + stub + '/*.ps.js';
  }).filter((stub) => {
    return !!filtered.filter(resource => stub.includes(resource.dir)).length;
  });

  return gulp.src(sourceCode)
    .pipe(convertProtoStub())
    .on('end', function() {
      browserSync.reload();
    });
}

function createProtoStubsDescriptors() {

  var stubs = config.protostubs.include_stubs;
  var filtered = filterProtostubs(process.env.ENVIRONMENT);

  if (stubs.length === 0) {
    stubs = filtered.map(resource => resource.dir.replace('/', ''));
  }

  var descriptor = stubs.map((stub) => {
    stub = stub.trim();
    return config.protostubs.repository + '/' + config.protostubs.sourceCode + '/' + stub + '/*.ps.json';
  }).filter((stub) => {
    return !!filtered.filter(resource => stub.includes(resource.dir)).length;
  });

  return gulp.src(descriptor)
    .pipe(createDescriptor('protostub'))
    .pipe(gulp.dest('./resources/descriptors/ProtoStubs.json'))
    .on('end', function() {
      gutil.log('the preconfiguration protostub was changed, and the Prostostubs.json was updated');
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
  createHypertiesSourceCode: createHypertiesSourceCode,
  createHypertiesDescriptors: createHypertiesDescriptors,

  createProtoStubsSourceCode: createProtoStubsSourceCode,
  createProtoStubsDescriptors: createProtoStubsDescriptors,

  createDataSchemas: createDataSchemas,

  watchHTML: watchHTML,
  watchHyperties: watchHyperties,
  watchProtostubs: watchProtostubs
};
