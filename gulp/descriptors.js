// jshint varstmt: false
var fs = require('fs');
var path = require('path');

var generateGUID = require('./guid');

var through = require('through2');
var gutil = require('gulp-util');
var _ = require('lodash');

var descriptorBase = function(type) {

  var base = {};

  console.log('AQUI:', type);

  base.sourcePackage = {};
  base.sourcePackage.sourceCode = '';
  base.sourcePackage.sourceCodeClassname = '';
  base.sourcePackage.encoding = 'base64';
  base.sourcePackage.signature = '';

  // Source Package configuration
  base.sourcePackageURL = '/sourcePackage';

  base.cguid = '';
  base.version = '0.1';
  base.description = '';
  base.language = 'Javascript';

  switch (type) {
    case 'hyperty':
      base.hypertyType = [];
      base.constraints = {
        node: false,
        browser: true
      };
      break;

    case 'runtime':
      base.type = '';
      base.runtimeType = 'browser';
      base.p2pHandlerStub = '';
      base.p2pRequesterStub = '';
      base.hypertyCapabilities = {};
      base.protocolCapabilities = {};
      break;

    case 'protocolstub':
    case 'idp-proxy':
      base.type = '';
      base.constraints = '';
      base.interworking = false;
      break;

    case 'dataschema':
      base.language = 'JSON-Schema';
      break;

    default:
      base.type = '';
      break;
  }

  base.objectName = '';
  base.configuration = {};
  base.messageSchemas = '';

  base.signature = '';
  base.accessControlPolicy = 'somePolicy';

  return base;
};

var encode = function(opts) {

  opts = _.extend({}, opts);

  var descriptor = fs.readFileSync(path.resolve('./resources/descriptors/' + opts.descriptor + '.json'), 'utf8');
  var json = JSON.parse(descriptor);

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    gutil.log('Encode: ', file.path);

    var fileObject = path.parse(file.path);
    var contents = fs.readFileSync(file.path, 'utf8');
    var type = '';

    var encoded = new Buffer(contents).toString('base64');
    var filename = fileObject.name;

    if (fileObject.name.indexOf('.hy') !== -1) {
      filename = fileObject.name.replace('.hy', '');
    } else if (fileObject.name.indexOf('.ds') !== -1) {
      filename = fileObject.name.replace('.ds', '');
    }

    var value = 'default';
    if (opts.isDefault) {
      value = 'default';
    } else {
      value = opts.name || filename;
    }

    var cguid = 0;
    switch (opts.descriptor) {
      case 'Hyperties':
        type = 'hyperty';
        cguid = generateGUID(1);
        break;
      case 'DataSchemas':
        type = 'dataschema';
        cguid = generateGUID(2);
        break;
      case 'Runtimes':
        type = 'runtime';
        cguid = generateGUID(3);
        break;
      case 'ProtoStubs':
        type = 'protostub';
        cguid = generateGUID(4);
        break;
      case 'IDPProxys':
        type = 'idp-proxy';
        cguid = generateGUID(5);
        break;
    }

    if (!json.hasOwnProperty(value)) {
      json[value] = descriptorBase(type);
    }

    Object.keys(json).map(function(key, index) {
      json[key].cguid = cguid + index;
    });

    json[value].type = opts.descriptor;

    // json[value].version = 0.1;
    if (json[value].version) {
      json[value].version = Number(json[value].version) + 0.1;
    }

    json[value].description = checkValues('description', 'Description of ' + filename, json[value]);
    json[value].objectName = checkValues('objectName', filename, json[value]);

    if (opts.descriptor !== 'Hyperties') {
      if (opts.configuration) {
        if (_.isEmpty(opts.configuration) && json[value].hasOwnProperty('configuration')) {
          opts.configuration = json[value].configuration;
        }
        json[value].configuration = opts.configuration;
        gutil.log('setting configuration: ', opts.configuration);
      }
    } else {
      json[value].configuration = checkValues('configuration', {}, json[value]);
    }

    if (opts.descriptor === 'Runtimes') {
      json[value].runtimeType = 'browser';
      json[value].p2pHandlerStub = checkValues('p2pHandlerStub', opts.p2pHandlerStub || '', json[value]);
      json[value].p2pRequesterStub = checkValues('p2pRequesterStub', opts.p2pRequesterStub || '', json[value]);
      json[value].hypertyCapabilities = {
        mic: true,
        camera: true,
        sensor: false,
        webrtc: true,
        ortc: true
      };
      json[value].protocolCapabilities = {
        http: true,
        https: true,
        ws: true,
        wss: true,
        coap: false,
        datachannel: false
      };
    }

    if (opts.descriptor === 'Hyperties') {
      json[value].hypertyType = checkValues('hypertyType', [], json[value]);
      delete json[value].type;
    }

    if (opts.descriptor === 'ProtoStubs' || opts.descriptor === 'IDPProxys') {
      json[value].constraints = checkValues('constraints', '', json[value]);
      json[value].interworking = checkValues('interworking', opts.interworking, json[value]);
    }

    if (!json[value].sourcePackageURL) {
      json[value].sourcePackageURL = '/sourcePackage';
    }

    if (json[value].sourcePackage) {
      json[value].sourcePackage.sourceCode = encoded;
      json[value].sourcePackage.sourceCodeClassname = filename;
      json[value].sourcePackage.encoding = 'base64';
      json[value].sourcePackage.signature = '';
    }

    json[value].signature = checkValues('signature', '', json[value]);
    json[value].messageSchemas = checkValues('messageSchemas', '', json[value]);

    if (!json[value].dataObjects) {
      json[value].dataObjects = checkValues('dataObjects', [], json[value]);
    }

    json[value].accessControlPolicy = checkValues('accessControlPolicy', 'somePolicy', json[value]);

    var newDescriptor = new Buffer(JSON.stringify(json, null, 2));
    cb(null, newDescriptor);

  });
};

function checkValues(property, value, object) {

  if (_.isEmpty(value)) {
    return object[property];
  } else if (_.isEqual(object[property], value)) {
    return value;
  } else {
    return value;
  }

}

module.exports = {
  descriptorBase: descriptorBase,
  encode: encode
};
