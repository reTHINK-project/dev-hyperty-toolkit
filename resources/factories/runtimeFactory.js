import WindowSandbox from '../sandboxes/WindowSandbox';
import SandboxBrowser from '../sandboxes/SandboxBrowser';
import AppSandboxBrowser from '../sandboxes/AppSandboxBrowser';

import Request from '../browser/Request';
//import {RuntimeCatalogue} from 'service-framework/dist/RuntimeCatalogue';
//import PersistenceManager from 'service-framework/dist/PersistenceManager';
import StorageManager from 'runtime-core/dist/StorageManager';

import RuntimeCapabilities from './RuntimeCapabilities';

// import StorageManagerFake from './StorageManagerFake';

import Dexie from 'dexie';
import 'dexie-observable';
import 'dexie-syncable';

import SyncClient from 'sync-client/dist/sync-client';

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
          SandboxCapabilities = {windowSandbox: true};

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

  storageManager(name, schemas, runtimeUA, remote = false) {

    if (!this.databases) { this.databases = {}; }
    if (!this.storeManager) { this.storeManager = {}; }

    if (navigator && navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then(function(persistent) {
        if (persistent) { console.log('Storage will not be cleared except by explicit user action'); } else { console.log('Storage may be cleared by the UA under storage pressure.'); }
      });
    }

    // Using the implementation of Service Framework
    // Dexie is the IndexDB Wrapper
    if (!this.databases.hasOwnProperty(name)) {

      let stores =  {};

      if (schemas) {
        stores = schemas;
      } else {
        stores[name] = 'key,version,value';
      }

      if (!remote) {
        this.databases[name] =  new Dexie(name, {addons:[]});
        this.databases[name].version(1).stores(stores);
      } else {
        //in case we use a remote storage server to be synched with
        // we use SyncClient lib, an extension of Dexie

        let versions = [{
          version: 1,
          stores: stores
        }];

        this.databases[name] =  new SyncClient(name, versions);
      } 
    }

    if (!this.storeManager.hasOwnProperty(name)) {
      this.storeManager[name] = new StorageManager(this.databases[name], name, schemas, runtimeUA, 1, remote);
    }

    if (remote) this.storeManager[name].remote = remote;

    return this.storeManager[name];
  },

/*  persistenceManager() {
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
  },*/

  runtimeCapabilities() {

    if (!this.capabilitiesManager) {

      let storageManager = this.storageManager('capabilities');

      this.capabilitiesManager = new RuntimeCapabilities(storageManager);
    }

    return this.capabilitiesManager;
  }

});

export default runtimeFactory;
