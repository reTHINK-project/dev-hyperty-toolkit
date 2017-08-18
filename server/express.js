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


app.get('/.well-known/:type', getTypeOfResources);
app.get('/.well-known/:type/:resource', getResource);
app.get('/.well-known/:type/:resource/:attribute', getResourceAttribute);


function getTypeOfResources(req, res) {
  duration.start();
  var code = 200;
  var type = req.params.type;

  getResources(type, (err, raw) => {

    if (err) {
      return processError(err.code, type, err.description, {}, res);
    }

    var filtered = Object.keys(raw);
    var result;

    gutil.log('-------------------------------- GET --------------------------------');

    if (type) {
      result = JSON.stringify(filtered, '', 2);
      gutil.log(gutil.colors.green('GET ' + type + ' | ' + result));
    }

    if (!result) {
      gutil.log(gutil.colors.red('ERROR GET ' + type + ' | ' + result));
      return processError(404, type, 'The type of resource you are looking for doesn\'t exits', {}, res);
    }

    res.type('application/json');
    res.status(code).send(result);
    duration.end();
  });

}

function getResource(req, res) {
  duration.start();

  var code = 200;
  var type = req.params.type;
  var resource = req.params.resource;

  getResources(type, (err, raw) => {

    if (err) {
      return processError(err.code, type, err.description, {}, res);
    }

    var filtered = Object.keys(raw);
    var result;

    gutil.log('-------------------------------- GET --------------------------------');

    if (resource) {
      try {
        result = getDescriptorByObjectName(raw, filtered, resource);
        gutil.log(gutil.colors.green('GET ' + type + ' | ' + resource + ': ') + 'version: ' + result.version + ' | cguid: ' + result.cguid);
      } catch (error) {
        return processError(404, resource, error, {}, res);
      }
    }

    res.type('application/json');
    res.status(code).send(result);
    duration.end();

  });

}

function getResourceAttribute(req, res) {

  duration.start();

  var code = 200;
  var type = req.params.type;
  var resource = req.params.resource;
  var attribute = req.params.attribute;

  getResources(type, (err, raw) => {

    if (err) {
      return processError(err.code, type, err.description, {}, res);
    }

    var filtered = Object.keys(raw);
    var result;

    result = getDescriptorByObjectName(raw, filtered, resource);

    if (attribute) {
      if (result) {
        result = JSON.stringify(result[attribute]);
        gutil.log(gutil.colors.green('GET ' + type + ' | ' + attribute + ': '), result);
      } else {
        return processError(404, resource, 'Nothing found with that attribute', {}, res);
      }

    }

    res.type('application/json');
    res.status(code).send(result);
    duration.end();
  });

}

app.post('/.well-known/:type', upload.any(), filterResourceType);
app.post('/.well-known/:type/:resource', upload.any(), filterResource);
app.post('/.well-known/:type/:resource/:attribute', upload.any(), filterResource);

function filterResourceType(req, res) {
  duration.start();

  var code = 200;
  var type = req.params.type;
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

    if (err) {
      return processError(err.code, type, err.description, {}, res);
    }

    matchedInstances = findMatches(raw, data);

    if (matchedInstances.length === 0) {
      result = matchedInstances;
    }

    if (type) {
      result = matchedInstances.map(item => raw[item].objectName);
      gutil.log(gutil.colors.green('POST ' + type + ' | ') + result);
    }

    res.type('application/json');
    res.status(code).send(result);
    duration.end();
  });

}

function filterResource(req, res) {

  duration.start();

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

    if (err) {
      return processError(err.code, type, err.description, {}, res);
    }

    matchedInstances = findMatches(raw, data);

    gutil.log(gutil.colors.yellow('matched to constraints | ') + matchedInstances);

    if (matchedInstances.length === 0) {
      result = matchedInstances;
    }

    if (resource) {
      result = getDescriptorByObjectName(raw, matchedInstances, resource);

      if (!result) {
        return processError(404, resource, 'Nothing found with that constraints', data, res);
      }

      gutil.log(gutil.colors.green('POST ' + type + ' | ' + resource + ': '), result.cguid);

    }

    if (attribute) {
      result = JSON.stringify(result[attribute]);
      gutil.log(gutil.colors.green('POST ' + type + ' | ' + attribute + ': '), result);
    }

    res.type('application/json');
    res.status(code).send(result);

    duration.end();
  });

}

function findMatches(raw, data) {

  // gutil.log(gutil.colors.green('Runtime (payload)') + ' constraints: ', data);

  if (data.hasOwnProperty('constraints')) {
    var constraints = data.constraints;

    return Object.keys(raw).filter((resource) => {
      var resourceConstraints = raw[resource].constraints;
      var numOfResourceConstraints = Object.keys(resourceConstraints).length;

      // If the constraint is false should be ignored
      var payloadConstraints = Object.keys(constraints).filter(constraint => constraints[constraint]);
      var numOfPayloadConstraints = Object.keys(payloadConstraints).length;
      var a = payloadConstraints.filter((constraint) => {
        if (resourceConstraints.hasOwnProperty(constraint) || resourceConstraints[constraint]) {
          return true;
        }
      });

      // gutil.log('------------------------------------------------------');
      // gutil.log(gutil.colors.green('Runtime (payload)') + ' constraints: ', constraints);
      // gutil.log(gutil.colors.green(resource) + ' constraints: ', resourceConstraints);

      return numOfResourceConstraints >= a.length;
    });
  } else {
    return [];
  }

}

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

  if (raw) {
    raw
      .pipe(JSONStream.parse())
      .on('error', (e) => {
        console.log(e);
      })
      .on('data', (d) => {
        cb(null, d);
      });
  } else {
    cb({
      code: 500,
      description: 'Unknown object type ' + type + ', please use one of: [hyperty, idp-proxy, runtime, protocolstub, sourcepackage, dataschema]'
    });
  }

}

function processError(code, resource, desc, data, res) {

  var result = {
    code: code,
    resource: resource,
    description: desc
  };

  if (data) {
    result.data = data;
  }

  gutil.log(gutil.colors.green('ERROR ' + code + ' | ' + resource + ': '), result);
  res.type('application/json');
  res.status(code).send(result);
  return false;
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

var duration = {
  begin: '',
  finish: '',
  duration: '',
  start: () => {
    this.begin = new Date();
  },
  end: () => {
    this.finish = new Date();
    this.duration = this.finish - this.begin;
    gutil.log('Duration:', this.duration, 'ms');
  }

};


var httpsServer = https.createServer(credentials, app);
httpsServer.listen(process.env.PORT || 443);
