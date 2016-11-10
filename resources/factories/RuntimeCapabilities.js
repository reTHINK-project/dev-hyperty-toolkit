// TODO: import and extend the class of the service-framework
// service-framework/dist/RuntimeCapabilities;

class RuntimeCapabilities {

  constructor(storageManager) {
    if (!storageManager) throw new Error('The Runtime Capabilities need the storageManager');

    this.storageManager = storageManager;
  }

  /**
   * Returns as a promise RuntimeCapabilities json object with all available capabilities of the runtime.
   * If it was not yet persisted in the Storage Manager it collects all required info from the platform and saves in the storage manager.
   * @returns {Promise<object>}
   */
  getRuntimeCapabilities() {

    return new Promise((resolve, reject) => {

      Promise.all([this._getEnvironment(), this._getMediaDevices()]).then((result) => {
        let capabilities = {};
        result.forEach((capability) => {
          Object.assign(capabilities, capability);
        });

        this.storageManager.set('capabilities', '1', capabilities);

        resolve(capabilities);
      }).catch((error) => {
        reject(error);
      });

    });

  }

  /**
   * returns as a promise a boolean according to available capabilities.
   * @returns {Promise<boolean>}
   */
  isAvailable(capability) {
    return new Promise((resolve) => {

      this.storageManager.get('capabilities').then((capabilities) => {

        console.log('Capability ' + capability + ' is available? ', capabilities.hasOwnProperty(capability) && capabilities[capability]);
        if (capabilities.hasOwnProperty(capability) && capabilities[capability]) {
          resolve(true);
        } else {
          resolve(false);
        }
      });

    });
  }

  /**
   * it refreshes previously collected capabilities and updates the storage manager
   */
  update() {
    return new Promise((resolve, reject) => {
      this.getRuntimeCapabilities().then(resolve).catch(reject);
    });
  }

  // TODO: organize the code in separated files
  _getEnvironment() {

    // TODO: this should be more effective and check the environment
    return {
      browser: !!(window && navigator),
      node: !!!(window && navigator)
    };
  }

  // TODO: organize the code in separated files
  _getMediaDevices() {
    return new Promise((resolve) => {

      let capability = {};

      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log('enumerateDevices() not supported.');
        resolve(capability);
        return;
      }

      // List cameras and microphones.
      navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          // console.log(device.kind, device.label, device.deviceId);
          if (device.kind === 'audioinput' && device.deviceId === 'default') {
            capability.mic = true;
          }

          if (device.kind === 'videoinput') {
            capability.camera = true;
          }
        });
        resolve(capability);
      })
      .catch((err) => {
        resolve(capability);
        console.log(err.name + ': ' + err.message);
      });
    });
  }

}

export default RuntimeCapabilities;
