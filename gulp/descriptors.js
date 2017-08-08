// jshint varstmt: false
var fs = require('fs');
var path = require('path');

var generateGUID = require('./guid');
var replacePattern = require('./utils').replacePattern;

var through = require('through2');
var gutil = require('gulp-util');
var _ = require('lodash');

var descriptorBase = function(type) {

  var base = {};

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
      break;

    case 'runtime':
      base.type = '';
      base.runtimeType = 'browser';
      base.p2pHandlerStub = '';
      base.p2pRequesterStub = '';
      base.constraints = {};
      break;

    case 'protocolstub':
    case 'idp-proxy':
      base.type = '';
      base.constraints = {};
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
  base.dataObjects = [];

  base.signature = '';
  base.accessControlPolicy = 'somePolicy';
  base.constraints = {};

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

    var value = filename;
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

    var name = 'default';
    if (opts.isDefault) {
      name = 'default';
    } else {
      name = opts.name || filename;
    }

    json[value].objectName = checkValues('objectName', name, json[value]);

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
      json[value].constraints = {
        browser: true,
        mic: true,
        camera: true,
        sensor: false,
        webrtc: true,
        ortc: true,
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
      json[value].constraints = checkValues('constraints', opts.constraints, json[value]);
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

function createDescriptor() {

  var descriptor = fs.readFileSync(process.cwd() + '/resources/descriptors/Hyperties.json', 'utf8');
  var data;
  try {
    data = JSON.parse(descriptor);
  } catch (error) {
    data = {};
  }

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);
    var nameOfHyperty = fileObject.name.replace('.hy', '');
    var preconfig = chunk.contents.toString('utf8');
    preconfig = JSON.parse(replacePattern(preconfig, process.env.DOMAIN || 'localhost'));

    gutil.log('---------------------- ' + nameOfHyperty + ' ------------------------');

    if (!data.hasOwnProperty(nameOfHyperty)) {
      data[nameOfHyperty] = descriptorBase('hyperty');
    }

    var updated = _.extend(data[nameOfHyperty], preconfig);
    data[nameOfHyperty] = updated;

    var newChunk = _.clone(chunk);
    newChunk.path = './resources/descriptors/Hyperties.json';
    newChunk.contents = new Buffer(JSON.stringify(data, null, 2));
    gutil.log(JSON.stringify(preconfig));

    done(null, newChunk);
  });
}

function checkValues(property, value, object) {

  if (_.isEmpty(value) && typeof(value) !== 'boolean') {
    return object[property] || value;
  } else if (_.isEqual(object[property], value)) {
    return value;
  } else {
    return value;
  }

}

module.exports = {
  createDescriptor: createDescriptor,
  descriptorBase: descriptorBase,
  encode: encode
};
