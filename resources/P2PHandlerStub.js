
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

// TODO: integrate the status eventing

import {Syncher} from 'service-framework/dist/Syncher';
import ConnectionController from './ConnectionController';

/**
 * ProtoStub Interface
 */
class P2PHandlerStub {

  /**
   * Initialise the protocol stub including as input parameters its allocated
   * component runtime url, the runtime BUS postMessage function to be invoked
   * on messages received by the protocol stub and required configuration retrieved from protocolStub descriptor.
   * @param  {URL.runtimeProtoStubURL}                   runtimeProtoStubURL runtimeProtoSubURL
   * @param  {Message.Message}                           busPostMessage     configuration
   * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
   */
  constructor(runtimeProtoStubURL, miniBus, configuration) {
    if (!runtimeProtoStubURL) throw new Error('The runtimeProtoStubURL is a required parameter');
    if (!miniBus) throw new Error('The bus is a required parameter');
    if (!configuration) throw new Error('The configuration is a required parameter');

    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._runtimeURL = configuration.runtimeURL;
    this._configuration = configuration;
    this._bus = miniBus;
    this._bus.addListener('*', (msg) => {
        this._sendChannelMsg(msg);
    });

    this._connectionControllers = {};

    this._syncher = new Syncher(runtimeProtoStubURL, miniBus, configuration);
    this._syncher.onNotification( (event) => {

      console.log('+[P2PHandlerStub] On Syncher Notification: ', event);
      event.ack(200);

      switch (event.type) {

        case 'create':
          this._createConnectionController(event).then( (connectionController) => {
            this._connectionControllers[event.from] = connectionController;
            connectionController.onMessage( (m) => {
              this._deliver(m);
            });
          });
          break;

        case 'delete':
          // TODO: question code in Connector --> there it deletes all controllers --> why?
          console.log("+[P2PHandlerStub] deleting connection handler for " + event.from)
          let connectionController = this._connectionControllers[event.from];

          if ( connectionController ) {
            connectionController.cleanup();
            delete this._connectionControllers[event.from];
          }
          break;

        default:
      }
    });
  }

  /**
   * To disconnect the protocol stub.
   */
  disconnect() {
    // cleanup ALL connectionControllers
    Object.keys(this._connectionControllers).forEach((key) => {
      this._controllers[key].cleanup();;
      delete this._controllers[key];
    });

  }


  _createConnectionController(invitationEvent) {

    return new Promise((resolve, reject) => {
      let connectionController = new ConnectionController(this._runtimeProtoStubURL, this._syncher, this._configuration, false);
      connectionController.observe( invitationEvent ).then( () => {
        // create the reporter automatically
        connectionController.report(invitationEvent.from, false).then( () => {
          resolve(connectionController);
        })
      })
    })
  }


  _sendChannelMsg(msg) {
    if ( this._filter(msg) ) {
      // TODO: verify: is this selection correct?
      let connectionController = this._connectionControllers[msg.to];
      if ( connectionController )
        connectionController.sendMessage(JSON.stringify(msg));
    }
  }

  _sendStatus(value, reason) {
    let msg = {
      type: 'update',
      from: this._runtimeProtoStubURL,
      to: this._runtimeProtoStubURL + '/status',
      body: {
        value: value
      }
    };
    if (reason) {
      msg.body.desc = reason;
    }
    this._bus.postMessage(msg);
  }

  /**
   * Filter method that should be used for every messages in direction: Protostub -> MessageNode
   * @param  {Message} msg Original message from the MessageBus
   * @return {boolean} true if it's to be deliver in the MessageNode
   */
  _filter(msg) {
    if (msg.body && msg.body.via === this._runtimeProtoStubURL)
      return false;
    return true;
  }

  /**
   * Method that should be used to deliver the message in direction: Protostub -> MessageBus (core)
   * @param  {Message} msg Original message from the MessageNode
   */
  _deliver(msg) {
    if (!msg.body) msg.body = {};

    msg.body.via = this._runtimeProtoStubURL;
    this._bus.postMessage(msg);
  }

}

export default function activate(url, bus, config) {
  return {
    name: 'P2PHandlerStub',
    instance: new P2PHandlerStub(url, bus, config)
  };
}
