import config from '../../system.config.json';
import RuntimeFactory from './RuntimeFactory';
import RuntimeCatalogue from 'service-framework/dist/RuntimeCatalogue';

class InstallerFactory {

  constructor() {
  }

  /**
   * Instalation process to specific environment
   * @param  {MiniBus} minibus    Minimal interface and implementation to send and receive messages.
   * @param  {URL} runtimeURL     RuntimeURL to be loaded
   * @return {Promise}           Status of instalation;
   */
  install(minibus, runtimeURL) {

    return new Promise(function(resolve, reject) {

      let runtimeFactory = new RuntimeFactory();

      let catalogue = new RuntimeCatalogue(runtimeFactory);
      let domain = config.domain;

      window.catalogue = catalogue;

      catalogue.getRuntimeDescriptor(runtimeURL)
      .then(function(descriptor) {

        eval(descriptor.sourcePackage.sourceCode);

        let runtime = new RuntimeUA(runtimeFactory, domain);
        window.runtime = runtime;

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

        console.log('Runtime Instaled: ');
        resolve('installed');

      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });
    });

  }

}

export default InstallerFactory;
