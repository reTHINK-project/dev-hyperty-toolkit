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
    if (!this.catalogue)
      this.catalogue = development ? new RuntimeCatalogueLocal(this) : new RuntimeCatalogue(this);

    return this.catalogue;
  }

});

export default runtimeFactory;
