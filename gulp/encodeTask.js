// jshint varstmt: false
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');

var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var inquirer = require('inquirer');

var resource = require('./resources');
var transpile = require('./transpile');

function getTypeOfFile(file) {

  var resourceType;
  if (file.includes('.hy.')) {
    resourceType = 'Hyperty';
  } else if (file.includes('ProtoStub')) {
    resourceType = 'ProtoStub';
  } else if (file.includes('.ds.')) {
    resourceType = 'DataSchema';
  } else if (file.includes('runtime') || file.includes('Runtime')) {
    resourceType = 'Runtime';
  } else if (file.includes('ProxyStub')) {
    resourceType = 'IDPProxy';
  } else if (file.includes('P2P')) {
    resourceType = 'ProtoStub';
  }

  return resourceType;
}

function encodeRuntime(file) {

  inquirer.prompt([
    {
      type: 'input',
      name: 'p2pHandlerStub',
      message: 'P2PHandlerStub url:'
    },
    {
      type: 'input',
      name: 'p2pRequesterStub',
      message: 'P2PRequesterStub url:'
    }
  ]).then(function(res) {

    var resourceOpts = {};
    if (res.p2pHandlerStub) resourceOpts.p2pHandlerStub = res.p2pHandlerStub;
    if (res.p2pRequesterStub) resourceOpts.p2pRequesterStub = res.p2pRequesterStub;

    var transpileOpts = {};
    transpileOpts.isES6 = false;

    encode(file, resourceOpts, transpileOpts);
  });
}

function encodeStub(file) {

  inquirer.prompt([
    {
      type: 'list',
      name: 'esVersion',
      message: 'This file are in ES5 or ES6',
      choices: ['ES5', 'ES6']
    },
    {
      type: 'list',
      name: 'interworking',
      message: 'This component is to work with interworking:',
      choices: ['no', 'yes']
    },
    {
      type: 'checkbox',
      name: 'environment',
      message: 'This component is to working with:',
      choices: [
        {
          name: 'browser',
          checked: true
        },
        {
          name: 'node'
        }
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one environment.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'configuration',
      message: 'Resource configuration, use something like {"url": "wss://msg-node.localhost:9090/ws"}:'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Name of hyperty, protostub, dataschema (not specify use the file name):'
    },
    {
      type: 'list',
      name: 'defaultFile',
      message: 'This will be a default file to be loaded?',
      choices: ['no', 'yes']
    }
  ]).then(function(res) {
    var resourceOpts = {};
    var transpileOpts = {};
    var configuration = JSON.parse(res.configuration || '{}');

    var isDefault = false;
    if (res.defaultFile === 'yes' || res.defaultFile === 'y') {
      isDefault = true;
    }

    resourceOpts.isDefault = isDefault;
    resourceOpts.configuration = configuration;

    if (res.name) {
      transpileOpts.name = res.name;
      resourceOpts.name = res.name;
    }

    resourceOpts.interworking = false;
    if (res.interworking === 'yes') {
      resourceOpts.interworking = true;
    }

    transpileOpts.environment = res.environment[0];

    transpileOpts.isES6 = false;
    if (res.esVersion === 'ES6') {
      transpileOpts.isES6 = true;
      transpileOpts.standalone = 'activate';
    }

    resourceOpts.constraints = res.environment.reduce(function(prev, constraint) {
      prev[constraint] = true;
      return prev;
    }, {});

    // console.log(resourceOpts, transpileOpts);
    encode(file, resourceOpts, transpileOpts);

  });

}

function encode(file, resourceOpts, transpileOpts) {

  var isES6 = transpileOpts.isES6;
  transpileOpts.debug = false;
  transpileOpts.standalone = transpileOpts.standalone || path.parse(file).basename;
  transpileOpts.destination = path.join(__dirname, '..', 'resources', 'tmp');

  if (file) {
    return gulp.src(file)
    .pipe(gulpif(isES6, transpile(transpileOpts)))
    .pipe(resource(resourceOpts))
    .on('end', function() {
      gutil.log('encoded');
    });
  }

}

var encodeTask = function(done) {
  var files = [];
  var dirFiles = fs.readdirSync('resources');
  files = dirFiles.filter(isFile);
  files = files.map(function(file) {
    return 'resources/' + file;
  });

  function isFile(file) {
    if (file.indexOf('Hyperty') !== -1 || file.indexOf('ProtoStub') !== -1 ||
    file.indexOf('DataSchema') !== -1 ||
    file.indexOf('ProxyStub') !== -1 ||
    file.indexOf('Stub') !== -1 ||
    (file.indexOf('runtime') !== -1 || file.indexOf('Runtime') !== -1)) {
      return fs.statSync('resources/' + file).isFile();
    }
  }

  inquirer.prompt([
    {
      type: 'list',
      name: 'file',
      message: 'File to be converted:',
      choices: files
    }]).then(function(res) {

      fs.access(res.file, fs.R_OK | fs.W_OK, function(err) {
        if (err) done(new Error('No such file or directory'));
        return;
      });

      var pathFile = path.resolve(res.file);
      var type = getTypeOfFile(pathFile);

      switch (type) {
        case 'Hyperty':
          break;

        case 'IDPProxy':
        case 'ProtoStub':
          encodeStub(pathFile);
          break;

        case 'Runtime':
          encodeRuntime(pathFile);
          break;

        case 'DataSchema':
          break;

      }
    }
  );

};

module.exports = {
  encodeTask: encodeTask,
  getTypeOfFile: getTypeOfFile,
  encodeRuntime: encodeRuntime,
  encodeStub: encodeStub,
  encode: encode
};
