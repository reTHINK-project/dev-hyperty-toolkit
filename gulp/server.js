// jshint varstmt: false
var fs = require('fs');
var gutil = require('gulp-util');
var getStage = require('./stage');
var browserSync = require('browser-sync').create('Toolkit');

module.exports = browserSync;

module.exports = function server(done) {

  var stage = getStage();

  var timestamps = true;

  var codeSync = true;
  var minify = false;
  var logLevel = 'info';
  var notify = true;
  var logConnections = true;
  var injectChanges = true;
  var ui = {};
  var logFileChanges = true;

  if (stage === 'production') {
    codeSync = false;
    minify = true;
    logLevel = 'info';
    notify = false;
    injectChanges = false;
    ui = false;
  }

  var server = {
    baseDir: './app'
  };

  console.log(stage);
  if (stage === 'develop') {
    server.middleware = devMiddleware;
  } else {
    server.middleware = middleware;
    server.routes = {
      '/.well-known/runtime': 'node_modules/runtime-browser/bin'
    };
  }

  // Serve files from the root of this project
  browserSync.init({
    open: false,
    online: false,
    timestamps: timestamps,
    logLevel: logLevel,
    logFileChanges: logFileChanges,
    port: 443,
    minify: minify,
    notify: notify,
    ui: ui,
    injectChanges: injectChanges,
    ghostMode: false,
    https: {
      key: 'rethink-certificate.key',
      cert: 'rethink-certificate.cert'
    },
    logConnections: logConnections,
    codeSync: codeSync,
    server: server
  }, function(err) {
    if (err) {
      gutil.log('Check the documentation on Gulp Task.');
      gutil.log('Or open an issue here https://github.com/reTHINK-project/dev-hyperty-toolkit/issues');
      done(err);
    }

    browserSync.reload();
    done();
  });

};

function middleware(req, res, next) {
  gutil.log(req.originalUrl);
  res.setHeader('Access-Control-Allow-Origin', '*');
  return next();
}

function devMiddleware(req, res, next) {
  var paths;
  gutil.log(req.originalUrl);
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.originalUrl.includes('.well-known')) {

    paths = req.originalUrl.split('/');
    var type = paths[2];
    var resource = paths[3];

    if (req.originalUrl.includes('index.html') || req.originalUrl.includes('.js')) {
      if (req.originalUrl.includes('index.html')) {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('node_modules/runtime-browser/bin/index.html', 'utf8'));
      } else {
        res.writeHeader(200, {'Content-Type': 'application/javascript'});
        res.end(fs.readFileSync('node_modules/runtime-browser/bin/' + resource, 'utf8'));
      }

    } else if (req.originalUrl.includes('sourcepackage')) {
      paths = req.originalUrl.split('/');
      var cguid = Number(paths[3]);
      var idType = cguid.toString().substring(0, 1);
      var sourcePackage;
      var selectedObject;
      var resourceObject;

      switch (idType) {
        case '1':
          resourceObject = getResources('hyperty');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;

        case '2':
          resourceObject = getResources('dataschema');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;

        case '3':
          sourcePackage = getResources('runtime');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;

        case '4':
          resourceObject = getResources('protocolstub');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;
        case '5':
          sourcePackage = getResources('idp-proxy');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;
      }

      res.writeHeader(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(sourcePackage));

    } else {

      var raw = getResources(type);

      res.writeHeader(200, {'Content-Type': 'application/json'});
      if (resource) {

        if (req.originalUrl.includes('cguid')) {
          res.end(JSON.stringify(Number(raw[resource].cguid), '', 2));
        } else if (req.originalUrl.includes('version')) {
          res.end(JSON.stringify(Number(raw[resource].version), '', 2));
        } else {
          res.end(JSON.stringify(raw[resource], '', 2));
        }

      } else {
        var listOfResources = [];
        for (var key in raw) {
          if (raw.hasOwnProperty(key)) {
            listOfResources.push(key);
          }
        }
        res.end(JSON.stringify(listOfResources, '', 2));
      }
    }
  }

  next();

}

function getResources(type) {
  var raw;
  switch (type) {
    case 'runtime':
      raw = JSON.parse(fs.readFileSync('./resources/descriptors/Runtimes.json', 'utf8'));
      break;
    case 'hyperty':
      raw = JSON.parse(fs.readFileSync('./resources/descriptors/Hyperties.json', 'utf8'));
      break;
    case 'idp-proxy':
      raw = JSON.parse(fs.readFileSync('./resources/descriptors/IDPProxys.json', 'utf8'));
      break;
    case 'protocolstub':
      raw = JSON.parse(fs.readFileSync('./resources/descriptors/ProtoStubs.json', 'utf8'));
      break;
    case 'dataschema':
      raw = JSON.parse(fs.readFileSync('./resources/descriptors/DataSchemas.json', 'utf8'));
      break;
  }

  return raw;
}

function filterResource(resource, key) {
  return Object.keys(resource).filter(function(a) {
    return resource[a].cguid === key;
  })[0];
}
