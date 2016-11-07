import slack from 'slack';

class SlackProtoStub {

  constructor(runtimeProtoStubURL, bus, config) {
    if (!runtimeProtoStubURL) throw new Error('The runtimeProtoStubURL is a needed parameter');
    if (!bus) throw new Error('The bus is a needed parameter');
    if (!config) throw new Error('The config is a needed parameter');

    let _this = this;

    this._id = 0;
    this._continuousOpen = true;

    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._bus = bus;
    this._config = config;

    this._runtimeSessionURL = config.runtimeURL;
    this._reOpen = false;
    this._slack = slack;

    this.connect();

    this._slackSession.message(message => {
      this._deliver(message);
    });

    bus.addListener('*', (msg) => {
      console.log('new msg', msg);
      if (_this._filter(msg)) {

        let message = {
          as_user: true,
          token: token,
          channel: 'D0BFVEZNU',
          text: JSON.stringify(msg.body.value)
        };

        _this._slack.chat.postMessage(message, function(err, data) {
          console.log('err', err, ' data ', data);});
          if (err) throw Error(err);
        }
    });

  }

  get config() { return this._config; }

  get runtimeSession() { return this._runtimeSessionURL; }

  connect() {

    this._slackSession = slack.rtm.client();
    let token = 'xoxp-11533603872-11537760645-92180697376-2965064fb34f76d8bea678e7710370c5';

    return new Promise((resolve, reject) => {

      this._slack.oauth.access({
        client_id: '11533603872.72434934356',
        client_secret: 'd427ef3c957d68a292dc7c4e20b78330',
        code: '11533603872.72536123910.d0e0667753'
      }, (err, data) => {
        console.log('data  ', err, data);

        let myTest = {as_user: true, token: token, channel: 'D0BFVEZNU',text: 'ping'};
        this._slack.chat.postMessage(myTest, function(err, data) {
            console.log('err', err, ' data ', data);});
      });

      this._slackSession.listen(token);

    })

  }

  disconnect() {
    let _this = this;

    _this._continuousOpen = false;
    if (_this._sock) {
      _this._sendClose();
    }
  }

  _sendOpen(callback) {

  }

  _sendClose() {

  }

  _sendStatus(value, reason) {

  }

  _waitReady(callback) {

  }

  _filter(msg) {
    if (msg.body && msg.body.via === this._runtimeProtoStubURL)
      return false;
    return true;
  }

  _deliver(msg) {
    if (!msg.body) msg.body = {};

    msg.body.via = this._runtimeProtoStubURL;
    console.log('msg', msg);
    // this._bus.postMessage(msg);

  }

  _open(callback) {
    let _this = this;

    if (!this._continuousOpen) {
      //TODO: send status (sent message error - disconnected)
      return;
    }
  }

}

export default function activate(url, bus, config) {
  return {
    name: 'SlackProtoStub',
    instance: new SlackProtoStub(url, bus, config)
  };
}
