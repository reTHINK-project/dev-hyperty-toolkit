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

    console.log('method:', method, '| url: ', url, options ? ' | payload:' + JSON.stringify(options) : '');

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


      let xhr = new XMLHttpRequest();
      if (this._withCredentials) {
        xhr.withCredentials = this._withCredentials;
      }

      this.xhr = xhr;

      xhr.addEventListener('readystatechange', function(event) {
        let xhr = event.currentTarget;
        if (xhr.readyState === 4) {
          // console.log("got response:", xhr);
          if (xhr.status >= 200 || xhr.status <= 299) {
            resolve(xhr.responseText);
          } else {
            console.log('rejecting promise because of response code: 200 != ', xhr.status, xhr.responseText);
            reject(xhr.responseText);
          }
        }
      });

      xhr.open(method, url);

      if (method === 'POST') {
        /*
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.setRequestHeader('cache-control', 'no-cache');
        */
        xhr.send(options.body);
      } else {
        xhr.send();
      }

    });

  }

}

export default Request;
