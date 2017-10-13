var gulp = require('gulp');
var path = require('path');

var gutil = require('gulp-util');

var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var browserSync = require('./server').browserSync;

var config = require('./toolkit.config.js');

var { unixifyPath } = require('./utils');
var { getTypeOfFile, encode } = require('./encodeTask');

var { convertDataSchema, filterDataSchema } = require('./resources/dataschema');
var { filterHyperties, convertHyperty } = require('./resources/hyperty');
var { filterProtostubs, convertProtoStub } = require('./resources/protostub');
var createDescriptor = require('./descriptors').createDescriptor;
var getTypeOfDescriptor = require('./descriptors').getTypeOfDescriptor;

function watchHTML() {

  gulp.watch([
    process.cwd() + '/server/*.*',
    process.env.HYPERTY_REPO + '/examples/main.js',
    process.env.HYPERTY_REPO + '/exmaples/**/*.hbs',
    process.env.HYPERTY_REPO + '/exmaples/**/*.js'], () => {
    bundleHTML();
  });

  return bundleHTML();
}

function bundleHTML() {

  var webpackConfig = {
    entry: {
      rethink: process.cwd() + '/server/rethink.js'
    },
    output: {
      path: process.cwd() + '/app',
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
      template: process.cwd() + '/server/index.ejs',
      files: {
        css: [],
        js: []
      }
    })]
  };


  return gulp.src([process.cwd() +  '/server/*.*', process.env.HYPERTY_REPO + '/examples/main.js'])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('app/'));
}

function watchResources(done) {

  gulp.watch(['./resources/*.js'], function(event) {

    var type = getTypeOfFile(event.path);

    switch (type) {
      case 'Runtime':
        var transpileOpts = {};
        transpileOpts.isES6 = false;
        encode(event.path, {}, transpileOpts);
        break;
    }

  });

}

function watchHyperties(done) {

  var sourceCode = getListOfResources('hyperty');
  sourceCode = sourceCode.map(item => path.join(item, '*.js'));

  gulp.watch(sourceCode, function(event) {
    console.log('event:', event);
    return watchResource(event, 'hyperty');
  });

  var descriptor = getListOfResources('hyperty');
  descriptor = descriptor.map(item => path.join(item, '*.hy.json'));

  gulp.watch(descriptor, function(event) {
    return generateDescriptor('hyperty', event.path);
  });

}

function watchProtostubs(done) {

  var sourceCode = getListOfResources('protocolstub');
  sourceCode = sourceCode.map(item => path.join(item, '*.js'));

  console.log('Watch Protostubs SourceCode:', sourceCode);

  gulp.watch(sourceCode, function(event) {
    console.log('Change Portostubs code:', event);
    return watchResource(event, 'protocolstub');
  });


  var descriptor = getListOfResources('protocolstub');
  descriptor = descriptor.map(item => path.join(item, '*.ps.json'));
  gulp.watch(descriptor, function(event) {
    console.log('Change Portostubs descriptor:', event);
    return generateDescriptor('protocolstub', event.path);
  });

}

function watchIdpProxies(done) {

  var sourceCode = getListOfResources('idp-proxy');
  sourceCode = sourceCode.map(item => path.join(item, '*.idp.js'));

  // console.log('Watch SourceCode:', sourceCode);

  gulp.watch(sourceCode, function(event) {
    return watchResource(event, 'idp-proxy');
  });


  var descriptor = getListOfResources('idp-proxy');
  descriptor = descriptor.map(item => path.join(item, '*.idp.json'));
  gulp.watch(descriptor, function(event) {
    return generateDescriptor('idp-proxy', event.path);
  });

}


function watchDataSchemas(done) {
  var sourceCode = getListOfResources('dataschema');
  sourceCode = sourceCode.map(item => path.join(item, '*.ds.js'));

  // Watch the local resources for DataSchemas
  sourceCode.concat([process.cwd() + path.join('resources', 'schemas', '**', '*.ds.json')]);

  gulp.watch(sourceCode, function(event) {
    return watchResource(event, 'dataschema');
  });


  var descriptor = getListOfResources('dataschema');
  descriptor = descriptor.map(item => path.join(item, '*.ds.json'));

  // Watch the local resources for DataSchemas
  descriptor = descriptor.concat([process.cwd() + path.join('resources', 'schemas', '**', '*.ds.json')]);

  // console.log('Watch dataSchema: ', descriptor);
  gulp.watch(descriptor, function(event) {
    return generateDescriptor('dataschema', event.path);
  });
}

function watchResource(event, type) {

  if ((event.type === 'changed' || event.type === 'added') && !event.path.includes('node_modules')) {

    var fileObject = path.parse(event.path);
    var resource;
    var convertFunction;
    var filePath;

    switch (type) {

      case 'hyperty':
        resource = getTypeOfDescriptor('hyperty');
        convertFunction = convertHyperty;
        filePath = path.join(fileObject.dir, '*' + resource.extension + '.js');
        break;

      case 'protocolstub':
        resource = getTypeOfDescriptor('protocolstub');
        convertFunction = convertProtoStub;
        filePath = path.join(fileObject.dir, '*' + resource.extension + '.js');
        break;

      case 'idp-proxy':
        resource = getTypeOfDescriptor('idp-proxy');
        convertFunction = convertProtoStub;
        filePath = path.join(fileObject.dir, '*' + resource.extension + '.js');
        break;

      case 'dataschema':
        resource = getTypeOfDescriptor('dataschema');
        convertFunction = convertDataSchema;
        filePath = path.join(fileObject.dir, '*' + resource.extension + '.js');
        break;
    }

    return gulp.src(filePath)
      .pipe(convertFunction())
      .resume()
      .on('end', function() {
        browserSync.reload();
      });

  }

}

function getListOfResources(type) {

  var resource = getTypeOfDescriptor(type);
  var list;
  var filtered;
  var resourcePath;
  var resourceSrc;

  switch (resource.type) {
    case 'idp-proxy':
    case 'protocolstub':
      list = config.protostubs.include_stubs || ['**'];
      filtered = filterProtostubs(process.env.ENVIRONMENT);
      resourcePath = config.protostubs.repository;
      resourceSrc = config.protostubs.sourceCode;
      break;

    case 'hyperty':
      list = config.hyperties.include_hyperties || ['**'];
      filtered = filterHyperties(process.env.ENVIRONMENT);
      resourcePath = config.hyperties.repository;
      resourceSrc = config.hyperties.sourceCode;
      break;

    case 'dataschema':
      list = config.hyperties.include_hyperties || ['**'];
      filtered = filterDataSchema(process.env.ENVIRONMENT);
      resourcePath = config.hyperties.repository;
      resourceSrc = config.hyperties.sourceCode;
      break;
  }

  if (list.length === 0) {
    list = filtered.map(resource => unixifyPath(resource.dir).replace('/', ''));
  }

  var resources = list.map((item) => {
    item = item.trim();
    return path.join(resourcePath, resourceSrc, item);
  }).filter((item) => {
    return !!filtered.filter(resource => item.includes(resource.dir)).length;
  });

  return resources;
}

/** Create descriptors and source code for Hyperties */

function createHypertiesSourceCode() {
  return generateSourceCode('hyperty');
}

function createHypertiesDescriptors() {
  return generateDescriptor('hyperty');
}

/** Create descriptors and source code for Protostubs */
function createProtoStubsSourceCode() {
  return generateSourceCode('protocolstub');
}

function createProtoStubsDescriptors() {
  return generateDescriptor('protocolstub');
}

/** Create descriptors and source code for IDP Proxies */
function createIDPProxySourceCode() {
  return generateSourceCode('idp-proxy');
}

function createIDPProxyDescriptors() {
  return generateDescriptor('idp-proxy');
}

/** Create descriptors and source code for IDP Proxies */
function createDataSchemasSourceCode() {
  return generateSourceCode('dataschema');
}

function createDataSchemasDescriptors() {
  return generateDescriptor('dataschema');
}

function generateSourceCode(type) {

  var resource = getTypeOfDescriptor(type);
  var list;
  var filtered;
  var repository;
  var convertFunction;

  // console.log('resource:', resource);

  switch (resource.type) {
    case 'idp-proxy':
    case 'protocolstub':
      list = config.protostubs.include_stubs;
      repository = path.join(config.protostubs.repository, config.protostubs.sourceCode);
      filtered = filterProtostubs(process.env.ENVIRONMENT);
      convertFunction = convertProtoStub;
      break;

    case 'hyperty':
      list = config.hyperties.include_hyperties;
      repository = path.join(config.hyperties.repository, config.hyperties.sourceCode);
      filtered = filterHyperties(process.env.ENVIRONMENT);
      convertFunction = convertHyperty;
      break;

    case 'dataschema':
      list = config.hyperties.include_hyperties;
      repository = path.join(config.hyperties.repository, config.hyperties.sourceCode);
      filtered = filterDataSchema(process.env.ENVIRONMENT);
      convertFunction = convertDataSchema;
      break;
  }

  if (list.length === 0) {
    list = filtered.map(resource => unixifyPath(resource.dir).replace('/', ''));
  }

  var sourceCode = list.map((item) => {
    item = item.trim();
    return path.join(repository, item, '*' + resource.extension + '.js');
  }).filter((item) => {
    return !!filtered.filter(resource => item.includes(resource.dir)).length;
  });

  return gulp.src(sourceCode)
    .pipe(convertFunction())
    .on('end', function() {
      browserSync.reload();
    });

}

function generateDescriptor(type, filePath) {

  var resource = getTypeOfDescriptor(type);
  var list;
  var filtered;
  var repository;

  switch (resource.type) {
    case 'idp-proxy':
    case 'protocolstub':
      list = config.protostubs.include_stubs;
      repository = path.join(config.protostubs.repository, config.protostubs.sourceCode);
      filtered = filterProtostubs(process.env.ENVIRONMENT);
      break;

    case 'hyperty':
      list = config.hyperties.include_hyperties;
      repository = path.join(config.hyperties.repository, config.hyperties.sourceCode);
      filtered = filterHyperties(process.env.ENVIRONMENT);
      break;

    case 'dataschema':
      list = config.hyperties.include_hyperties;
      repository = path.join(config.hyperties.repository, config.hyperties.sourceCode);
      filtered = filterDataSchema(process.env.ENVIRONMENT);

  }

  if (list.length === 0) {
    list = filtered.map(resource => unixifyPath(resource.dir).replace('/', ''));
  }

  var descriptor = list.map((item) => {
    item = item.trim();
    return path.join(repository, item, '*' + resource.extension + '.json');
  }).filter((item) => {
    return !!filtered.filter(resource => item.includes(resource.dir)).length;
  });

  if (filePath) { descriptor = filePath; }

  if (resource.type === 'dataschema') {
    descriptor = descriptor.concat('./resources/schemas/**/*.ds.json');
    return gulp.src(descriptor)
      .pipe(convertDataSchema())
      .on('end', function() {
        gutil.log('the pre configuration of ' + resource.type + '  was changed, and the ' + resource.name + '.json was updated');
        browserSync.reload();
      });
  }

  return gulp.src(descriptor)
    .pipe(createDescriptor(resource.type))
    .pipe(gulp.dest('./resources/descriptors/' + resource.name + '.json'))
    .on('end', function() {
      gutil.log('the pre configuration of ' + resource.type + '  was changed, and the ' + resource.name + '.json was updated');
      browserSync.reload();
    });

}

module.exports = {
  createHypertiesSourceCode: createHypertiesSourceCode,
  createHypertiesDescriptors: createHypertiesDescriptors,

  createProtoStubsSourceCode: createProtoStubsSourceCode,
  createProtoStubsDescriptors: createProtoStubsDescriptors,

  createIDPProxySourceCode: createIDPProxySourceCode,
  createIDPProxyDescriptors: createIDPProxyDescriptors,

  createDataSchemasSourceCode: createDataSchemasSourceCode,
  createDataSchemasDescriptors: createDataSchemasDescriptors,

  watchDataSchemas: watchDataSchemas,
  watchIdpProxies: watchIdpProxies,
  watchProtostubs: watchProtostubs,
  watchHyperties: watchHyperties,
  watchResources: watchResources,
  watchHTML: watchHTML
};
