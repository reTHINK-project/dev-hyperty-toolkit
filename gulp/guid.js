var crypto = require('crypto');


module.exports = {
  generateGUID: function generateGUID(startNumber) {

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return startNumber + '-' +  s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

  },

  MD5Hash: function(startNumber, data) {
    var hash = crypto.createHash('md5').update(data).digest('hex');
    console.log('Name: ' + data + ' | HASH: ', hash);
    return startNumber + hash;
  }

};
