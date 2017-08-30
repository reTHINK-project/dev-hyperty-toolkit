// jshint browser:true, jquery: true
// jshint varstmt: true

// All the environments
import rethinkCore from '../resources/factories/rethink';
import rethinkBrowser from 'runtime-browser/bin/rethink';

import browserConfig from '../config.json';

import { hypertyDeployed, hypertyFail } from 'app';

window.KJUR = {};

console.info('environment config:', browserConfig);
let rethink = browserConfig.ENVIRONMENT === 'core' || browserConfig.ENVIRONMENT === 'all' ? rethinkCore : rethinkBrowser;

let domain = browserConfig.DOMAIN;
let config = {
  development: browserConfig.DEVELOPMENT,
  runtimeURL: browserConfig.RUNTIME_URL,
  domain: browserConfig.DOMAIN,
  indexURL: browserConfig.INDEX_URL,
  sandboxURL: browserConfig.SANDBOX_URL
};

let runtimeLoader;
let loading = false;

if (!rethink) {
  hypertyFail('This environment is not ready to be used');
  throw new Error('This environment is not ready to be used');
}

rethink.install(config).then(function(result) {

  runtimeLoader = result;

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

  let hypertiesURL = 'https://catalogue.' + domain + '/.well-known/hyperty';

  return new Promise(function(resolve, reject) {
    $.ajax({
      url: hypertiesURL,
      success: function(result) {
        let response = [];
        if (typeof result === 'object') {
          result.forEach(function(key) {
            response.push(key);
          });
        } else if (typeof result === 'string') {
          response = JSON.parse(result);
        }

        response.sort();
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

  if (loading) return;
  loading = true;

  let hypertyName = $(event.currentTarget).attr('data-name');
  console.log('Hyperty Name:', hypertyName);

  let hypertyPath = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/hyperty/' + hypertyName;

  let $el = $('.main-content .notification');
  $el.empty();
  addLoader($el);

  runtimeLoader.requireHyperty(hypertyPath, true).then((hyperty) => {
    hypertyDeployed(hyperty);
    loading = false;
  }).catch((reason) => {
    hypertyFail(reason);
    loading = false;
  });

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
  $el.append('<span class="' + color + '-text">' + msg + '</span>');
}
