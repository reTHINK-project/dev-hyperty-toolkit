import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';
import Request from '../browser/Request';
import {RuntimeCatalogue} from 'service-framework/dist/RuntimeCatalogue';
import storageManager from './storageManager.fake';

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

  storageManager() {
    return storageManager;
  },

  createRuntimeCatalogue(development) {

    if (!this.catalogue)
      this.catalogue = new RuntimeCatalogue(this);

    return this.catalogue;
  }

});

export default runtimeFactory;
