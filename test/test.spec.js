import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';

import configs from '../config.json';

let expect = chai.expect;

chai.use(chaiAsPromised);

import rethink from '../resources/factories/rethink';

describe('Install Runtime', function() {

  let config = configs;
  let runtimeLoader;
  let msgNodeAddress;
  let runtimeHyperty;
  let identity;

  before(function(done) {

    this.timeout(100000);

    console.log(config);

    rethink.install(config).then(function(result) {
      runtimeLoader = result;

      sinon.stub(window.runtime.identityModule, 'getIdentityAssertion', function() {
        return new Promise((resolve) => {
          let identityBundle = {
            assertion: 'assertion',
            idp:'karma.com',
            userProfile: {
              avatar: 'https://lh3.googleusercontent.com/-WaCrjVMMV-Q/AAAAAAAAAAI/AAAAAAAAAAs/8OlVqCpSB9c/photo.jpg',
              cn: 'test karma',
              username: 'karma-test@karma.com',
              userURL: 'user://karma.com/karma-test'
            }};
          identity = identityBundle;
          window.runtime.identityModule.currentIdentity = identityBundle;
          window.runtime.identityModule.identities.push(identityBundle);
          resolve(identityBundle);
        });

      });

      done();

    }).catch((error) => {
      console.log('Error: ', error);
      done();
    });

  });

  after(function() {
    window.runtime.identityModule.getIdentityAssertion.restore();
  });

  it('should load an stub', (done) => {

    let stub = config.domain;

    expect(runtimeLoader.requireProtostub(stub).then((result) => {
      msgNodeAddress = result.url;
    }))
    .to.be.fulfilled
    .and.notify(done);

  });

  it('should load multiple times the same protostub', (done) => {

    for (let i = 0; i < 2; i++) {
      let stub = 'https://catalogue.' + config.domain + '/.well-known/protocolstub/default';
      expect(runtimeLoader.requireProtostub(stub))
      .to.be.fulfilled
      .and.notify(done);
    }

  });

  it('should load diferent protostub', (done) => {

    let stubList = [
      'https://catalogue.rethink.tlabscloud.com/.well-known/protocolstub/default',
      'https://catalogue.rethink.quobis.com/.well-known/protocolstub/default'
    ];

    stubList.forEach((stub) => {
      expect(runtimeLoader.requireProtostub(stub))
      .to.be.fulfilled
      .and.notify(done);
    });

  });

  it('should load hyperty', function(done) {

    this.timeout(100000);

    let hyperty = 'https://catalogue.' + config.domain + '/.well-known/hyperty/Connector';

    expect(runtimeLoader.requireHyperty(hyperty).then((result) => {
      console.log('HYPERTY: ', result);
      runtimeHyperty = result;
    }).catch((error) => {
      console.log('Error:', error);
    }))
    .to.be.fulfilled
    .and.notify(done);

  });

  it('should load multiple hyperties', function(done) {
    this.timeout(100000);

    let hyperties = [
      'https://catalogue.' + config.domain + '/.well-known/hyperty/GroupChatManager',
      'https://catalogue.' + config.domain + '/.well-known/hyperty/Connector'
    ];

    hyperties.forEach((hyperty) => {
      expect(runtimeLoader.requireHyperty(hyperty))
      .to.be.fulfilled
      .and.notify(done);
    });

  });

  it('should send multiple read messages', function(done) {

    let seq = 0;
    let time = 500;
    let limit = 10;

    this.timeout(1000 * (limit + 2));

    // expect(runtimeHyperty.instance.discovery.discoverHyperty('vitorsilva@boldint.com', ['connection'], ['audio', 'video']))
    // .to.be.fulfilled.and.notify(done);
    let msgTo = 'domain://registry.' + config.domain + '/';
    let msgFrom = runtimeHyperty.runtimeHypertyURL;
    let numOfMsgsSend = [];
    let numOfMsgsReply = [];

    let msg = {
      type: 'read',
      from: msgFrom,
      to: msgTo,
      body: {
        resource: 'user://karma.com/karma-test',
        auth: false,
        criteria: {
          dataSchemes: ['connection'],
          resources: ['audio', 'video']
        },
        identity: identity
      }
    };

    let b = setInterval(function() {

      if (seq < limit) {
        msg.id = seq + 1;
        console.info('[MSG READ] Post Message: ', msg);
        numOfMsgsSend.push(msg);
        window.runtime.messageBus.postMessage(msg, function(reply) {
          numOfMsgsReply.push(reply);
          setTimeout(function() {
            console.info('[MSG READ] Reply Message: ', reply);
            expect(reply.from).to.eq(msgTo);
            expect(reply.to).to.eq(msgFrom);
            expect(reply.type).to.eq('response');
            expect(reply.body.code).to.eq(200);
          });
        });
      } else {
        clearInterval(b);
        expect(numOfMsgsReply).to.have.lengthOf(numOfMsgsSend.length);
        done();
      }

      seq++;
    }, time);

  });

  it('should send and recive allocate messages', function(done) {

    let time = 1000;
    let limit = 2;
    let seq = 0;
    let numOfMsgsSend = [];
    let numOfMsgsReply = [];

    this.timeout(1000 * (limit + 2));

    let msgTo = 'domain://msg-node.' + config.domain + '/hyperty-address-allocation';
    let msgFrom = window.runtime.registry.registryURL;

    let msg = {
      type: 'create',
      from: msgFrom,
      to: msgTo,
      body: {
        value: {
          number: 1
        }
      }
    };

    let b = setInterval(function() {

      if (seq < limit) {
        msg.id = seq + 1;
        console.info('[MSG CREATE] Post Message: ', msg, seq);
        numOfMsgsSend.push(msg);
        window.runtime.messageBus.postMessage(msg, function(reply) {
          numOfMsgsReply.push(reply);
          setTimeout(function() {
            console.info('[MSG CREATE] Reply Message: ', reply);
            expect(reply.from).to.eq(msgTo);
            expect(reply.to).to.eq(msgFrom);
            expect(reply.type).to.eq('response');
            expect(reply.body.code).to.eq(200);
          });
        });
      } else {
        clearInterval(b);
        setTimeout(function() {
          expect(numOfMsgsReply).to.have.lengthOf(numOfMsgsSend.length);
          done();
        });
      }

      seq++;
    }, time);

  });

});
