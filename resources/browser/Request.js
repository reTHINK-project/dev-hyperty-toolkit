const methods = {GET: 'get', POST: 'post', DELETE: 'delete', UPDATE: 'update'};

class Request {

  constructor() {

    this._withCredentials = false;

    Object.keys(methods).forEach((method) => {

      switch (method) {

        case 'GET':
          this[methods[method]] = (url) => {
            return this._makeLocalRequest(method, url);
          };

          break;

        case 'POST':
        case 'DELETE':
        case 'UPDATE':
          this[methods[method]] = (url, options = {}) => {
            return this._makeLocalRequest(method, url, options);
          };
          break;
      }

    });

  }

  set withCredentials(value = false) {
    this._withCredentials = value;
  }

  get withCredentials() {
    return this._withCredentials;
  }

  _makeLocalRequest(method, url, options) {

    if (!options) { options = null; }

    console.log('method:', method, '| url: ', url, options ? ' | payload:' + options : '');

    return new Promise((resolve, reject) => {
      let protocolmap = {
        'hyperty-catalogue://': 'https://',
        'https://': 'https://',
        'http://': 'https://'
      };

      let foundProtocol = false;
      for (let protocol in protocolmap) {
        if (url.slice(0, protocol.length) === protocol) {
          // console.log("exchanging " + protocol + " with " + protocolmap[protocol]);
          url = protocolmap[protocol] + url.slice(protocol.length, url.length);
          foundProtocol = true;
          break;
        }
      }

      if (!foundProtocol) {
        reject('Invalid protocol of url: ' + url);
        return;
      }

      let xhr;
      if (!this.xhr) {
        xhr = new XMLHttpRequest();
        xhr.withCredentials = this._withCredentials;
        this.xhr = xhr;
      } else {
        xhr = this.xhr;
      }

      xhr.addEventListener('readystatechange', function(event) {
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
      });

      xhr.open(method, url);

      if (method === 'POST') {
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.setRequestHeader('cache-control', 'no-cache');
        xhr.send(JSON.stringify(options));
      } else {
        xhr.send();
      }

    });

  }

}

export default Request;
