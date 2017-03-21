// jshint browser:true, jquery: true

class IdentitiesGUI {

  constructor(identityModule) {
    if (!identityModule) throw Error('Identity Module not set!');
    let _this = this;
    let guiURL = identityModule._runtimeURL + '/identity-gui';
    _this._guiURL = guiURL;
    _this.identityModule = identityModule;
    _this._messageBus = identityModule.messageBus;
    _this.identityModule.deployGUI();

    _this.resultURL  = undefined;

    _this._messageBus.addListener(guiURL, msg => {
      let value;

      _this.showIdentitiesGUI(msg.body.value).then((identityInfo) => {
        let replyMsg;

        switch (identityInfo.type) {
          case 'idp':
            value = {type: 'idp', value: identityInfo.value, code: 200};
            replyMsg = {id: msg.id, type: 'response', to: msg.from, from: msg.to, body: value};
            _this._messageBus.postMessage(replyMsg);
            break;

          case 'identity':
            value = {type: 'identity', value: identityInfo.value, code: 200};
            replyMsg = {id: msg.id, type: 'response', to: msg.from, from: msg.to, body: value};
            _this._messageBus.postMessage(replyMsg);
            break;

          default:
            value = {type: 'error', value: 'Error on identity GUI', code: 400};
            replyMsg = {id: msg.id, type: 'response', to: msg.from, from: msg.to, body: value};
            _this._messageBus.postMessage(replyMsg);
        }
      });
    });
  }

  showIdentitiesGUI(receivedInfo) {
    let _this = this;

    return new Promise((resolve, reject) => {

      let identityInfo = _this.identityModule.getIdentitiesToChoose();

      console.log('identities: ', identityInfo);

      _this.showMyIdentities(identityInfo.identities).then((identity) => {
        console.log('chosen identity: ', identity);
        resolve({type: 'identity', value: identity});
      });

      let callback = (value) => {
        console.log('chosen identity: ', value);
        resolve({type: 'identity', value: value});
      };

      let idps = identityInfo.idps;

      _this.obtainNewIdentity(idps[0].domain, callback);

    });

  }

  showMyIdentities(emails) {
    let _this = this;

    return new Promise((resolve, reject) => {

      // let identities = _this.identityModule.getIdentities();
      let identities = [];

      for (let i in emails) {
        let domain = emails[i].split('@');
        identities.push({email: emails[i], domain: domain[1]});
      }

      console.log(identities);

      // resolve(identity);

    });
  }

  createTable() {
    let table = document.createElement('table');
    table.className = 'centered';
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let thEmail = document.createElement('th');
    thEmail.textContent = 'Email';
    tr.appendChild(thEmail);
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }

  createTableRow(identity, toRemoveID) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.textContent = identity.email;
    td.className = 'clickable-cell';
    td.style = 'cursor: pointer';
    tr.appendChild(td);

    td = document.createElement('td');

    if (toRemoveID) {
      let btn = document.createElement('button');
      btn.textContent = 'Remove';
      btn.className = 'remove-id waves-effect waves-light btn';
      td.appendChild(btn);
    }
    tr.appendChild(td);

    return tr;
  }

  changeID(event, callback) {
    let idToUse = event.target.innerText;

    //TODO improve later.
    //prevents when the users selects an hyperty, exit the identity page and goes again to the identity page, from selecting "settings" button as identity.
    if (idToUse !== 'settings') {

      callback(idToUse);
      return idToUse;
    }
  }

  removeID(event, emails) {
    let _this = this;
    let row = event.target.parentNode.parentNode;
    let idToRemove = row.children[0].textContent;
    let domain = row.children[1].textContent;
    _this.identityModule.unregisterIdentity(idToRemove);

    let numEmails = emails.length;
    for (let i = 0; i < numEmails; i++) {
      if (emails[i].email === idToRemove) {
        emails.splice(i, 1);
        break;
      }
    }

    // -------------------------------------------------------------------------//
    _this.showMyIdentities(emails, true);

  }

  obtainNewIdentity(idp, callback) {
    let _this = this;
    let idProvider = idp;
    let idProvider2 = event.target.text;

    _this.identityModule.crypto.generateRSAKeyPair().then(function(keyPair) {

      let publicKey = btoa(keyPair.public);

      _this.identityModule.sendGenerateMessage(publicKey, 'origin', undefined, idProvider).then((value) => {
        console.log('receivedURL: ' + value.loginUrl.substring(0, 20) + '...');

        let url = value.loginUrl;
        let finalURL;

        //check if the receivedURL contains the redirect field and replace it
        if (url.indexOf('redirect_uri') !== -1) {
          let firstPart = url.substring(0, url.indexOf('redirect_uri'));
          let secondAuxPart = url.substring(url.indexOf('redirect_uri'), url.length);

          let secondPart = secondAuxPart.substring(secondAuxPart.indexOf('&'), url.length);

          //check if the reddirect field is the last field of the URL
          if (secondPart.indexOf('&') !== -1) {
            finalURL = firstPart + 'redirect_uri=' + location.origin + secondPart;
          } else {
            finalURL = firstPart + 'redirect_uri=' + location.origin;
          }
        }
        _this.resultURL = finalURL || url;

        _this._authenticateUser(keyPair, publicKey, value, 'origin', idProvider).then((email) => {
          callback(email);
        });
      });
    });

  }

  _getList(items) {
    let list = '';
    let numItems = items.length;

    for (let i = 0; i < numItems; i++) {
      list += '<li class="divider"></li>';
      list += '<li><a class="center-align">' + items[i] + '</a></li>';
    }

    return list;
  }

  _authenticateUser(keyPair, publicKey, value, origin, idProvider) {
    let _this = this;
    let url = _this.resultURL;

    return new Promise((resolve, reject) => {

      _this._openPopup(url).then((identity) => {

        _this.identityModule.sendGenerateMessage(publicKey, origin, identity, idProvider).then((result) => {

          if (result) {

            _this.identityModule.storeIdentity(result, keyPair).then((value) => {
              resolve(value.userProfile.username);
            }, (err) => {
              reject(err);
            });

          } else {
            reject('error on obtaining identity information');
          }

        });

      }, (err) => {
        reject(err);
      });

    });
  }

  _resetIdentities() {
    console.log('_resetIdentities');
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
            resolve(url);
          }
        });
      } else {
        let pollTimer = setInterval(function() {
          try {
            if (win.closed) {
              reject('Some error occured when trying to get identity.');
              clearInterval(pollTimer);
            }

            if (win.document.URL.indexOf('id_token') !== -1 || win.document.URL.indexOf(location.origin) !== -1) {
              window.clearInterval(pollTimer);
              let url =   win.document.URL;

              win.close();
              resolve(url);
            }
          } catch (e) {
            //console.log(e);
          }
        }, 500);
      }
    });
  }

}

export default IdentitiesGUI;
