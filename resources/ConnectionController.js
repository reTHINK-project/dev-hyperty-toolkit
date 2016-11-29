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

import 'webrtc-adapter';

/**
  The ConnectionController has a generic design so that it can be used in both stubs.
  It manages a single DataChannel, it is not requesting access to media input, i.e.
  does not have audio/video streams.
**/
class ConnectionController {
  constructor(myUrl, syncher, configuration) {

    if (!myUrl) throw new Error('The own url (myUrl) is a needed parameter');
    if (!syncher) throw new Error('The syncher is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    this._domain = this._divideURL(myUrl)["domain"];
    this._objectDescURL = 'hyperty-catalogue://catalogue.' + this._domain + '/.well-known/dataschema/Connection';

    this._myUrl = myUrl;
    this._syncher = syncher;
    this._configuration = configuration;
    this._dataObjectObserver;
    this._dataObjectReporter;
    this._peerUrl;
    this._dataChannel;

    this._peerConnection = this._createPeerConnection();
  }

  //create a peer connection with its event handlers
  _createPeerConnection() {
    let pc = this._peerConnection;
    if (!pc) {
      pc = new RTCPeerConnection(this._configuration.webRTC);
      console.log("[P2P-ConnectionController]: created PeerConnection");

      this._dataChannel = pc.createDataChannel("P2PChannel");
      this._dataChannel.onopen = () => {
        this._onDataChannelOpen();
      };
      this._dataChannel.onerror = (e) => {
        this._onDataChannelError(e);
      };
      this._dataChannel.onmessage = (m) => {
        if (this._onDataChannelMessage)
          this._onDataChannelMessage(m);
      };
      this._dataChannel.onclose = () => {
        this._onDataChannelClose();
      };

      // event handler for local ice candidates
      pc.onicecandidate = (e) => {
        console.log("[P2P-ConnectionController]: icecandidateevent occured: ", e)
        if (!e.candidate) return;
        let icecandidate = {
          type: 'candidate',
          candidate: e.candidate.candidate,
          sdpMid: e.candidate.sdpMid,
          sdpMLineIndex: e.candidate.sdpMLineIndex
        };
        // send candidate to remote peer by pushing it to the reporter object
        this._dataObjectReporter.data.iceCandidates.push(icecandidate);
      }
    }
    return pc;
  }

  /**
  React to the given invitation event by subscribing to the provided invitationEvent.url.
  **/
  observe(invitationEvent) {
    this._peerUrl = invitationEvent.from;

    return new Promise((resolve, reject) => {

      this._syncher.subscribe(this._objectDescURL, invitationEvent.url).then((dataObjectObserver) => {
        console.info('+[P2PHandlerStub] got Data Object Observer', dataObjectObserver);
        this._setupObserver(dataObjectObserver);
        resolve();

      }).catch(function(reason) {
        console.error(reason);
        reject();
      });
    });
  }

  /**
  Creates a syncher object and invite the given peerUrl to subscribe for it.
  Also creates the local offer, performs setLocalDescription and publishes the offer via the reporter object.
  **/
  report(peerUrl) {
    if ( ! this._peerUrl )
      this._peerUrl = peerUrl;
    return new Promise((resolve, reject) => {
        // initial data for reporter sync object
        let dataObject = {
          name: "P2PConnection",
          status: "",
          owner: this._myUrl,
          connectionDescription: {},
          iceCandidates: []
        }
        // ensure this the objReporter object is created before we create the offer
        this._syncher.create(this._objectDescURL, [this._peerUrl], dataObject).then((objReporter) => {
            console.info('[P2P-ConnectionController] Created WebRTC Object Reporter', objReporter);

            this._dataObjectReporter = objReporter;
            this._dataObjectReporter.onSubscription((event) => {
              event.accept(); // all subscription requested are accepted
            });

            let constraints = {
              offerToReceiveAudio: false,
              offerToReceiveVideo: false
            };
            this._peerConnection.createOffer(constraints).then((offer) => {
              this._peerConnection.setLocalDescription( new RTCSessionDescription(offer), () => {
                  this._dataObjectReporter.data.connectionDescription = offer;
                  console.info('[P2P-ConnectionController] localDescription set successfully');
                  resolve();
                }
              )
              .catch((e) => {
                reject("Create Offer failed: ", e);
              });
            })
            .catch( (reason) => {
              console.error(reason);
              reject(reason);
            });
        });

      });
    }

    onMessage(callback) {
      // add the message callback
      this._onDataChannelMessage = callback;
    }

    sendMessage(m) {
      this._dataChannel.send(m.stringify());
    }

    cleanup() {
      if ( this._dataChannel ) this._dataChannel.close();
      if ( this._peerConnection ) this._peerConnection.close();
      this._dataChannel = null;
      this._peerConnection = null;
    }

    _setupObserver(dataObjectObserver) {
      this._dataObjectObserver = dataObjectObserver;

      let peerData = this._dataObjectObserver.data;
      console.info("[P2P-ConnectionController]: _setupObserver Peer Data:", peerData);

      if (peerData.hasOwnProperty('connectionDescription')) {
        this._processPeerInformation(peerData.connectionDescription);
      }

      if (peerData.hasOwnProperty('iceCandidates')) {
        peerData.iceCandidates.forEach((ice) => {
          console.log("[P2P-ConnectionController]: handleObserverObject for ice", ice);
          this._processPeerInformation(ice);
        });
      }

      // setup listener for future changes on the observed data object
      dataObjectObserver.onChange('*', (event) => {
        console.debug('[P2P-ConnectionController]: Observer on change message: ', event);
        // we need to process the answer from event.data and the candidates which might trickle
        // from event.data[0]
        if (event.data[0]) { // [0] this does the trick when ice candidates are trickling ;)
          console.log('>>event.data[0]', event.data[0]);
          this._processPeerInformation(event.data[0]);
        } else {
          console.log('[P2P-ConnectionController]: >>event', event);
          this._processPeerInformation(event.data);
        }
      });
    }


    _processPeerInformation(data) {
      console.info("[P2P-ConnectionController]: processPeerInformation: ", JSON.stringify(data));
      if (!this._peerConnection) {
        console.info("[P2P-ConnectionController]: processPeerInformation: no PeerConnection existing --> maybe in disconnecting process. --> ignoring this update");
        return;
      }

      if (data.type === 'offer' || data.type === 'answer') {
        console.info('[P2P-ConnectionController]: Process Connection Description: ', data);
        this._peerConnection.setRemoteDescription(new RTCSessionDescription(data)).then(() => {
            console.log("[P2P-ConnectionController]: remote success")
          })
          .catch((e) => {
            console.log("[P2P-ConnectionController]: remote error: ", e)
          });
      }

      if (data.candidate) {
        console.info('Process Ice Candidate: ', data);
        this._peerConnection.addIceCandidate(new RTCIceCandidate({
          candidate: data.candidate
        }));
      }
    }

    _onDataChannelOpen() {
      console.info('[P2P-ConnectionController] DataChannel opened');
    }

    _onDataChannelError(e) {
      console.error('[P2P-ConnectionController] DataChannel error: ', e);
    }

    _onDataChannelClose() {
      console.error('[P2P-ConnectionController] DataChannel closed: ');
    }


    /**
     * Divide an url in type, domain and identity
     * @param  {URL.URL} url - url address
     * @return {divideURL} the result of divideURL
     */
    _divideURL(url) {

      // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
      let re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
      let subst = '$1,$2,$3';
      let parts = url.replace(re, subst).split(',');

      // If the url has no protocol, the default protocol set is https
      if (parts[0] === url) {
        parts[0] = 'https';
        parts[1] = url;
      }

      let result = {
        type: parts[0],
        domain: parts[1],
        identity: parts[2]
      };

      return result;
    }
  }

export default ConnectionController;
