import slack from 'slack';
import {Syncher} from 'service-framework/dist/Syncher';

class SlackProtoStub {

  constructor(runtimeProtoStubURL, bus, config) {
    if (!runtimeProtoStubURL) throw new Error('The runtimeProtoStubURL is a needed parameter');
    if (!bus) throw new Error('The bus is a needed parameter');
    if (!config) throw new Error('The config is a needed parameter');

    console.log('ON PROTOSTUB: Constructor Loaded');

    let _this = this;

    this._subscribedList = [];
    this._usersList = [];
    this._groupsList = [];
    this._channelsList = [];
    this._imsList = [];
    this._observer;
    this._channelID = '';
    this._id = 0;
    this._continuousOpen = true;
    this._token = '';

    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._bus = bus;
    this._config = config;

    this._runtimeSessionURL = config.runtimeURL;
    this._reOpen = false;
    this._slack = slack;
    console.log('ON PROTOSTUB -  instatiate syncher with url', runtimeProtoStubURL);
    this._syncher = new Syncher(runtimeProtoStubURL, bus, config);

    this._syncher.onNotification((event) => {
      console.log('ON PROTOSTUB - On Syncher Notification: ', event);
    });

    bus.addListener('*', (msg) => {
      console.log('ON PROTOSTUB ->', msg);
      if (msg.body.identity) {

        let token = msg.body.identity;
        _this._open(msg.body.identity, ()=> {
          if (_this._filter(msg)) {
            console.log('ON PROTOSTUB - AFTER FILTER->', msg);

            if (msg.body.value.schema && msg.body.value.name) {

              let schemaSplitted =  msg.body.value.schema.split('/');

              if (schemaSplitted[schemaSplitted.length - 1] === 'Communication') {
                _this._subscribe(msg.body.value.schema, msg.from).then((result) => {
                  console.log('ON PROTOSTUB - IS IT subscribed->', result);
                  if (result) {
                    _this._token = token;

                    let URLUsersList = 'https://slack.com/api/users.list?token=' + _this._token;
                    let URLGroupsList = 'https://slack.com/api/groups.list?token=' + _this._token;
                    let URLChannelsList = 'https://slack.com/api/channels.list?token=' + _this._token;
                    let URLImsList = 'https://slack.com/api/im.list?token=' + _this._token;

                    let UsersListPromise = _this._sendHTTPRequest('GET', URLUsersList);
                    let GroupsListPromise = _this._sendHTTPRequest('GET', URLGroupsList);
                    let ChannelsListPromise = _this._sendHTTPRequest('GET', URLChannelsList);
                    let ImsListPromise = _this._sendHTTPRequest('GET', URLImsList);

                    Promise.all([UsersListPromise, GroupsListPromise, ChannelsListPromise, ImsListPromise]).then(function(result) {
                      _this._usersList = result[0].members;
                      _this._groupsList = result[1].groups;
                      _this._channelsList = result[2].channels;
                      _this._imsList = result[3].ims;

                      let channelAlreadyUP = _this._channelsList.filter(function(value, key) { return value.name === msg.body.value.name; })[0];

                      //get userID to invite

                      let toSplitted = msg.to.split('://')[1];
                      let user = toSplitted.split('@')[0];
                      let userID = _this._usersList.filter(function(value, key) {
                        return value.name === user;
                      })[0].id;

                      // if channel exist, invite user, else channel need to be created and then invite user
                      if (channelAlreadyUP) {
                        console.log('ON PROTOSTUB - channel exist', channelAlreadyUP);

                        let channelMembers = _this._channelsList.filter(function(value, key) { return value.name === msg.body.value.name; })[0].members;
                        let alreadyOnChannel = false;

                        channelMembers.forEach(function(s) {
                          if (s === userID)
                            alreadyOnChannel = true;
                        });
                        console.log('ON PROTOSTUB - channel members', channelMembers, '   ->', alreadyOnChannel);
                        if (!alreadyOnChannel) {
                          let toInvite = { token: token, channel: channelAlreadyUP.id, user: userID };

                          _this._slack.channels.invite(toInvite, (err, data) => {
                            if (err) {
                              console.err('error', err);
                            } else {
                              _this._channelID = channelAlreadyUP.id;
                              console.log('ON PROTOSTUB - user invited with sucess', data);
                            }
                          });
                        } else {
                          _this._channelID = channelAlreadyUP.id;
                        }

                      } else {
                        let toCreate = { token: token, name: msg.body.value.name };
                        _this._slack.channels.create(toCreate, (err, data) => {
                          if (err) {
                            console.err('error', err);
                          } else {
                            if (data.ok) {
                              let channelID = data.channel.id;
                              _this._channelID = channelID;
                              let toInvite = { token: token, channel: channelID, user: userID };

                              _this._slack.channels.invite(toInvite, (err, data) => {
                                if (err) {
                                  console.err('error', err);
                                } else {
                                  console.log('ON PROTOSTUB - user invited with sucess', data);
                                }
                              });
                            }
                          }
                        });
                      }
                    }, function(error) {
                      console.err(error);
                    });
                  }
                });
              }
            }
          }
        });
      }

    });

  }

  get config() { return this._config; }

  get runtimeSession() { return this._runtimeSessionURL; }

  _filter(msg) {
    if (msg.body && msg.body.via === this._runtimeProtoStubURL)
      return false;
    return true;
  }

  _open(token, callback) {
    let _this = this;

    if (!_this._session) {
      console.log('ON PROTOSTUB - new Session for token:', token);
      _this._session = _this._slack.rtm.client();

      _this._session.listen({token});

      _this._session.message(message=> {
        console.log(`ON PROTOSTUB - new message on session`, message);
        if (message.channel) {
          if (message.channel === _this._channelID) {
            _this._observer.addChild('chatmessages', { message: message.text});
          }
        }
      });
    } else {
      console.log('ON PROTOSTUB - session already exist');
    }
    callback();
  }

  _subscribe(schema, urlDataObj) {
    let _this = this;

    return new Promise(function(resolve) {

      _this._subscribedList.forEach(function(obj) {
        if (obj.urlDataObj === urlDataObj && obj.subscribed)
          resolve(true);
      });

      let subscription = {urlDataObj: urlDataObj, schema: schema, subscribed: true};

      let objectDescURL = schema;
      let dataObjectUrl = urlDataObj.substring(0, urlDataObj.lastIndexOf('/'));

      console.log('ON PROTOSTUB - new subscription for schema:', objectDescURL, ' and dataObject:', dataObjectUrl);

      return _this._syncher.subscribe(objectDescURL, dataObjectUrl).then((observer) => {
        _this._observer = observer;
        _this._subscribedList.push(subscription);
        console.log('ON PROTOSTUB - subscribed', dataObjectUrl);

        observer.onAddChild((child) => {
          console.info('ON PROTOSTUB - Observer - Add Child: ', child);
          if (_this._channelID !== '' && child.value.message) {
            console.log('token', _this._token, 'channel', _this._channelID, 'text',  child.value.message);
            let message = { as_user: true, token: _this._token, channel: _this._channelID, text: child.value.message };

            _this._slack.chat.postMessage(message, function(err, data) {
              console.log('err', err, ' data ', data);
              if (err) throw Error(err);
            });
          }

        });

        observer.onChange('*', (event) => {
          console.log('ON PROTOSTUB - Observer - onChange: ', event);
        });
        resolve(true);

      }).catch((error) => {
        console.log('ON PROTOSTUB - Observer - ERROR', error);
        resolve(false);
      });
    });
  }

  _sendHTTPRequest(method, url) {

    return new Promise(function(resolve,reject) {
      let xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest !== 'undefined') {
        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // Otherwise, CORS is not supported by the browser.
        xhr = null;
      }
      if (xhr) {
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let info = JSON.parse(xhr.responseText);
              resolve(info);
            } else if (xhr.status === 400) {
              reject('There was an error processing the token');
            } else {
              reject('something else other than 200 was returned');
            }
          }
        };
        xhr.send();
      } else {
        reject('CORS not supported');
      }
    });
  }

}

export default function activate(url, bus, config) {
  return {
    name: 'SlackProtoStub',
    instance: new SlackProtoStub(url, bus, config)
  };
}
