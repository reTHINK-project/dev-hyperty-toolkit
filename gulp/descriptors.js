// jshint varstmt: false
var fs = require('fs');
var path = require('path');

var { MD5Hash } = require('./guid');
var replacePattern = require('./utils').replacePattern;

var through = require('through2');
var gutil = require('gulp-util');
var _ = require('lodash');

var descriptorBase = function(type, name) {

  var base = {};

  base.sourcePackage = {};
  base.sourcePackage.sourceCode = '';
  base.sourcePackage.sourceCodeClassname = '';
  base.sourcePackage.encoding = 'base64';
  base.sourcePackage.signature = '';

  // Source Package configuration
  base.sourcePackageURL = '/sourcePackage';

  base.version = '0.0';
  base.description = '';
  base.language = 'Javascript';

  switch (type) {
    case 'hyperty':
      base.cguid = MD5Hash(1, name);
      base.hypertyType = [];
      break;

    case 'dataschema':
      base.cguid = MD5Hash(2, name);
      base.language = 'JSON-Schema';
      break;

    case 'runtime':
      base.cguid = MD5Hash(3, name);
      base.type = '';
      base.runtimeType = 'browser';
      base.p2pHandlerStub = '';
      base.p2pRequesterStub = '';
      base.constraints = {};
      break;

    case 'protocolstub':
      base.cguid = MD5Hash(4, name);
      base.type = '';
      base.constraints = {};
      base.interworking = false;
      break;

    case 'idp-proxy':
      base.type = '';
      base.cguid = MD5Hash(5, name);
      base.constraints = {};
      base.interworking = false;
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
    } else if (fileObject.name.indexOf('.ps') !== -1) {
      filename = fileObject.name.replace('.ps', '');
    } else if (fileObject.name.indexOf('.idp') !== -1) {
      filename = fileObject.name.replace('.idp', '');
    }

    var value = filename;
    var cguid = 0;

    switch (opts.descriptor) {
      case 'Hyperties':
        type = 'hyperty';
        cguid = MD5Hash(1, filename);
        break;
      case 'DataSchemas':
        type = 'dataschema';
        cguid = MD5Hash(2, filename);
        break;
      case 'Runtimes':
        type = 'runtime';
        cguid = MD5Hash(3, filename);
        break;
      case 'ProtoStubs':
        type = 'protocolstub';
        cguid = MD5Hash(4, filename);
        break;
      case 'IDPProxys':
        type = 'idp-proxy';
        cguid = MD5Hash(5, filename);
        break;
    }

    if (!json.hasOwnProperty(value)) {
      json[value] = descriptorBase(type, filename);
    }

    json[value].cguid = cguid;

    json[value].type = opts.descriptor;

    // json[value].version = 0.1;
    if (json[value].version) {
      json[value].version = (Number(json[value].version) + 0.1).toFixed(2);
    }

    json[value].description = checkValues('description', json[value].description, json[value]);

    var name = 'default';
    if (opts.isDefault) {
      name = 'default';
    } else {
      if (opts.name) name = opts.name;
      else name = json[value].objectName;
    }

    if (name.length === 0) name = filename;

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
      json[value].sourcePackage.sourceCodeClassname = name;
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

function createDescriptor(resource) {

  var typeOfDescriptor = getTypeOfDescriptor(resource);
  var descriptor = fs.readFileSync(process.cwd() + '/resources/descriptors/' + typeOfDescriptor.name + '.json', 'utf8');
  var data;
  try {
    data = JSON.parse(descriptor);
  } catch (error) {
    data = {};
  }

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);
    var nameOfResource = fileObject.name.replace(typeOfDescriptor.extension, '');
    var preconfig = chunk.contents.toString('utf8');

    try {
      preconfig = JSON.parse(replacePattern(preconfig, process.env.DOMAIN || 'localhost'));

      gutil.log('---------------------- ' + nameOfResource + ' ------------------------');

      if (!data.hasOwnProperty(nameOfResource)) {
        data[nameOfResource] = descriptorBase(typeOfDescriptor.type, fileObject.name);
      }

      var updated = _.extend(data[nameOfResource], preconfig);
      data[nameOfResource] = updated;

      var newChunk = fs.writeFileSync(process.cwd() + '/resources/descriptors/' + typeOfDescriptor.name + '.json', Buffer.from(JSON.stringify(data, null, 2), 'utf-8'), 'utf8');

      done(null, newChunk);
    } catch (error) {
      gutil.log(gutil.colors.red('ERROR: ', fileObject.name  + ': ' + error));
      done();
    }
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

function getTypeOfDescriptor(resource) {
  var d = {
    name: '',
    type: '',
    extension: ''
  };

  switch (resource) {
    case 'runtime': d.name = 'Runtimes'; d.type = 'runtime'; d.extension = ''; break;
    case 'hyperty': d.name = 'Hyperties'; d.type = 'hyperty'; d.extension = '.hy'; break;
    case 'idp-proxy': d.name = 'IDPProxys'; d.type = 'idp-proxy'; d.extension = '.idp'; break;
    case 'protocolstub': d.name = 'ProtoStubs'; d.type = 'protocolstub'; d.extension = '.ps'; break;
    case 'dataschema': d.name = 'DataSchemas'; d.type = 'dataschema'; d.extension = '.ds'; break;
  }

  return d;
}

module.exports = {
  getTypeOfDescriptor: getTypeOfDescriptor,
  createDescriptor: createDescriptor,
  descriptorBase: descriptorBase,
  encode: encode
};
