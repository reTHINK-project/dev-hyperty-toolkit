// jshint
// Runtime

import runtimeFactory from './runtimeFactory';

import MiniBus from 'runtime-core/dist/minibus';

window.components = {};
let minibus = new MiniBus();

let runtimeProxy = {
  requireHyperty: (hypertyDescriptor) => {

    let from = 'app:requireHyperty';

    return new Promise(function(resolve, reject) {

      let msg = {
        from: from,
        to: 'core:loadHyperty',
        body: {
          value: {
            descriptor: hypertyDescriptor
          }
        }
      };

      minibus._onMessage(msg);

      minibus.addListener(from, function(msg) {
        if (!msg.body.hasOwnProperty('code')) {
          let hypertyURL = msg.body.value.runtimeHypertyURL;
          let hypertyComponent = window.components[hypertyURL];
          let hyperty = {
            runtimeHypertyURL: hypertyURL,
            status: msg.body.value.status,
            instance: hypertyComponent.instance,
            name: hypertyComponent.name
          };

          resolve(hyperty);

        } else {
          reject(msg.body.value);
        }
      });

    });
  },

  requireProtostub: (domain) => {
    let from = 'app:requireProtostub';

    return new Promise(function(resolve, reject) {

      let msg = {
        from: from,
        to: 'core:loadStub',
        body: {
          value: {
            domain: domain
          }
        }
      };

      minibus._onMessage(msg);
      minibus.addListener(from, function(msg) {
        if (!msg.body.hasOwnProperty('code')) {
          let protostubURL = msg.body.value.url || msg.body.value.runtimeProtoStubURL;
          let protostubComponent = window.components[protostubURL];
          let protostub = {
            runtimeProtostubURL: protostubURL,
            status: msg.body.value.status,
            instance: protostubComponent.instance,
            name: protostubComponent.name
          };

          resolve(protostub);

        } else {
          reject(msg.body.value);
        }
      });
    });
  }
};

const rethink = {

  install: function({domain, runtimeURL, development}={}) {

    return new Promise((resolve, reject) => {

      console.log('Install configuration: ', development, domain, runtimeURL);

      let catalogue = runtimeFactory.createRuntimeCatalogue(development);

      catalogue.getRuntimeDescriptor(runtimeURL).then((descriptor) => {

        if (descriptor.sourcePackageURL === '/sourcePackage') {
          return descriptor.sourcePackage;
        } else {
          return catalogue.getSourcePackageFromURL(descriptor.sourcePackageURL);
        }

      })
      .then((sourcePackage) => {

        window.eval(sourcePackage.sourceCode);

        let runtime = new Runtime(runtimeFactory, domain);
        window.runtime = runtime;

        runtime.init().then((result) => {
          minibus.addListener('core:loadHyperty', function(msg) {
            console.log('Load Hyperty: ', msg);

            let resultMsg = {};
            resultMsg.from = msg.to;
            resultMsg.to = msg.from;
            resultMsg.body = {};

            //TODO: Work the message errors, probably use message factory
            runtime.loadHyperty(msg.body.value.descriptor).then(function(result) {
              resultMsg.body.value = result;
              minibus._onMessage(resultMsg);
            }).catch(function(reason) {
              resultMsg.body.value = reason;
              resultMsg.body.code = 404;
              minibus._onMessage(resultMsg);
            });

          });

          minibus.addListener('core:loadStub', function(msg) {
            console.log('Load Stub:', msg);

            let resultMsg = {};
            resultMsg.from = msg.to;
            resultMsg.to = msg.from;
            resultMsg.body = {};

            //TODO: Work the message errors, probably use message factory
            runtime.loadStub(msg.body.value.domain).then(function(result) {
              resultMsg.body.value = result;
              minibus._onMessage(resultMsg);
            }).catch(function(reason) {
              resultMsg.body.value = reason;
              resultMsg.body.code = 400;
              minibus._onMessage(resultMsg);
            });

          });

          resolve(runtimeProxy);
        });

      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });
    });

  }

};

export default rethink;
