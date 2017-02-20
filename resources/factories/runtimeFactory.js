import WindowSandbox from '../sandboxes/WindowSandbox';
import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';

import Request from '../browser/Request';
import {RuntimeCatalogue} from 'service-framework/dist/RuntimeCatalogue';
import PersistenceManager from 'service-framework/dist/PersistenceManager';
import StorageManager from 'service-framework/dist/StorageManager';

import RuntimeCapabilities from './RuntimeCapabilities';

// import StorageManagerFake from './StorageManagerFake';

import Dexie from 'dexie';

const runtimeFactory = Object.create({

  createSandbox(capabilities) {

    return new Promise((resolve) => {

      let sandbox;
      let isWindowSandbox = '';
      let SandboxCapabilities = {};
      if (capabilities.hasOwnProperty('windowSandbox') && capabilities.windowSandbox) isWindowSandbox = 'windowSandbox';

      // TODO this should be corrected.. now is only for testing
      this.capabilitiesManager.isAvailable(isWindowSandbox).then((result) => {
        if (result) {
          // TODO: to be retrieved from capabilitiesManager
          SandboxCapabilities = { "windowSandbox": true };

          console.info('[createSandbox ] - windowSandbox');
          sandbox = new WindowSandbox(SandboxCapabilities);
        } else {
          console.info('[createSandbox ] - sandbox');
          sandbox = new SandboxBrowser(SandboxCapabilities);
        }

        resolve(sandbox);

      }).catch((reason) => {
        console.log('[createSandbox ] By default create a normal sandbox: ', reason);
        console.info('[createSandbox ] - sandbox');
        sandbox = new SandboxBrowser(capabilities);

        resolve(sandbox);
      });

    });

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

    if (!this.storage) {
      // Using the implementation of Service Framework
      // Dexie is the IndexDB Wrapper
      const db = new Dexie('cache');
      const storeName = 'objects';
      this.storage = new StorageManager(db, storeName);
    }

    return this.storage;
  },

  persistenceManager() {
    if (!this.localStorage) {
      window.localStorage;
      this.localStorage = new PersistenceManager(localStorage);
    }

    return this.localStorage;
  },

  createRuntimeCatalogue() {

    if (!this.catalogue) {
      this.catalogue = new RuntimeCatalogue(this);
    }

    return this.catalogue;
  },

  runtimeCapabilities() {
    this.capabilitiesManager = new RuntimeCapabilities(this.storage);
    return this.capabilitiesManager;
  }

});

export default runtimeFactory;
