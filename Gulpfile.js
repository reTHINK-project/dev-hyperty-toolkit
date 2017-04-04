// jshint varstmt: false

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var _ = require('lodash');
var through = require('through2');
var inquirer = require('inquirer');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

var replacePattern = require('./gulp/utils').replacePattern;
var getEnvironment = require('./gulp/environment');
var getStage = require('./gulp/stage');
var server = require('./gulp/server').server;
var browserSync = require('./gulp/server').browserSync;
var descriptorBase = require('./gulp/descriptors').descriptorBase;
var encodeTask = require('./gulp/encodeTask').encodeTask;
var getTypeOfFile = require('./gulp/encodeTask').getTypeOfFile;
var encode = require('./gulp/encodeTask').encode;

var transpile = require('./gulp/transpile');
var resource = require('./gulp/resources');
var walk = require('./gulp/walk');
var unixifyPath = require('./gulp/utils').unixifyPath;

var dirname = __dirname;

var env = require('node-env-file');

gulp.task('serve', function(done) {

  var stage = getStage();

  var sequence = ['stage', 'clean', 'src-hyperties', 'checkHyperties', 'descriptor', 'checkDataSchemas', 'schemas', 'js', 'hyperties', 'server'];
  if (stage !== 'production') {

    env(path.join(process.cwd(), '.env.server'));
    env(path.join(process.cwd(), 'env'));

    sequence.push('watch');
  }

  runSequence.apply(runSequence, sequence, done);

});

gulp.task('build:hyperties', function(done) {

  env(path.join(process.cwd(), '.env.server'));
  env(path.join(process.cwd(), 'env'));

  var sequence = ['stage', 'clean', 'checkHyperties', 'src-hyperties', 'descriptor', 'hyperties'];
  runSequence.apply(runSequence, sequence, function() {

    return gulp.src('./src/**/*.js')
    .pipe(watchHyperties('./src/**/*.js'))
    .on('end', done);

  });

});

gulp.task('checkHyperties', function() {

  try {
    var stats = fs.lstatSync(__dirname + '/resources/descriptors/Hyperties.json');
    console.log(stats.isFile());
  } catch (e) {
    fs.writeFile(__dirname + '/resources/descriptors/Hyperties.json', '{}', (err) => {
      if (err) throw new Error(err);
      return true;
    });
  }

});

gulp.task('checkDataSchemas', function() {

  try {
    var stats = fs.lstatSync(path.resolve(__dirname + '/resources/descriptors/DataSchemas.json'));
    console.log(stats.isFile());
  } catch (e) {
    fs.writeFile(path.resolve(__dirname + '/resources/descriptors/DataSchemas.json'), '{}', (err) => {
      if (err) throw new Error(err);
      return true;
    });
  }

});

gulp.task('src-hyperties', function(done) {

  var srcPath;

  if (process.env.HYPERTY_REPO) {

    srcPath = path.resolve(process.env.HYPERTY_REPO);

    console.log('Hyperty:', srcPath)

    fs.stat(srcPath, function(error) {
      if (error) {
        console.log('ERROR:', error);
        return error;
      }

      copyHyperties(srcPath, done);
    });

  } else {
    var parentDirs = fs.readdirSync(path.resolve('../'));

    inquirer.prompt([{
      type: 'list',
      name: 'folders',
      message: 'Where is dev-hyperty?',
      choices: parentDirs
    }]).then(function(res) {
      srcPath = path.join('../', res.folders);
      copyHyperties(srcPath, done);
    });

  }

});

gulp.task('clean', function() {
  return gulp.src([
    'src',
    'app',
    'resources/descriptors/Hyperties.json',
    'resources/descriptors/DataSchemas.json'], {read: false}).pipe(clean());
});

gulp.task('copy-src', copySrc);
gulp.task('copy-assets', copyAssets);
gulp.task('copy-examples', copyExamples);

// use default task to launch Browsersync and watch JS files
gulp.task('server', server);

gulp.task('stage', function() {

  var stage = getStage();

  var configuration = {
    DEVELOPMENT: process.env.DEVELOPMENT || true,
    RUNTIME_URL: process.env.RUNTIME_URL,
    DOMAIN: process.env.DOMAIN || 'localhost',
    HYPERTY_REPO: process.env.HYPERTY_REPO || '../dev-hyperty',
    ENVIRONMENT: process.env.ENVIRONMENT || 'core'
  };

  return gulp.src('./')
  .pipe(createFile('config.json', new Buffer(JSON.stringify(configuration, null, 2))))
  .pipe(gulp.dest('./'))
  .on('end', function() {
    gutil.log('You are in the ' + stage + ' mode');
    gutil.log('Your configuration \n', JSON.stringify(configuration, null, 2));
  });

});

function copyFiles(opts) {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);
    var dest = '';
    if (opts && opts.dest) {
      dest = opts.dest;
    }

    var unixify = unixifyPath(fileObject.dir);
    var unixifyDir = unixifyPath(dirname);

    var pathStructure = unixify.replace(path.join(unixifyDir, '/'), '');
    var pathDirs = pathStructure.split('/');
    var pathLength = pathDirs.length;

    console.log('unixify:', unixify, dirname, pathDirs, pathLength);

    var dir = path.join(__dirname, dest, pathDirs[pathLength - 1] || '/');

    gutil.log('Copy changes from ' + fileObject.base + ' to ' + dir);
    return gulp.src(chunk.path)
    .pipe(gulp.dest(dir))
    .on('end', function() {
      done();
    });

  });

}

function watchHyperties(filePath) {
  console.log('Watch:', filePath);
  return gulp.src(filePath)
    .pipe(convertHyperty())
    .resume()
    .on('end', function() {
      browserSync.reload();
    });
}

gulp.task('watch', function() {

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch(['system.config.json'], ['main-watch']);
  gulp.watch(['./resources/schemas/**/*.ds.json'], ['schemas'], browserSync.reload);

  gulp.watch(['./server/rethink.js', './resources/factories/*.js', './resources/browser/*.js', './resources/sandboxes/*.js', './app/main.js'], function() {
    return gulp.src('./server/rethink.js')
    .pipe(transpile({destination: __dirname + '/app/dist', debug: true}))
    .resume()
    .on('end', browserSync.reload);
  });

  gulp.watch(['./src/**/*.js'], function(event) {
    var fileObject = path.parse(event.path);
    var filePath = fileObject.dir + '/*.hy.js';
    watchHyperties(filePath);
  });

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

  gulp.watch(['./src/**/*.ds.json'], function(event) {
    var fileObject = path.parse(event.path);
    return gulp.src([fileObject.dir + '/*.ds.js'])
    .pipe(convertSchema())
    .on('end', function() {
      browserSync.reload();
    });
  });

  gulp.watch(['./src/**/*.hy.json'], function(event) {

    return gulp.src(event.path)
    .pipe(createDescriptor())
    .pipe(gulp.dest('./resources/descriptors/'))
    .on('end', function() {
      gutil.log('the preconfiguration hyperty was changed, and the Hyperties.json was updated');
      browserSync.reload();
    });

  });

  gulp.watch(['/app/*.html', '/app/*.js'], function(event) {
    console.log('AQUI:', event);
  }, browserSync.reload);

  // Watch
  gulp.watch([dirname + '/src/**/*.js'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'src'}));
  });

  gulp.watch([dirname + '/src/**/*.json'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'src'}));
  });

  gulp.watch([dirname + '/examples/*.html', dirname + '/examples/**/*.hbs'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'app'}))
    .resume()
    .on('end', function() {
      gutil.log('The html templates are copied with success');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });
  });

  gulp.watch([dirname + '/examples/main.js'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'app'}))
    .pipe(transpile({destination: __dirname + '/app/dist', debug: true}))
    .resume()
    .on('end', function() {
      gutil.log('The main file was created like a distribution file on /dist');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });
  });

  gulp.watch([dirname + '/examples/**/*.js', '!' + dirname + '/examples/main.js'], function(event) {
    return gulp.src([event.path])
    .pipe(copyFiles({dest: 'app'}))
    .pipe(transpile({destination: __dirname + '/app', debug: true}))
    .resume()
    .on('end', function() {
      gutil.log('The javascript was copied and converted to es5');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });
  });

});

gulp.task('main-watch', ['js'], browserSync.reload);
gulp.task('hyperties-watch', ['hyperties'], browserSync.reload);

gulp.task('js', function() {

  return gulp.src(['./app/main.js', './server/rethink.js'])
    .on('end', function() {
      var fileObject = path.parse('./app/main.js');
      gutil.log('-----------------------------------------------------------');
      gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
    })
    .pipe(transpile({destination: __dirname + '/app/dist', debug: true}))
    .on('end', function() {
      gutil.log('The main file was created like a distribution file on /dist');
      gutil.log('-----------------------------------------------------------');
      browserSync.reload();
    });

});

// process JS files and return the stream.
gulp.task('hyperties', function() {

  return gulp.src('./src/**/*.hy.js')
  .pipe(convertHyperty())
  .on('end', function() {
    browserSync.reload();
  });

});

gulp.task('schemas', function() {

  return gulp.src(['./src/**/*.ds.json', './resources/schemas/**/*.ds.json'])
  .pipe(convertSchema())
  .on('end', function() {
    browserSync.reload();
  });

});

gulp.task('encode', encodeTask);

gulp.task('descriptor', function() {

  return gulp.src('./src/**/*.hy.json')
  .pipe(createDescriptor())
  .pipe(gulp.dest('./resources/'))
  .on('end', function() {
    browserSync.reload();
  });

});

function createDescriptor() {

  var descriptor = fs.readFileSync('./resources/descriptors/Hyperties.json', 'utf8');
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

    console.log('PRE:', preconfig);

    gutil.log('---------------------- ' + nameOfHyperty + ' ------------------------');

    if (!data.hasOwnProperty(nameOfHyperty)) {
      data[nameOfHyperty] = descriptorBase('hyperty');
    }

    console.log('Before:', data[nameOfHyperty])
    var updated = _.extend(data[nameOfHyperty], preconfig);
    data[nameOfHyperty] = updated;

    var newChunk = _.clone(chunk);
    newChunk.path = './resources/descriptors/Hyperties.json';
    newChunk.contents = new Buffer(JSON.stringify(data, null, 2));
    gutil.log(JSON.stringify(preconfig));

    done(null, newChunk);
  });
}

function convertHyperty() {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);

    return gulp.src([chunk.path])
    .on('end', function() {
      gutil.log('-----------------------------------------------------------');
      gutil.log('Converting ' + fileObject.base + ' from ES6 to ES5');
    })
    .pipe(transpile({
      destination: __dirname + '/resources',
      standalone: 'activate',
      debug: false
    }))
    .pipe(resource())
    .resume()
    .on('end', function() {
      gutil.log('Hyperty', fileObject.name, ' was converted and encoded');
      gutil.log('-----------------------------------------------------------');
      done();
    });

  });

}

function readFiles(dirname, file) {
  var files = fs.readdirSync(dirname);
  return files.filter(function(filename) {
    return filename.includes(file);
  }).map(function(filename) {
    var content = fs.readFileSync(dirname + filename, 'utf-8');
    return {filename: filename, folder: dirname, content: content};
  });
}

function filterHyperties(environment) {

  var filePath = path.resolve(dirname + '/src/');
  var hyperties = [];

  walk(filePath, function(filepath, rootdir, subdir, filename) {
    if (filename.includes('.hy.json')) {
      readFiles(path.join(rootdir, '/', subdir, '/'), filename).forEach(function(fileObject) {
        hyperties.push(fileObject);
      });
    }
  });

  return hyperties.filter(function(file) {
    var temp;
    try {
      temp = JSON.parse(file.content);
    } catch (e) {
      temp = file.content;
    }

    if (environment !== 'all') {
      var typeOfEnvironment = environment === 'core' ? 'browser' : environment;
      return temp.hasOwnProperty('constraints') && temp.constraints.hasOwnProperty(typeOfEnvironment) && temp.constraints[typeOfEnvironment];
    } else {
      return true;
    }

  }).map(function(file) {
    var dir = path.parse(file.folder + file.filename).dir;
    var folder = dir.replace(filePath, '');
    return {dir: folder, filename: file.filename};
  });
}

function convertSchema() {

  return through.obj(function(chunk, enc, done) {

    var fileObject = path.parse(chunk.path);

    return gulp.src([chunk.path])
    .on('end', function() {
      gutil.log('-----------------------------------------------------------');
      gutil.log('Encoding ' + fileObject.base + ' to base64');
    })
    .pipe(resource())
    .resume()
    .on('end', function() {
      gutil.log('DataSchema', fileObject.name, ' was encoded');
      gutil.log('-----------------------------------------------------------');
      done();
    });

  });

}

function createFile(path, contents) {

  return through({ objectMode: true}, function(chunk, enc, cb) {
    var file = new gutil.File({cwd: '', base: '', path: path, contents: contents});
    cb(null, file);
  });

}

function copySrc() {

  var hyperties = filterHyperties(getEnvironment());

  // copy utils folder
  gulp.src([dirname + '/src/utils/*'])
    .pipe(gulp.dest('./src/utils'));

  // copy each folder of filter directories
  var filesToBeCopied = [];
  var filesToBeExcluded = [];
  hyperties.forEach(function(hyperty) {
    var selectedHyperty = path.parse(path.resolve(dirname + '/src' + hyperty.dir + '/' + hyperty.filename));

    walk(path.resolve(dirname + '/src' + hyperty.dir), function(filepath) {
      var fileObject = path.parse(filepath);
      if (fileObject.name.includes(selectedHyperty.name) ||
          fileObject.ext === '.js' && fileObject.ext === '.json' || !fileObject.name.includes('.hy')) {
        filesToBeCopied.push(filepath);
      } else {
        filesToBeExcluded.push('!' + filepath);
      }
    });
  });

  filesToBeCopied.concat(filesToBeExcluded);

  filesToBeCopied.forEach(function(file) {
    var fileObject = path.parse(file);
    var directory = fileObject.dir.substr(fileObject.dir.indexOf('/src/'));
    return gulp.src(file)
      .pipe(gulp.dest('.' + directory));

  });

}

function copyAssets() {
  return gulp.src(['./server/assets/*.png', './server/assets/*.ico'])
  .pipe(gulp.dest('./app/assets'));
}

function copyExamples() {
  return gulp.src([dirname + '/examples/**/*'])
  .pipe(gulp.dest('./app'));
}

function copyHyperties(from, done) {

  if (from) {
    dirname = from;
    var stage = getStage();
    if (stage !== 'production') {
      runSequence('copy-src', 'copy-examples', 'copy-assets', done);
    } else {
      runSequence('copy-examples', 'copy-assets', done);
    }
  }
}
