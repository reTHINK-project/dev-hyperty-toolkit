'use strict';
var fs = require('fs');
var gutil = require('gulp-util');

var https = require('https');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var privateKey = fs.readFileSync(__dirname + '/ssl/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/ssl/server.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.raw()); // for parsing raw
app.use(bodyParser.text()); // for parsing text
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(process.cwd() + '/app/'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res) {
  console.log(req.originalUrl)
  res.sendFile(process.cwd() + '/app/index.html');
});

app.get('/.well-known/:type', getResource);
app.get('/.well-known/:type/:resource', getResource);
app.get('/.well-known/:type/:resource/:attribute', getResource);


app.post('/.well-known/:type', upload.any(), filterResource);
app.post('/.well-known/:type/:resource', upload.any(), filterResource);
app.post('/.well-known/:type/:resource/:attribute', upload.any(), filterResource);

function getResource(req, res) {
  var type = req.params.type;
  var resource = req.params.resource;
  var attribute = req.params.attribute;

  var raw = getResources(type);
  var filtered = Object.keys(raw);
  var result;

  if (type) {
    result = JSON.stringify(filtered, '', 2);
  }

  if (resource) {
    result = getDescriptorByObjectName(raw, filtered, resource);
  }

  if (attribute) {
    result = result[attribute].toString();
    console.log(attribute + ' -> ' + result);
  }

  res.type('application/json');
  res.status(200).send(result);
}

function filterResource(req, res, next) {

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

  gutil.log('constraints = ', gutil.colors.yellow(JSON.stringify(data, '', 2)));

  if (data.hasOwnProperty('constraints')) {

    var raw = getResources(type);
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

      gutil.log('Num of constraint matched for ' + gutil.colors.green(resource) + ': ', a.length, numOfResourceConstraints);
      return a.length === numOfResourceConstraints;
    });

  }

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
        description: 'notingh found with the constraints',
        constraints: data
      };

    }

  }


  if (attribute) {
    result = result[attribute].toString();
    console.log(attribute + ' -> ' + result);
  }

  res.type('application/json');
  res.status(code).send(result);
}

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(process.env.PORT || 443);


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

