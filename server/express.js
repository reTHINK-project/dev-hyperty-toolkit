'use strict';
var fs = require('fs');
var gutil = require('gulp-util');

var https = require('https');
var bodyParser = require('body-parser');
var JSONStream = require('JSONStream');

var multer = require('multer'); // v1.0.5

var upload = multer(); // for parsing multipart/form-data

var privateKey = fs.readFileSync(__dirname + '/ssl/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/ssl/server.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

var config = require('../gulp/toolkit.config.js');

app.use(bodyParser.raw()); // for parsing raw
app.use(bodyParser.text()); // for parsing text
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(process.cwd() + '/app/'));
app.use(express.static(process.env.HYPERTY_REPO + '/' + config.templates + '/'));

app.use('/.well-known/runtime/index.html', express.static(process.cwd() + '/node_modules/runtime-browser/bin/'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.get('/:resource', function(req, res, next) {

//   console.log('get resource:', req.params);
//   next();
// });

app.get('/.well-known/:type', getResource);
app.get('/.well-known/:type/:resource', getResource);
app.get('/.well-known/:type/:resource/:attribute', getResource);

function getResource(req, res) {
  var code = 200;
  var type = req.params.type;
  var resource = req.params.resource;
  var attribute = req.params.attribute;

  getResources(type, (err, raw) => {

    if (err) { throw err; }

    var filtered = Object.keys(raw);
    var result;

    gutil.log('-------------------------------- GET --------------------------------');

    if (type) {
      result = JSON.stringify(filtered, '', 2);
    }

    if (resource) {
      try {
        result = getDescriptorByObjectName(raw, filtered, resource);
        gutil.log(gutil.colors.green('GET ' + result.objectName) + ': cguid = ' + result.cguid);
      } catch (error) {
        code = 404;
        result = {
          code: code,
          resource: resource,
          description: error
        };
      }
    }

    if (attribute) {
      if (result) {
        result = JSON.stringify(result[attribute]);
      } else {
        code = 404;

        result = {
          code: code,
          resource: resource,
          description: 'Nothing found with that attribute'
        };
      }

    }

    res.type('application/json');
    res.status(code).send(result);

  })

}

app.post('/.well-known/:type', upload.any(), filterResource);
app.post('/.well-known/:type/:resource', upload.any(), filterResource);
app.post('/.well-known/:type/:resource/:attribute', upload.any(), filterResource);

function filterResource(req, res) {

  var code = 200;
  var type = req.params.type;
  var resource = req.params.resource;
  var attribute = req.params.attribute;
  var matchedInstances = [];
  var result;

  var data = req.body;
  try {
    data = JSON.parse(data);
  } catch (error) {
    data = {};
  }

  gutil.log('-------------------------------- POST --------------------------------');

  getResources(type, (err, raw) => {

    if (data.hasOwnProperty('constraints')) {

      var constraints = data.constraints;

      matchedInstances = Object.keys(raw).filter((resource) => {
        var resourceConstraints = raw[resource].constraints;
        var numOfResourceConstraints = Object.keys(resourceConstraints).length;

        // If the constraint is false should be ignored
        var payloadConstraints = Object.keys(constraints).filter(constraint => constraints[constraint]);
        var a = payloadConstraints.filter((constraint) => {
          if (resourceConstraints.hasOwnProperty(constraint) || resourceConstraints[constraint]) {
            return true;
          }
        });

        gutil.log('------------------------------------------------------');
        gutil.log(gutil.colors.green('Runtime (payload)') + ' constraints: ', constraints);
        gutil.log(gutil.colors.green(resource) + ' constraints: ', resourceConstraints);

        return numOfResourceConstraints >= a.length;
      });

    }

    gutil.log(gutil.colors.yellow('constraints ', matchedInstances));

    if (matchedInstances.length === 0) {
      result = matchedInstances;
    }

    if (type) {
      result = JSON.stringify(matchedInstances, '', 2);
    }

    if (resource) {
      result = getDescriptorByObjectName(raw, matchedInstances, resource);

      if (!result) {
        code = 404;

        result = {
          code: code,
          resource: resource,
          description: 'Nothing found with that constraints',
          constraints: data
        };

        gutil.log(gutil.colors.red('POST: ') + JSON.stringify(result));

      } else {
        gutil.log(gutil.colors.green('POST ' + result.objectName) + ': cguid = ' + result.cguid);
      }

    }

    if (attribute) {
      gutil.log(gutil.colors.green('POST ' + result.objectName + ' with ' + attribute) + ': ' + result[attribute]);
      result = JSON.stringify(result[attribute]);
    }

    res.type('application/json');
    res.status(code).send(result);
  });

}

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(process.env.PORT || 443);


function getResources(type, cb) {

  var raw;
  switch (type) {
    case 'runtime':
      raw = fs.createReadStream('./resources/descriptors/Runtimes.json');
      break;
    case 'hyperty':
      raw = fs.createReadStream('./resources/descriptors/Hyperties.json');
      break;
    case 'idp-proxy':
      raw = fs.createReadStream('./resources/descriptors/IDPProxys.json');
      break;
    case 'protocolstub':
      raw = fs.createReadStream('./resources/descriptors/ProtoStubs.json');
      break;
    case 'dataschema':
      raw = fs.createReadStream('./resources/descriptors/DataSchemas.json');
      break;
  }

  raw
    .pipe(JSONStream.parse())
    .on('data', (d) => {
      cb(null, d);
    });

}

function filterResources(resource, key) {
  return Object.keys(resource).filter(function(a) {
    return resource[a].cguid === key;
  })[0];
}

function getDescriptorByObjectName(raw, filtered, name) {

  return filtered.map((resource) => {
    return raw[resource];
  }).filter((resource) => {
    return resource.objectName === name;
  })[0];

}

