import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';
import Request from '../browser/Request';
import {RuntimeCatalogue, RuntimeCatalogueLocal} from 'service-framework/dist/RuntimeCatalogue';

class RuntimeFactory {

  createSandbox() {
    return new SandboxBrowser();
  }

  createAppSandbox() {
    return new AppSandboxBrowser();
  }

  createHttpRequest() {
    let request = new Request();
    return request;
  }

  // TODO optimize the parameter was passed to inside the RuntimeCatalogue
  createRuntimeCatalogue() {

    let _this = this;
    let factory = {
      createHttpRequest: function() {
        return _this.createHttpRequest();
      }
    };

    console.log('Env: ', process.env.environment);
    if (process.env.environment === 'production') {
      return new RuntimeCatalogue(factory);
    } else {
      return new RuntimeCatalogueLocal(factory);
    }

  }

  removeSandbox() {

  }

}

export default RuntimeFactory;
