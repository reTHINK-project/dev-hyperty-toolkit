const methods = {GET: 'get', POST: 'post', DELETE: 'delete', UPDATE: 'update'};

class Request {

  constructor() {
    console.log('Browser Request');

    let _this = this;

    Object.keys(methods).forEach(function(method) {

      _this[methods[method]] = function(url) {

        return new Promise(function(resolve, reject) {

          _this._makeLocalRequest(methods[method], url).then(function(result) {
            resolve(result);
          }).catch(function(reason) {
            reject(reason);
          });

        });

      };
    });

  }

  _makeLocalRequest(method, url) {

    console.log(method, url);

    return new Promise(function(resolve, reject) {
      // TODO: Check why the url have localhost and undefined like a protocol
      // check the RuntimeUA
      let protocolmap = {
        'hyperty-catalogue://': 'https://',
        'https://': 'https://',
        'http://': 'http://'
      };

      let usedProtocol;

      let foundProtocol = false;
      for (let protocol in protocolmap) {
        if (url.slice(0, protocol.length) === protocol) {
          // console.log("exchanging " + protocol + " with " + protocolmap[protocol]);
          url = protocolmap[protocol] + url.slice(protocol.length, url.length);
          usedProtocol = protocolmap[protocol];
          foundProtocol = true;
          break;
        }
      }

      if (!foundProtocol) {
        reject('Invalid protocol of url: ' + url);
        return;
      }

      let xhr = new XMLHttpRequest();

      // console.log(url);

      xhr.open('GET', url, true);

      xhr.onreadystatechange = function(event) {
        let xhr = event.currentTarget;
        if (xhr.readyState === 4) {
          // console.log("got response:", xhr);
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            // console.log("rejecting promise because of response code: 200 != ", xhr.status);
            reject(xhr.responseText);
          }
        }
      };

      xhr.send();

    });

  }

}

export default Request;
