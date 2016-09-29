// jshint browser:true, jquery: true
// jshint varstmt: true

import rethink from '../resources/factories/rethink';
import config from '../config.json';

import { hypertyDeployed, hypertyFail } from '../app/main';

window.KJUR = {};

let domain = config.domain;
let runtimeLoader;
let loading = false;

console.log('Configuration file before:', config, process.env.INTER_DEVELOPMENT);

if (process.env.INTER_DEVELOPMENT) {
  config.domain = window.location.hostname;
  config.runtimeURL = config.runtimeURL.replace(domain, window.location.hostname);
}

console.log('Configuration file after:', config);

rethink.install(config).then(function(result) {

  runtimeLoader = result;
  console.log('Installed:', result, config.development);

  if (process.env.INTER_DEVELOPMENT) {
    return loadStubs().then((result) => {
      console.log('Stubs load: ', result);
      return getListOfHyperties(domain);
    });
  } else {
    return getListOfHyperties(domain);
  }

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

function loadStubs() {

  domain = window.location.hostname;
  let protostubsURL = 'https://' + domain + '/.well-known/protocolstub';

  return new Promise(function(resolve, reject) {
    $.ajax({
      url: protostubsURL,
      success: function(result) {
        let response = [];
        if (typeof result === 'object') {
          result.forEach(function(key) {
            response.push(key);
          });
        } else if (typeof result === 'string') {
          response = JSON.parse(result);
        }

        let stubs = response.filter((stub) => {
          return stub !== 'default';
        });

        if (stubs.length) {

          let loadAllStubs = [];
          stubs.forEach((stub) => {
            loadAllStubs.push(runtimeLoader.requireProtostub('hyperty-catalogue://' + stub + '/.well-known/protocolstub/' + stub));
          });

          Promise.all(loadAllStubs).then((result) => {
            resolve(result);
          }).catch(reason => reject(reason));
        }

      },
      fail: function(reason) {
        reject(reason);
        notification(reason, 'warn');
      }
    });
  });
}

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
  if (config.development) {
    domain = window.location.hostname;
    hypertyPath = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/hyperty/' + hypertyName;
  }

  let $el = $('.main-content .notification');
  $el.empty();
  addLoader($el);

  runtimeLoader.requireHyperty(hypertyPath).then((hyperty) => {
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
