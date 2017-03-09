import slack from 'slack';
import {Syncher} from 'service-framework/dist/Syncher';
import {MessageBodyIdentity} from 'service-framework/dist/IdentityFactory';

class SlackProtoStub {

  constructor(runtimeProtoStubURL, bus, config) {
    if (!runtimeProtoStubURL) throw new Error('The runtimeProtoStubURL is a needed parameter');
    if (!bus) throw new Error('The bus is a needed parameter');
    if (!config) throw new Error('The config is a needed parameter');

    console.log('[SlackProtostub] Constructor Loaded');

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
    console.log('[SlackProtostub] instatiate syncher with runtimeUrl', runtimeProtoStubURL);
    this._syncher = new Syncher(runtimeProtoStubURL, bus, config);

    this._syncher.onNotification((event) => {
      console.log('[SlackProtostub] On Syncher Notification', event);
    });

    bus.addListener('*', (msg) => {
      console.log('[SlackProtostub] new msg', msg);
      if (msg.body.hasOwnProperty('identity') && msg.body.identity.hasOwnProperty('access_token') && msg.body.identity.access_token) {

        let token = msg.body.identity.access_token;
        this._token = token;

        _this._open(token, ()=> {
          if (_this._filter(msg)) {

            console.log('[SlackProtostub] After Filter', msg);
            let schemaUrl = msg.body.schema;
            if (schemaUrl && msg.body.value.name) {

              let schemaSplitted =  schemaUrl.split('/');

              if (schemaSplitted[schemaSplitted.length - 1] === 'Communication') {

                _this._getSlackInformation(msg.to).then((userInfo) => {

                  console.log('Slack User information: ', userInfo);

                  // username, userURL, avatar, cn, locale, idp, assertion
                  let identity = new MessageBodyIdentity(
                    userInfo.name,
                    'slack://slack.com/' + userInfo.name + '@slack.com',
                    userInfo.profile.image_192,
                    userInfo.name,
                    '', 'slack.com');

                  _this._subscribe(schemaUrl, msg.from, identity).then((result) => {
                    console.log('[SlackProtostub] subscribe result', result);
                    if (result) {

                      _this._token = token;

                      if (msg.body.identity.userProfile.id) {
                        _this._id = msg.body.identity.userProfile.id;
                      }

                      _this._createChannel(msg, userInfo.id);
                    }
                  });
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

  _getSlackInformation(to) {
    let _this = this;

    return new Promise((resolve, reject) => {

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

        //get userID to invite
        let toSplitted = to.split('://')[1];
        let user = toSplitted.split('@')[0];
        let userInfo = _this._usersList.filter(function(value) {
          return value.name === user;
        })[0];

        resolve(userInfo);

      }, function(error) {
        console.err('[SlackProtostub] ', error);
        reject(error);
      });

    });

  }

  _createChannel(msg, userID) {
    let _this = this;
    let channelExists = _this._channelsList.filter(function(value) { return value.name === msg.body.value.name; })[0];

    // if channel exist, invite user, else channel need to be created and then invite user
    if (channelExists) {
      console.log('[SlackProtostub] channel exist', channelExists);

      let channelMembers = _this._channelsList.filter(function(value) { return value.name === msg.body.value.name; })[0].members;
      let alreadyOnChannel = false;

      channelMembers.forEach(function(s) {
        if (s === userID) {
          alreadyOnChannel = true;
        }
      });
      console.log('[SlackProtostub] channel members', channelMembers, '   ->', alreadyOnChannel);

      // if user isnt on Channel invite, else just set channelID
      if (!alreadyOnChannel) {
        _this._invite(userID, channelExists.id);
      } else {
        _this._channelID = channelExists.id;
      }

    } else {
      _this._create(msg.body.value.name, userID).then(function(result) {
        if (result) {
          _this._invite(userID);
        }
      });
    }
  }

  _filter(msg) {
    if (msg.body && msg.body.via === this._runtimeProtoStubURL) {
      return false;
    }

    return true;
  }

  _open(token, callback) {
    let _this = this;

    if (!_this._session) {
      console.log('[SlackProtostub] new Session for token:', token);
      _this._session = _this._slack.rtm.client();

      _this._session.listen({token});

      _this._session.message(message=> {
        console.log('[SlackProtostub] new message on session', message);
        if (message.channel) {
          if (message.channel === _this._channelID && message.user !== _this._id || (!message.hasOwnProperty('bot_id') && message.user === _this._id && message.channel === _this._channelID)) {

            _this._getUserInfo(message.user).then((identity) => {
              _this._observer.addChild('chatmessages', { message: message.text}, identity);
            });
          }
        }
      });
    } else {
      console.log('[SlackProtostub] session already exist');
    }
    callback();
  }

/*****************************************************************************************************
* It retrieves information from a slack user and creates a reTHINK Identity object with it
* @param {string} user - slack user id
* @return {Promise<Object>} Returns a promise with an Identity object resolved
*******************************************************************************************************/

  _getUserInfo(user) {
    let _this = this;

    return new Promise(function(resolve) {
      _this._slack.users.info({token: _this._token, user: user}, (err, data) => {
        if (err) {
          console.err('[SlackProtostub] error', err);
        } else {

          console.log('[SlackProtostub getUserInfo] ', data);
          let identity = new MessageBodyIdentity(
                    data.user.name,
                    'slack://slack.com/' + data.user.name + '@slack.com',
                    data.user.profile.image_192,
                    data.user.name,
                    '', 'slack.com');

          resolve(identity);
        }
      });
    });

  }

  _subscribe(schema, urlDataObj, identity) {
    let _this = this;

    return new Promise(function(resolve) {

      _this._subscribedList.forEach(function(obj) {
        if (obj.urlDataObj === urlDataObj && obj.subscribed) {
          resolve(true);
        }
      });

      let subscription = {urlDataObj: urlDataObj, schema: schema, subscribed: true};

      let objectDescURL = schema;
      let dataObjectUrl = urlDataObj.substring(0, urlDataObj.lastIndexOf('/'));

      console.log('[SlackProtostub] new subscription for schema:', objectDescURL, ' and dataObject:', dataObjectUrl);

      return _this._syncher.subscribe(objectDescURL, dataObjectUrl, false, false, false, identity).then((observer) => {
        _this._observer = observer;
        _this._subscribedList.push(subscription);
        console.log('[SlackProtostub] subscribed', dataObjectUrl);
        console.log('[SlackProtostub] Observer', observer);
        observer.onAddChild((child) => {
          console.info('[SlackProtostub] Observer - Add Child: ', child);
          _this._deliver(child);
        });

        observer.onChange('*', (event) => {
          console.log('[SlackProtostub] Observer - onChange: ', event);
        });
        resolve(true);

      }).catch((error) => {
        console.err('[SlackProtostub] Subscribe', error);
        resolve(false);
      });
    });
  }

  _invite(idUser, idChannel) {
    let _this = this;

    if (!idChannel) {
      idChannel = _this._channelID;
    }

    let toInvite = { token: _this._token, channel: idChannel, user: idUser };

    _this._slack.channels.invite(toInvite, (err, data) => {
      if (err) {
        console.err('[SlackProtostub] error', err);
      } else {
        _this._channelID = idChannel;
        console.log('[SlackProtostub] user invited with sucess', data);
      }
    });
  }

  _deliver(child) {
    let _this = this;

    if (_this._channelID !== '' && child.value.message) {

      if (child.hasOwnProperty('identity') && child.identity.hasOwnProperty('userProfile')
      && child.identity.userProfile.hasOwnProperty('username') && child.identity.userProfile.username) {

        let text = '' + child.identity.userProfile.username + ': ' + child.value.message;
        let message = { as_user: true, token: _this._token, channel: _this._channelID, text: text};
        console.log('[SlackProtostub] (PostMessage slack api) token(', _this._token, ')  channel(', _this._channelID, ') text(',  child.value.message, ')');

        _this._slack.chat.postMessage(message, function(err, data) {
          if (err) {
            console.err('[SlackProtostub] error', err);
          } else {
            console.log('[SlackProtostub] PostMessage with Sucess', data);
          }
        });
      }
    }
  }

  _create(channelName) {
    let _this = this;

    return new Promise(function(resolve) {
      let toCreate = { token: _this._token, name: channelName };
      _this._slack.channels.create(toCreate, (err, data) => {
        if (err) {
          console.err('[SlackProtostub] ', err);
        } else {
          if (data.ok) {
            console.log('[SlackProtostub] Channel Created with Sucess ', data);
            _this._channelID = data.channel.id;
            resolve(true);
          }
        }
      });
    });
  }

  _sendHTTPRequest(method, url) {
    return new Promise(function(resolve, reject) {
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
        xhr.onreadystatechange = function() {
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
