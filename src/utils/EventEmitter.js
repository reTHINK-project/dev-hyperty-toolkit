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
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */
class EventEmitter {

  /**
   * addEventListener listen for an eventType
   * @param  {string}         eventType - listening for this type of event
   * @param  {Function}       cb        - callback function will be executed when the event it is invoked
   */
  addEventListener(eventType, cb) {
    let _this = this;
    _this[eventType] = cb;
  }

  /**
   * Invoke the eventType
   * @param  {string} eventType - event will be invoked
   * @param  {object} params - parameters will be passed to the addEventListener
   */
  trigger(eventType, params) {
    let _this = this;

    if (_this[eventType]) {
      _this[eventType](params);
    }
  }

}

export default EventEmitter;
