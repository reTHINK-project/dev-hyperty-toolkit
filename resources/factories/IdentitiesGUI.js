// jshint browser:true, jquery: true

class IdentitiesGUI {

  constructor(guiURL, idmURL, messageBus) {
    //if (!identityModule) throw Error('Identity Module not set!');
    if (!messageBus) throw Error('Message Bus not set!');
    let _this = this;
    _this._guiURL = guiURL;
    _this._idmURL = idmURL;
    _this._messageBus = messageBus;


    _this._messageBus.addListener(guiURL, msg => {
      let funcName = msg.body.method;

      if (funcName === 'openPopup') {
        let urlreceived = msg.body.params.urlreceived;
        _this._openPopup(urlreceived).then((returnedValue) => {
          let value = {type: 'execute', value: returnedValue, code: 200};
          let replyMsg = {id: msg.id, type: 'response', to: msg.from, from: msg.to, body: value};
          _this._messageBus.postMessage(replyMsg);
        });
        return;
      }
    });
  }

  _openPopup(urlreceived) {

    return new Promise((resolve, reject) => {

      let win = window.open(urlreceived, 'openIDrequest', 'width=800, height=600');
      if (window.cordova) {
        win.addEventListener('loadstart', function(e) {
          let url = e.url;
          let code = /\&code=(.+)$/.exec(url);
          let error = /\&error=(.+)$/.exec(url);

          if (code || error) {
            win.close();
            return resolve(url);
          } else {
            return reject('openPopup error 1 - should not happen');
          }
        });
      } else {
        let pollTimer = setInterval(function() {
          try {
            if (win.closed) {
              return reject('Some error occured when trying to get identity.');
              clearInterval(pollTimer);
            }

            if (win.document.URL.indexOf('id_token') !== -1 || win.document.URL.indexOf(location.origin) !== -1) {
              window.clearInterval(pollTimer);
              let url =   win.document.URL;

              win.close();
              return resolve(url);
            }
          } catch (e) {
            //return reject('openPopup error 2 - should not happen');
            //console.log(e);
          }
        }, 500);
      }
    });
  }

}

export default IdentitiesGUI;
