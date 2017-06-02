// jshint varstmt: false
var fs = require('fs');
var gutil = require('gulp-util');
var getStage = require('./stage');
var browserSync = require('browser-sync').create('Toolkit');

var bsServer;
var serverStatus;

function server(done) {

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

  if (stage === 'develop') {
    server.middleware = devMiddleware;
  } else {
    server.middleware = middleware;
    server.routes = {
      '/.well-known/runtime': 'node_modules/runtime-browser/bin'
    };

    gutil.log('|******************************************************************************|');
    gutil.log('|                                                                              |');
    gutil.log('|                     THE TOOLKIT IS IN PRODUCTION MODE                        |');
    gutil.log('|       THE LOCAL CATALOGUE WAS NOT ACCESSIBLE, WILL BE USED THE REMOTE        |');
    gutil.log('|                     BASED ON YOUR CONFIGURATION FILE                         |');
    gutil.log('|                                                                              |');
    gutil.log('|******************************************************************************|');
  }

  // Serve files from the root of this project
  bsServer = browserSync.init({
    open: false,
    online: false,
    timestamps: timestamps,
    logLevel: logLevel,
    cors: true,
    logFileChanges: logFileChanges,
    port: process.env.PORT || 443,
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

    if (serverStatus === 'open') {
      browserSync.exit();

      gutil.log('|******************************************************************************|');
      gutil.log('|                                                                              |');
      gutil.log('|                         THE TOOLKIT WILL STOP RUNNING.                       |');
      gutil.log('|              CHECK IF YOU HAVE OTHER SEVICE RUNNING ON PORT 443.             |');
      gutil.log('|                                                                              |');
      gutil.log('|******************************************************************************|');

      return false;
    }

    browserSync.reload();
    done();
  });

  checkStatus();

}

function checkStatus() {
  bsServer.utils.portscanner.checkPortStatus(443, {}, function(err, status) {
    if (err) throw Error(err);

    serverStatus = status;
  });
}

function middleware(req, res, next) {
  gutil.log(req.originalUrl);
  res.setHeader('Access-Control-Allow-Origin', '*');
  return next();
}

function devMiddleware(req, res, next) {
  gutil.log(req.method + ' | ' + req.originalUrl);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');

  if (req.method === 'GET') {

    if (req.originalUrl.includes('.well-known')) {
      var info = getResourceInfo(req.originalUrl);

      console.log('Info:', info);

      if (req.originalUrl.includes('.html') || req.originalUrl.includes('.js')) {

        if (req.originalUrl.includes('sandbox.html')) {
          res.writeHeader(200, {'Content-Type': 'text/html'});
          res.end(fs.readFileSync('node_modules/runtime-browser/bin/sandbox.html', 'utf8'));
        } else if (req.originalUrl.includes('index.html')) {
          res.writeHeader(200, {'Content-Type': 'text/html'});
          res.end(fs.readFileSync('node_modules/runtime-browser/bin/index.html', 'utf8'));
        } else {
          console.log('GET', info.resource);
          res.writeHeader(200, {'Content-Type': 'application/javascript'});
          res.end(fs.readFileSync('node_modules/runtime-browser/bin/' + info.resource, 'utf8'));
        }

      } else if (req.originalUrl.includes('sourcepackage')) {
        // paths = req.originalUrl.split('/');
        var cguid = Number(info.paths[3]);
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
        var raw = getResources(info.type);

        if (raw) {
          var filtered = Object.keys(raw);

          if (info.resource) {
            var result = getDescriptorByObjectName(raw, filtered, info.resource);

            if (result.length > 0) {
              result = result[0];

              console.log('Response: ', result.objectName.toString() + ' - ' + info.resource + ' - ' + result.sourcePackage.sourceCodeClassname);
              if (req.originalUrl.includes('cguid')) {
                gutil.log('Response: ', gutil.colors.green(result.cguid.toString()));
                res.writeHeader(200, {'Content-Type': 'text/plain'});
                res.end(result.cguid.toString());
              } else if (req.originalUrl.includes('version')) {
                gutil.log('Response: ', gutil.colors.green(Number(result.version).toString()));
                res.writeHeader(200, {'Content-Type': 'text/plain'});
                res.end(Number(result.version).toString());
              } else {
                res.writeHeader(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(result, '', 2));
              }

            } else {
              res.writeHeader(404, {'Content-Type': 'application/json'});
              res.end(JSON.stringify({
                code: 404,
                description: 'Please review your constraints',
                url: req.originalUrl.toString()
              }, '', 2));
            }
          } else {
            var listOfResources = [];
            for (var key in raw) {
              if (raw.hasOwnProperty(key)) {
                listOfResources.push(key);
              }
            }
            res.writeHeader(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(listOfResources, '', 2));
          }
        } else {
          console.log('this ' + req.originalUrl + ' does not exist, please verify the url');
          var msg = '<h1>404 - ' + info.type + ' not found</h1>' +
                    'Please use one of this:' +
                    '<ul><li>hyperty</li><li>protocolstub</li><li>idp-proxy</li><li>dataschema</li><li>runtime</li></ul>';
          res.writeHeader(404, {'Content-Type': 'text/html'});
          res.end(msg);
        }

      }
    }

    next();

  } else if (req.method === 'POST') {
    processPost(req, res);
  } else if (req.method === 'OPTIONS') {
    var headers = {};

    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
    headers['Access-Control-Allow-Origin'] = '*';
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS';
    headers['Access-Control-Allow-Credentials'] = false;
    headers['Access-Control-Max-Age'] = '86400'; // 24 hours
    headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Cache-Control';
    res.writeHead(200, headers);
    res.end();
  }

}

function processPost(req, res) {

  if (req.originalUrl.includes('.well-known')) {

    var info = getResourceInfo(req.originalUrl);
    var raw = getResources(info.type);
    if (!raw)  {
      res.writeHeader(404, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({
        code: 404,
        description: 'Something went wrong'
      }, '', 2));

      return false;
    }

    var filtered = Object.keys(raw);
    var chunks = [];
    req.on('data', function(chunk) {
      chunks.push(chunk);
    });

  }

  req.on('end', function() {
    var body = Buffer.concat(chunks).toString();
    var data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      data = {};
    }

    gutil.log('constraints: ', gutil.colors.yellow(JSON.stringify(data)));

    if (data.hasOwnProperty('constraints')) {
      var constraints = data.constraints;
      filtered = Object.keys(raw).filter((resource) => {
        var found = 0;
        Object.keys(raw[resource].constraints).forEach((constraint) => {
          if (constraints.hasOwnProperty(constraint) && constraints[constraint] === raw[resource].constraints[constraint]) {
            found++;
          }
        });

        // console.log('Found ' + found + ' keys');
        return found > 0 ? true : false;
      });
    }

    if (info.resource) {
      var result = getDescriptorByObjectName(raw, filtered, info.resource);

      if (result.length > 0) {
        result = result[0];

        console.log('Response: ', result.objectName.toString() + ' - ' + info.resource + ' - ' + result.sourcePackage.sourceCodeClassname);
        if (req.originalUrl.includes('cguid')) {
          res.writeHeader(200, {'Content-Type': 'text/plain'});
          res.end(result.cguid.toString());
        } else if (req.originalUrl.includes('version')) {
          res.writeHeader(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(Number(result.version), '', 2));
        } else {
          res.writeHeader(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(result, '', 2));
        }

      } else {
        res.writeHeader(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          code: 404,
          description: 'Please review your constraints',
          url: req.originalUrl.toString()
        }, '', 2));
      }

    } else {
      res.writeHeader(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(filtered), '', 2);
    }
  });
}

function getDescriptorByObjectName(raw, filtered, name) {

  return filtered.map((resource) => {
    return raw[resource];
  }).filter((resource) => {
    return resource.objectName === name;
  });

}

function getResourceInfo(url) {

  var path = url;
  var pathIndex = path.indexOf('.well-known');
  if (pathIndex !== -1) { path = path.substr(pathIndex - 1); }
  var paths = path.split('/');
  var type = paths[2];
  var resource = paths[3];

  return {
    type: type,
    resource: resource,
    paths: paths
  };
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

module.exports = {
  browserSync: browserSync,
  server: server
};
