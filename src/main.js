// jshint browser:true, jquery: true
// jshint varstmt: true

import rethink from 'runtime-browser/bin/rethink';

import {getTemplate, serialize} from './utils/utils';

import config from '../config.json';

window.KJUR = {};

let domain = config.domain;
let runtimeLoader;

console.log('configuration file: ', config);

rethink.install(config).then(function(result) {

  runtimeLoader = result;
  console.log(result);

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

  $('.preloader-wrapper').remove();
  $('.card .card-action').removeClass('center');
  $('.hyperties-list-holder').removeClass('hide');

}).catch(function(reason) {
  console.error(reason);
});

function getListOfHyperties(domain) {

  let hypertiesURL = 'https://catalogue.' + domain + '/.well-known/hyperty/';
  if (config.development) {
    hypertiesURL = 'https://' + domain + '/.well-known/hyperty/Hyperties.json';
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
        notification(reason, 'warn');
      }

    });
  });

}

function loadHyperty(event) {
  event.preventDefault();

  let hypertyName = $(event.currentTarget).attr('data-name');
  let hypertyPath = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/hyperty/' + hypertyName;

  let $el = $('.main-content .notification');
  addLoader($el);

  runtimeLoader.requireHyperty(hypertyPath).then(hypertyDeployed).catch(hypertyFail);

}

function hypertyDeployed(hyperty) {

  let $el = $('.main-content .notification');
  removeLoader($el);

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
      let msg = 'If you need pass the hyperty to your template, create a function called hypertyLoaded';
      console.info(msg);
      notification(msg, 'warn');
    }
  });

}

function hypertyFail(reason) {
  console.error(reason);
  notification(reason, 'error');
}

function addLoader(el) {

  let html = '<div class="preloader preloader-wrapper small active">' +
  '<div class="spinner-layer spinner-blue-only">' +
  '<div class="circle-clipper left">' +
  '<div class="circle"></div></div><div class="gap-patch"><div class="circle"></div>' +
  '</div><div class="circle-clipper right">' +
  '<div class="circle"></div></div></div></div>';

  el.addClass('center');
  el.append(html);
}

function removeLoader(el) {
  el.find('.preloader').remove();
  el.removeClass('center');
}

function notification(msg, type) {

  let $el = $('.main-content .notification');
  let color = type === 'error' ? 'red' : 'black';

  removeLoader($el);
  $el.append('<span class="' + color + '-text">' + msg  + '</span>');
}

// runtimeCatalogue.getHypertyDescriptor(hyperty).then(function(descriptor) {
//   console.log(descriptor);
// }).catch(function(reason) {
//   console.error('Error: ', reason);
// });
