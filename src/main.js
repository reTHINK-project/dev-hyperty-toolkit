// jshint browser:true, jquery: true
// jshint varstmt: true
import RuntimeLoader from 'service-framework/dist/RuntimeLoader';
import InstallerFactory from '../resources/factories/InstallerFactory';
import config from '../config.json';

import {getTemplate, serialize} from './utils/utils';

// import hyperties from '../resources/descriptors/Hyperties';

let installerFactory = new InstallerFactory();

window.KJUR = {};

let domain = config.domain;

let runtime = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';

let runtimeLoader = new RuntimeLoader(installerFactory, runtime);

runtimeLoader.install().then(function() {

  return getListOfHyperties(domain);

}).then(function(hyperties) {

  let $dropDown = $('#hyperties-dropdown');

  hyperties.forEach(function(key) {
    let $item = $(document.createElement('li'));
    let $link = $(document.createElement('a'));

    // create the link features
    $link.html(key);
    $link.css('text-transform', 'none');
    $link.attr('data-name', key);
    $link.on('click', loadHyperty);

    $item.append($link);

    $dropDown.append($item);
  });

}).catch(function(reason) {
  console.error(reason);
});

function getListOfHyperties(domain) {

  let hypertiesURL = 'https://' + domain + '/.well-known/hyperty/Hyperties.json';
  if (config.env === 'production') {
    hypertiesURL = 'https://' + domain + '/.well-known/hyperty/';
  }

  return new Promise(function(resolve, reject) {
    $.ajax({
      url: hypertiesURL,
      success: function(result) {
        let response = [];
        if (typeof result === 'object') {
          Object.keys(result).forEach(function(key) {
            response.push(key);
          });
        } else if (typeof result === 'string') {
          response = JSON.parse(result);
        }
        resolve(response);
      },
      fail: function(reason) {
        reject(reason);
      }

    });
  });

}

function loadHyperty(event) {
  event.preventDefault();

  let hypertyName = $(event.currentTarget).attr('data-name');
  let hypertyPath = 'hyperty-catalogue://' + domain + '/.well-known/hyperties/' + hypertyName;

  runtimeLoader.requireHyperty(hypertyPath).then(hypertyDeployed).catch(hypertyFail);

}

function hypertyDeployed(hyperty) {

  // Add some utils
  serialize();

  let $mainContent = $('.main-content').find('.row');

  let template = '';
  let script = '';

  switch (hyperty.name) {
    case 'HypertyConnector':
      template = 'hyperty-connector/HypertyConnector';
      script =  'hyperty-connector/demo.js';
      break;

    case 'HypertyChat':
      template = 'hyperty-chat/HypertyChat';
      script =  'hyperty-chat/demo.js';
      break;

    case 'HelloWorldObserver':
      template = 'hello-world/helloWorld';
      script =  'hello-world/helloObserver.js';
      break;

    case 'HelloWorldReporter':
      template = 'hello-world/helloWorld';
      script =  'hello-world/helloReporter.js';
      break;
  }

  if (!template) {
    throw Error('You must need specify the template for your example');
  }

  getTemplate(template, script).then(function(template) {
    let html = template();
    $mainContent.html(html);

    if (typeof hypertyLoaded === 'function') {
      hypertyLoaded(hyperty);
    } else {
      console.info('If you need pass the hyperty to your template, create a function called hypertyLoaded');
    }
  });

}

function hypertyFail(reason) {
  console.error(reason);
}

// runtimeCatalogue.getHypertyDescriptor(hyperty).then(function(descriptor) {
//   console.log(descriptor);
// }).catch(function(reason) {
//   console.error('Error: ', reason);
// });
