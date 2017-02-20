
let slackInfo = {
  clientID: '11533603872.72434934356',
  clientSecret: 'd427ef3c957d68a292dc7c4e20b78330',
  redirectURI: location.origin,
  codeEndpoint: 'https://slack.com/oauth/authorize?',
  tokenEndpoint: 'https://slack.com/api/oauth.access?',
  infoEndpoint: 'https://slack.com/api/users.info?',
  scope: 'client'
};

//function to parse the query string in the given URL to obatin certain values
function urlParser(url, name) {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  let regexS = '[\\#&?]' + name + '=([^&#]*)';
  let regex = new RegExp(regexS);
  let results = regex.exec(url);
  if (results === null)
  return '';
  else
  return results[1];
}

function sendHTTPRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return new Promise(function(resolve,reject) {
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

/**
* Function to exchange the code received to the id Token, access token and a refresh token
*
*/
let exchangeCode = (function(code) {

  let s = slackInfo;
  let URL = s.tokenEndpoint + 'client_id=' + s.clientID + '&client_secret=' + s.clientSecret + '&code=' + code + '&redirect_uri=' +  s.redirectURI;

  console.log('URL', URL);

  return new Promise(function(resolve, reject) {
    sendHTTPRequest('GET', URL).then(function(info) {
      resolve(info);
    }, function(error) {
      reject(error);
    });

  });
});

/**
* Identity Provider Proxy
*/
let idp = {

  /**
  * Function to validate an identity Assertion received
  * TODO add details of the implementation, and improve the implementation
  *
  * @param  {assertion}    Identity Assertion to be validated
  * @param  {origin}       Origin parameter that identifies the origin of the RTCPeerConnection
  * @return {Promise}      Returns a promise with the identity assertion validation result
  */
  validateAssertion: (assertion, origin) => {
    return new Promise(function(resolve,reject) {

      console.log('assertion - >', assertion);
      console.log('origin - >', origin);
      console.log('MYPROXY - VALIDATING');
      resolve({identity: 'identity@idp.com', contents: 'content'});

    });
  },

  /**
  * Function to generate an identity Assertion
  * TODO add details of the implementation, and improve implementation
  *
  * @param  {contents} The contents includes information about the identity received
  * @param  {origin} Origin parameter that identifies the origin of the RTCPeerConnection
  * @param  {usernameHint} optional usernameHint parameter
  * @return {Promise} returns a promise with an identity assertion
  */
  generateAssertion: (contents, origin, hint) => {

    console.log('contents->', contents);
    console.log('origin->', origin);
    console.log('hint->', hint);

    return new Promise(function(resolve, reject) {

      //the hint field contains the information obtained after the user authentication
      // if the hint content is not present, then rejects the value with the URL to open the page to authenticate the user
      let s = slackInfo;
      if (!hint) {
        //let requestUrl = https://slack.com/oauth/authorize?client_id=11533603872.72434934356&scope=chat:write:user&redirect_uri=https://www.getpostman.com/oauth2/callback;

        let requestUrl = s.codeEndpoint + 'client_id=' + s.clientID + '&scope=' + s.scope + '&redirect_uri=' +  s.redirectURI;

        console.log('first url ', requestUrl, 'done');
        reject({name: 'IdPLoginError', loginUrl: requestUrl});

      } else {
        let code = urlParser(hint, 'code');
        console.log('code', code);
        exchangeCode(code).then(function(value) {

          console.log('value AFTER exchangeCode', value);

          let infoUrl = s.infoEndpoint + 'token=' + value.access_token + '&user=' + value.user_id;

          sendHTTPRequest('GET', infoUrl).then(function(info) {
            console.log('info->', info);

            let profile = info.user.profile;
            let infoToken = {picture: profile.image_original, email: profile.email, family_name: profile.last_name, given_name: profile.first_name, id: info.user.id };

            let assertion = btoa(JSON.stringify({tokenID: value.access_token, email: profile.email, id: info.user.id}));

            let toResolve = {assertion: assertion, idp: {domain: 'slack.com', protocol: 'OAuth 2.0'}, infoToken: infoToken, interworking: {access_token: value.access_token, domain: 'slack.com' }};
            console.log('RESOLVING THIS OBJECT', toResolve);
            resolve(toResolve);
          }, function(error) {
            console.log('error->', error);
          });

        });

      }
    });
  }
};

/**
* Identity Provider Proxy Protocol Stub
*/
class SlackProxyStub {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the received idpProxy
  *
  * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
  * @param  {Message.Message}                           busPostMessage     configuration
  * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
  */
  constructor(runtimeProtoStubURL, bus, config) {
    let _this = this;
    _this.runtimeProtoStubURL = runtimeProtoStubURL;
    _this.messageBus = bus;
    _this.config = config;

    _this.messageBus.addListener('*', function(msg) {
      //TODO add the respective listener
      if (msg.to === 'domain-idp://slack.com') {
        _this.requestToIdp(msg);
      }
    });
  }

  /**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */
  requestToIdp(msg) {
    let _this = this;
    let params = msg.body.params;

    switch (msg.body.method) {
      case 'generateAssertion':
        idp.generateAssertion(params.contents, params.origin, params.usernameHint).then(
          function(value) { _this.replyMessage(msg, value);},

          function(error) { _this.replyMessage(msg, error);}
        );
        break;
      case 'validateAssertion':
        idp.validateAssertion(params.assertion, params.origin).then(
          function(value) { _this.replyMessage(msg, value);},

          function(error) { _this.replyMessage(msg, error);}
        );
        break;
      default:
        break;
    }
  }

  /**
  * This function receives a message and a value. It replies the value to the sender of the message received
  *
  * @param  {message}   message received
  * @param  {value}     value to include in the new message to send
  */
  replyMessage(msg, value) {
    let _this = this;

    let message = {id: msg.id, type: 'response', to: msg.from, from: msg.to, body: {code: 200, value: value}};

    _this.messageBus.postMessage(message);
  }
}

/**
 * To activate this protocol stub, using the same method for all protostub.
 * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
 * @param  {Message.Message}                           busPostMessage     configuration
 * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
 * @return {Object} Object with name and instance of ProtoStub
 */
export default function activate(url, bus, config) {
  return {
    name: 'SlackProxyStub',
    instance: new SlackProxyStub(url, bus, config)
  };
}
