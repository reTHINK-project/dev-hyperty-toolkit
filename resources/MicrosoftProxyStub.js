let identities = {};
let nIdentity = 0;

let microsoftInfo = {
  clientID:              '7e2f3589-4b38-4b1c-a321-c9251de00ef2',
  redirectURI:           location.origin,
  tokenEndpoint:         'https://login.windows.net/common/oauth2/authorize?',
  type:                  'id_token',
  scope:                 'openid',
  nonce:                 '7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7', //TODO change to a random number
  mode:                  'fragment'
};

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

      let idToken = JSON.parse(atob(assertion));

      resolve({identity: idToken.email, contents: idToken});

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

    //start the login phase
    //TODO later should be defined a better approach
    return new Promise(function(resolve, reject) {
      if (!contents) {
        let m = microsoftInfo;

        //let requestUrl = 'https://login.windows.net/common/oauth2/authorize?response_type=id_token&client_id=7e2f3589-4b38-4b1c-a321-c9251de00ef2&scope=openid&nonce=7362CAEA-9CA5-4B43-9BA3-34D7C303EBA7&response_mode=fragment&redirect_uri=' + location.origin;

        let requestUrl = m.tokenEndpoint + 'response_type=' + m.type + '&client_id=' + m.clientID + '&scope=' + m.scope + '&nonce=' +  m.nonce + '&response_mode=' + m.mode + '&redirect_uri=' +  m.redirectURI;

        reject({name: 'IdPLoginError', loginUrl: requestUrl});

      } else {

        //later verify the token and use the information from the JWT
        let contentSplited = contents.split('.');

        let idToken = JSON.parse(atob(contentSplited[1]));

        let idpBundle = {domain: 'google.com', protocol: 'OIDC'};
        let identityBundle = {assertion: contentSplited[1], idp: idpBundle, infoToken: idToken};

        resolve(identityBundle);

      }
    });
  }
};

/**
* Identity Provider Proxy Protocol Stub
*/
class MicrosoftProxyStub {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the idpProxy received
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
     if (msg.to === 'domain-idp://microsoft.com') {

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

    let message = {id: msg.id, type: 'response', to: msg.from, from: msg.to,
                   body: {code: 200, value: value}};

    _this.messageBus.postMessage(message);
  }
}

// export default IdpProxyProtoStub;

/**
 * To activate this protocol stub, using the same method for all protostub.
 * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
 * @param  {Message.Message}                           busPostMessage     configuration
 * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
 * @return {Object} Object with name and instance of ProtoStub
 */
export default function activate(url, bus, config) {
  return {
    name: 'MicrosoftProxyStub',
    instance: new MicrosoftProxyStub(url, bus, config)
  };
}
