/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

/* jshint undef: true */

// Service Framework
import HypertyDiscovery from 'service-framework/dist/HypertyDiscovery';
import {Syncher} from 'service-framework/dist/Syncher';

// Utils
import EventEmitter from '../utils/EventEmitter';
import {divideURL} from '../utils/utils';

// Internals
import ConnectionController from './ConnectionController';

/**
* Hyperty Connector;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/
class HypertyConnector extends EventEmitter {

  /**
  * Create a new Hyperty Connector
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */
  constructor(hypertyURL, bus, configuration) {

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super(hypertyURL, bus, configuration);

    let _this = this;
    _this._hypertyURL = hypertyURL;
    _this._bus = bus;
    _this._configuration = configuration;
    _this._domain = divideURL(hypertyURL).domain;

    _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/FakeDataSchema';

    _this._controllers = {};

    _this.hypertyDiscovery = new HypertyDiscovery(hypertyURL, bus);

    let syncher = new Syncher(hypertyURL, bus, configuration);
    syncher.onNotification(function(event) {
      _this._onNotification(event);
    });

    _this._syncher = syncher;
  }

  _onNotification(event) {

    let _this = this;

    console.info('------------ Acknowledges the Reporter ------------ \n');
    event.ack();
    console.info('------------------------ END ---------------------- \n');

    if (_this._controllers[event.from]) {
      _this._autoSubscribe(event);
    } else {
      _this._autoAccept(event);
    }

  }

  _autoSubscribe(event) {
    let _this = this;
    let syncher = _this._syncher;

    console.info('---------------- Syncher Auto Subscribe ---------------- \n');
    console.info('Subscribe URL Object ', event, syncher);
    syncher.subscribe(_this._objectDescURL, event.url).then(function(dataObjectObserver) {
      console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);
      console.log(_this._controllers);
      _this._controllers[event.from].dataObjectObserver = dataObjectObserver;

    }).catch(function(reason) {
      console.error(reason);
    });
  }

  _autoAccept(event) {
    let _this = this;
    let syncher = _this._syncher;

    console.info('----------- Syncher Subscribe (Auto Accept) ------------- \n');
    console.info('Subscribe URL Object ', event, syncher);
    syncher.subscribe(_this._objectDescURL, event.url).then(function(dataObjectObserver) {
      console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

      let connectionController = new ConnectionController(syncher, _this._domain, _this._configuration);
      connectionController.remotePeerInformation = event;
      connectionController.dataObjectObserver = dataObjectObserver;

      _this.trigger('connector:connected', connectionController);
      _this.trigger('have:notification', event);

      console.info('------------------------ END ---------------------- \n');
    }).catch(function(reason) {
      console.error(reason);
    });
  }

  /**
  * Establish connection with other client identifier
  * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
  * @param  {Object} options - Object with options to improve the connect
  */
  connect(hypertyURL, stream) {
    // TODO: Pass argument options as a stream, because is specific of implementation;
    // TODO: CHange the hypertyURL for a list of URLS
    let _this = this;
    let syncher = _this._syncher;

    return new Promise(function(resolve, reject) {

      let connectionController;
      console.info('------------------------ Syncher Create ---------------------- \n');
      syncher.create(_this._objectDescURL, [hypertyURL], {})
      .then(function(dataObjectReporter) {
        console.info('1. Return Create Data Object Reporter', dataObjectReporter);

        connectionController = new ConnectionController(syncher, _this._domain, _this._configuration);
        connectionController.stream = stream;
        connectionController.dataObjectReporter = dataObjectReporter;

        _this._controllers[hypertyURL] = connectionController;

        resolve(connectionController);
        console.info('--------------------------- END --------------------------- \n');
      })
      .catch(function(reason) {
        console.error(reason);
        reject(reason);
      });

    });
  }

}

export default function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyConnector',
    instance: new HypertyConnector(hypertyURL, bus, configuration)
  };

}
