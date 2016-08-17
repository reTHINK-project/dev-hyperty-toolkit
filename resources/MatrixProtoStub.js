
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

/**
 * ProtoStub Interface
 */
class MatrixProtoStub {

  /**
   * Initialise the protocol stub including as input parameters its allocated
   * component runtime url, the runtime BUS postMessage function to be invoked
   * on messages received by the protocol stub and required configuration retrieved from protocolStub descriptor.
   * @param  {URL.runtimeProtoStubURL}                            runtimeProtoStubURL runtimeProtoSubURL
   * @param  {Message.Message}                           busPostMessage     configuration
   * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
   */
  constructor(runtimeProtoStubURL, miniBus, configuration) {
    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._runtimeURL = configuration.runtimeURL;
    this._configuration = configuration;
    this._bus = miniBus;
    this._identity = null;
    this._ws = null;
    this._bus.addListener('*', (msg) => {
        this._assumeOpen = true;
        this._sendWSMsg(msg);
    });
    this._assumeOpen = false;
  }

  /**
   * Connect the protocol stub to the back-end server.
   * @param  {IDToken} identity identity .. this can be either an idtoken,
   *         or a username/password combination to authenticate against the Matrix HS
   */
  connect(identity) {

    this._identity = identity;
    this._assumeOpen = true;

    return new Promise((resolve, reject) => {

      if ( this._ws && this._ws.readyState === 1) {
        resolve(this._ws);
        return;
      }

      // create socket to the MN
      this._ws = new WebSocket(this._configuration.messagingnode + "?runtimeURL=" + encodeURIComponent(this._runtimeURL));
      this._ws.onmessage = (m) => { this._onWSMessage(m) };
      this._ws.onclose = () => { this._onWSClose() };
      this._ws.onerror = () => { this._onWSError() };

      this._ws.onopen = () => {
        this._onWSOpen();
        // resolve if not rejected
        resolve();
      };

    });
  }

  /**
   * To disconnect the protocol stub.
   */
  disconnect() {
    // send disconnect command to MN to indicate that resources for this runtimeURL can be cleaned up
    // the close of the websocket will be initiated from server side
    this._sendWSMsg({
      cmd: "disconnect",
      data: {
        runtimeURL: this._runtimeURL
      }
    });
    this._assumeOpen = false;
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

  _sendWSMsg(msg) {
    if ( this._filter(msg) ) {
      if ( this._assumeOpen )
        this.connect().then( () => {
          this._ws.send(JSON.stringify(msg));
        });
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


  _onWSOpen() {
    this._sendStatus("connected");
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

  // parse msg and forward it locally to miniBus
  _onWSMessage(msg) {
    this._deliver(JSON.parse(msg.data));
    // this._bus.postMessage(JSON.parse(msg.data));
  }

  _onWSClose() {
    //console.log("+[MatrixProtoStub] [_onWSClose] websocket closed");
    this._sendStatus("disconnected");
  }

  _onWSError(err) {
    // console.log("+[MatrixProtoStub] [_onWSError] websocket error: " + err);
  }
}

export default function activate(url, bus, config) {
  return {
    name: 'MatrixProtoStub',
    instance: new MatrixProtoStub(url, bus, config)
  };
}
