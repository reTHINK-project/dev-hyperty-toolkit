import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';
import Request from '../browser/Request';
import {RuntimeCatalogue, RuntimeCatalogueLocal} from 'service-framework/dist/RuntimeCatalogue';

const runtimeFactory = Object.create({
  createSandbox() {
    return new SandboxBrowser();
  },

  createAppSandbox() {
    return new AppSandboxBrowser();
  },

  createHttpRequest() {
    let request = new Request();
    return request;
  },

  atob(b64) {
    return atob(b64);
  },

  createRuntimeCatalogue(development) {
    if (!this.catalogue) {
      let _dev = JSON.parse(development);
      let mode = _dev ? 'development' : 'production';
      console.log('Create Runtime Catalogue in', mode, 'mode', development);
      this.catalogue = _dev ? new RuntimeCatalogueLocal(this) : new RuntimeCatalogue(this);
    }

    return this.catalogue;
  }

});

export default runtimeFactory;
