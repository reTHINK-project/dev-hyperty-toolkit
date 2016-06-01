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

import EventEmitter from '../utils/EventEmitter';
import participant from './participant';

class ChatGroup extends EventEmitter {

  constructor(syncher, discovery, domain) {

    if (!syncher) throw Error('Syncher is a necessary dependecy');
    if (!discovery) throw Error('Hyperty discover is a necessary dependecy');

    super(syncher, discovery);

    let _this = this;
    _this._syncher = syncher;
    _this.discovery = discovery;

    _this._objectDescURL = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/dataschema/Communication';
  }

  set dataObjectReporter(dataObjectReporter) {

    if (!dataObjectReporter) throw new Error('The data object reporter is necessary parameter');

    let _this = this;

    console.info('Set data object reporter: ', dataObjectReporter);

    dataObjectReporter.onSubscription(function(event) {

      event.accept();

      // Set the other subscription like a participant
      participant.hypertyResource = event.url;

      console.info('On Subscription add Participant: ', participant, event);

      dataObjectReporter.data.participants.push(participant);

      _this.processParticipant(participant);
    });

    dataObjectReporter.onAddChild(function(child) {
      console.info('Reporter - Add Child: ', child);
      dataObjectReporter.data.lastModified = new Date().toJSON();
      _this._processChild(child);
    });

    _this._dataObjectReporter = dataObjectReporter;
  }

  get dataObjectReporter() {
    let _this = this;
    return _this._dataObjectReporter;
  }

  set dataObjectObserver(dataObjectObserver) {
    let _this = this;

    _this._dataObjectObserver = dataObjectObserver;

    dataObjectObserver.onChange('participants.*', function(event) {
      console.info('Change Event: ', event);
      _this.processPartipants(event.data);
    });

    dataObjectObserver.onAddChild(function(child) {
      console.info('Observer - Add Child: ', child);
      _this._processChild(child);
    });

  }

  get dataObjectObserver() {
    let _this = this;
    return _this._dataObjectObserver;
  }

  get dataObject() {
    let _this = this;
    return _this._dataObjectReporter ? _this.dataObjectReporter : _this.dataObjectObserver;
  }

  processPartipants(participants) {
    let _this = this;

    participants.forEach(function(participant) {
      if (_this._dataObjectObserver._owner !== participant.hypertyResource) {
        _this.processParticipant(participant);
      }
    });
  }

  processParticipant(participant) {
    let _this = this;
    console.log('Each Participant will be trigger: ', participant);
    _this.trigger('participant:added', participant);
  }

  /**
   * Process child messages
   * @param  {[type]} child [description]
   * @return {[type]}          [description]
   */
  _processChild(child) {
    let _this = this;

    console.info('Process Message:', child);

    _this.trigger('new:message:recived', child);
  }

  /**
   * This function is used to send a chat message.
   * @param  {Message} message text to be send
   */
  send(message) {

    console.info('Send Message:', message, this);

    let _this = this;
    let dataObject = _this.dataObjectReporter ? _this.dataObjectReporter : _this.dataObjectObserver;

    return new Promise(function(resolve, reject) {

      dataObject.addChild('chatmessages', {chatMessage: message}).then(function(dataObjectChild) {
        console.info('Data Object Child: ', dataObjectChild);
        let msg = {
          childId: dataObjectChild._childId,
          from: dataObjectChild._owner,
          value: dataObjectChild.data
        };

        _this._processChild(msg);
        resolve(dataObjectChild);
      }).catch(function(reason) {
        console.error('Reason:', reason);
        reject(reason);
      });
    });

  }

  join(resource) {

    let _this = this;

    return new Promise(function(resolve, reject) {

      _this.addParticipant(resource).then(function(result) {
        resolve('joined: ', result);
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

  // TODO: improve this with an invite;
  /**
   * This function is used to add / invite new participant on an existing Group Chat instance.
   * @return {Promise} Promise with the status
   */
  invite(userList) {

    let _this = this;

    return new Promise(function(resolve, reject) {

      console.info('----------------------- Mapping Particpants -------------------- \n');
      _this._mappingUser(userList)
      .then((hyperties) => { return _this.dataObject.inviteObservers(hyperties); })
      .then(function() {
        console.info('2. Result of invition');
        resolve();
      }).catch(function(reason) {
        reject(reason);
      });

    });

  }

  /**
   * This function is used to remove a participant from an existing Group Chat instance.
   * @return {Promise} Promise with the status
   */
  removeParticipant() {
    return new Promise(function(resolve, reject) {

      try {
        resolve('participant removed');
      } catch (e) {
        reject('remove participant fail');
      }

    });

  }

  _mappingUser(userList) {

    let _this = this;

    return new Promise(function(resolve, reject) {

      let hyperties = [];
      let count = 0;

      console.log('User List:', userList, userList.length);

      if (userList.length === 0) reject(hyperties);

      let resultUsers = function() {
        if (count === userList.length) {
          console.info('Have ' + hyperties.length + 'users found;');
          resolve(hyperties);
        }
      };

      let activeUsers = function(user) {
        count++;
        hyperties.push(user.hypertyURL);
        resultUsers();
      };

      let inactiveUsers = function() {
        count++;
        resultUsers();
      };

      userList.forEach(function(user) {
        console.log(user);
        if (user.email.length) {
          return _this.discovery.discoverHypertyPerUser(user.email, user.domain).then(activeUsers).catch(inactiveUsers);
        }
      });

    });

  }

}

export default ChatGroup;
