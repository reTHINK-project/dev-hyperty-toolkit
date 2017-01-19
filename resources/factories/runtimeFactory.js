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
    let localStorage = window.localStorage;
    return new PersistenceManager(localStorage);
  },

  createRuntimeCatalogue() {

    if (!this.catalogue) {
      this.catalogue = new RuntimeCatalogue(this);
    }

    return this.catalogue;
  },

  runtimeCapabilities() {
    return new RuntimeCapabilities(this.storage);
  }

});

export default runtimeFactory;
