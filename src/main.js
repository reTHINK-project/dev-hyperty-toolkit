// jshint browser:true, jquery: true
// jshint varstmt: true

import RuntimeLoader from 'service-framework/dist/RuntimeLoader';
import InstallerFactory from '../resources/factories/InstallerFactory';
import config from '../system.config.json';

import {getTemplate} from './utils/utils';

import hyperties from '../resources/descriptors/Hyperties';

let installerFactory = new InstallerFactory();

window.KJUR = {};
let domain = config.domain;

let runtime = 'https://' + domain + '/.well-known/runtimes/RuntimeUA';

let runtimeLoader = new RuntimeLoader(installerFactory, runtime);

runtimeLoader.install().then(function() {

  let $dropDown = $('#hyperties-dropdown');

  Object.keys(hyperties).forEach(function(key) {
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

function loadHyperty(event) {
  event.preventDefault();

  let hypertyName = $(event.currentTarget).attr('data-name');
  let hypertyPath = 'https://' + domain + '/.well-known/hyperties/' + hypertyName;

  runtimeLoader.requireHyperty(hypertyPath).then(hypertyDeployed).catch(hypertyFail);

}

function hypertyDeployed(hyperty) {

  let $mainContent = $('.main-content').find('.row');
  getTemplate('hyperty-connector/HypertyConnector', 'hyperty-connector/demo.js').then(function(template) {
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
