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
/* globals RTCPeerConnection */
/* globals RTCSessionDescription */
/* globals RTCIceCandidate */

import 'webrtc-adapter-test';

import EventEmitter from '../utils/EventEmitter';
import connection from './connection';
import peer from './peer';

class ConnectionController extends EventEmitter {

  constructor(syncher, domain, configuration) {

    if (!syncher) throw new Error('The syncher is a needed parameter');
    if (!domain) throw new Error('The domain is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super();

    let _this = this;

    _this.syncher = syncher;
    _this.mode = 'offer';
    _this._domain = domain;

    _this._objectDescURL = 'hyperty-catalogue://catalogue.' + _this._domain + '/.well-known/dataschema/Connection';

    console.info(configuration);

    _this.mediaConstraints = configuration.mediaConstraints;
    _this.configuration = configuration.webrtc;

    // Prepare the PeerConnection
    let peerConnection = new RTCPeerConnection(_this.configuration);

    peerConnection.addEventListener('signalingstatechange', function(event) {

      console.info('signalingstatechange', event.currentTarget.signalingState);

      if (event.currentTarget.signalingState === 'have-local-offer') {
        _this.trigger('controller:state:change', _this.mode);
      }

      if (event.currentTarget.signalingState === 'have-remote-offer') {
        _this.mode = 'answer';
        _this.trigger('controller:state:change', _this.mode);
      }

    });

    peerConnection.addEventListener('iceconnectionstatechange', function(event) {
      console.info('iceconnectionstatechange', event.currentTarget.iceConnectionState);
      let data = _this._dataObjectReporter.data;
      if (data.hasOwnProperty('connection')) {
        data.connection.status = event.currentTarget.iceConnectionState;
      }
    });

    peerConnection.addEventListener('icecandidate', function(event) {

      if (!event.candidate) return;

      let icecandidate = {
        type: 'candidate',
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };

      let data = _this._dataObjectReporter.data;

      if (_this.mode === 'offer') {
        data.connection.ownerPeer.iceCandidates.push(icecandidate);
      } else {
        data.peer.iceCandidates.push(icecandidate);
      }

    });

    // Add stream to PeerConnection
    peerConnection.addEventListener('addstream', function(event) {
      console.info('Add Stream: ', event);
      _this.trigger('stream:added', event);
    });

    _this.peerConnection = peerConnection;

  }

  set stream(mediaStream) {
    if (!mediaStream) throw new Error('The mediaStream is a needed parameter');

    let _this = this;
    console.info('set stream: ', mediaStream);
    _this.peerConnection.addStream(mediaStream);
  }

  get getLocalStreams() {
    let _this = this;
    return _this.peerConnection.getLocalStreams();
  }

  get getRemoteStreams() {
    let _this = this;
    return _this.peerConnection.getRemoteStreams();
  }

  /**
   * Set Remote peer information, like Hyperty.
   * @param  {Object} remotePeerInformation information about the peer;
   */
  set remotePeerInformation(remotePeerInformation) {
    let _this = this;
    _this._remotePeerInformation = remotePeerInformation;
  }

  /**
   * Get information relative to the Remote Peer;
   * @return {Object} remotePeerInformation;
   */
  get remotePeerInformation() {
    let _this = this;
    return _this._remotePeerInformation;
  }

  /**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */
  set dataObjectReporter(dataObjectReporter) {
    if (!dataObjectReporter) throw new Error('The Data Object Reporter is a needed parameter');

    let _this = this;
    _this._dataObjectReporter = dataObjectReporter;

    let data = _this._dataObjectReporter.data;

    dataObjectReporter.onSubscription(function(event) {
      event.accept();
    });

    if (_this.mode === 'offer') {
      data.connection = connection;

      _this.createOffer();
    } else {
      data.peer = peer;

      _this.createAnswer();
    }

    console.debug(_this._dataObjectReporter);

  }

  /**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */
  get dataObjectReporter() {
    let _this = this;
    return _this._dataObjectReporter;
  }

  /**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */
  set dataObjectObserver(dataObjectObserver) {
    if (!dataObjectObserver) throw new Error('The Data Object Observer is a needed parameter');

    let _this = this;
    _this._dataObjectObserver = dataObjectObserver;
    _this.changePeerInformation(dataObjectObserver);

  }

  /**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */
  get dataObjectObserver() {
    let _this = this;
    return _this._dataObjectObserver;
  }

  changePeerInformation(dataObjectObserver) {
    let _this = this;
    let data = dataObjectObserver.data;
    let isOwner = data.hasOwnProperty('connection');

    let peerData = isOwner ? data.connection.ownerPeer : data.peer;

    console.info('Peer Data:', JSON.stringify(peerData));

    if (peerData.hasOwnProperty('connectionDescription')) {
      _this.processPeerInformation(peerData.connectionDescription);
    }

    if (peerData.hasOwnProperty('iceCandidates')) {
      peerData.iceCandidates.forEach(function(ice) {
        _this.processPeerInformation(ice);
      });
    }

    dataObjectObserver.onChange('*', function(event) {
      console.info('Observer on change message: ', event);
      _this.processPeerInformation(event.data);
    });

  }

  processPeerInformation(data) {
    let _this = this;

    console.info(JSON.stringify(data));

    if (data.type === 'offer' || data.type === 'answer') {
      console.info('Process Connection Description: ', data.sdp);
      _this.peerConnection.setRemoteDescription(new RTCSessionDescription(data), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
    }

    if (data.type === 'candidate') {
      console.info('Process Ice Candidate: ', data);
      _this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate: data.candidate}), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
    }
  }

  remoteDescriptionSuccess() {
    console.info('remote success');
  }

  remoteDescriptionError(error) {
    console.error('error: ', error);
  }

  createOffer() {
    let _this = this;

    _this.peerConnection.createOffer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.infoError);

  }

  createAnswer() {
    let _this = this;

    _this.peerConnection.createAnswer(function(description) {
      _this.onLocalSessionCreated(description);
    }, _this.infoError);
  }

  onLocalSessionCreated(description) {

    let _this = this;

    _this.peerConnection.setLocalDescription(description, function() {

      let data = _this._dataObjectReporter.data;
      let sdpConnection = {
        sdp: description.sdp,
        type: description.type
      };

      if (_this.mode === 'offer') {
        data.connection.ownerPeer.connectionDescription = sdpConnection;
      } else {
        data.peer.connectionDescription = sdpConnection;
      }

    }, _this.infoError);

  }

  infoError(err) {
    console.error(err.toString(), err);
  }

  /**
   * Used to accept an incoming connection request.
   * @method accept
   * @return {Promise}
   */
  accept(stream) {
    // TODO: Pass argument options as a stream, because is specific of implementation;

    let _this = this;
    let syncher = _this.syncher;

    console.log('Remote Peer Information: ', _this._remotePeerInformation);
    let remotePeer = _this._remotePeerInformation.from;

    return new Promise(function(resolve, reject) {

      try {

        console.info('------------------------ Syncher Create ---------------------- \n');
        syncher.create(_this._objectDescURL, [remotePeer], {})
        .then(function(dataObjectReporter) {
          console.info('2. Return the Data Object Reporter ', dataObjectReporter);

          _this.stream = stream;
          _this.dataObjectReporter = dataObjectReporter;
          resolve('accepted');
        })
        .catch(function(reason) {
          reject(reason);
        });

      } catch (e) {
        reject('error accepting connection');
      }
    });

  }

  /**
  * Used to decline an incoming connection request.
  * @method decline
  * @return {Promise}
  */
  decline() {

    let _this = this;
    let syncher = _this.syncher;

    return new Promise(function(resolve, reject) {

      try {
        console.log('syncher: ', syncher);
        resolve('Declined');
      } catch (e) {
        reject(e);
      }
    });

  }

  /**
   * Used to close an existing connection instance.
   * @method disconnect
   * @return {Promise}
   */
  disconnect() {

    // TODO: optimize the disconnect function

    let _this = this;

    return new Promise(function(resolve, reject) {

      try {

        _this.peerConnection.close();

        resolve(true);
      } catch (e) {
        reject('error disconnecting connection');
      }

    });

  }

  /**
   * Used to add/invite new peers on an existing connection instance (for multiparty connections).
   * @method addPeer
   * @return {Promise}
   */
   addPeer() {

   }

  /**
   * Used to remove a peer from an existing connection instance.
   * @method removePeer
   * @return {Promise}
   */
  removePeer() {

  }

  // Peer Actions
  disableMic() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      try {
        let localStream = _this.peerConnection.getLocalStreams()[0];
        let audioTrack = localStream.getAudioTracks()[0];

        audioTrack.enabled = audioTrack.enabled ? false : true;
        resolve(audioTrack.enabled);
      } catch (e) {
        reject(e);
      }

    });

  }

  disableCam() {
    let _this = this;

    return new Promise(function(resolve, reject) {

      try {
        let localStream = _this.peerConnection.getLocalStreams()[0];
        let videoTrack = localStream.getVideoTracks()[0];

        videoTrack.enabled = videoTrack.enabled ? false : true;

        resolve(videoTrack.enabled);
      } catch (e) {
        reject(e);
      }
    });

  }

  mute() {

    let _this = this;

    return new Promise(function(resolve, reject) {

      try {
        let remoteStream = _this.peerConnection.getRemoteStreams()[0];
        let audioTrack = remoteStream.getAudioTracks()[0];

        audioTrack.enabled = audioTrack.enabled ? false : true;

        resolve(audioTrack.enabled);
      } catch (e) {
        reject(e);
      }
    });

  }

}

export default ConnectionController;
