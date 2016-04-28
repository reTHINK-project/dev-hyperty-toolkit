// jshint browser:true, jquery: true
// jshint varstmt: false

// import config from '../system.config.json!json';
// import {getTemplate, getUserMedia} from '../../utils/utils';

var connector;

function getUserMedia(constraints) {

  return new Promise(function(resolve, reject) {

    navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        resolve(mediaStream);
      })
      .catch(function(reason) {
        reject(reason);
      });
  });
}

function hypertyLoaded(result) {

  let hypertyInfo = '<span class="white-text">' +
                    '<b>Name:</b> ' + result.name + '</br>' +
                    '<b>Status:</b> ' + result.status + '</br>' +
                    '<b>HypertyURL:</b> ' + result.runtimeHypertyURL + '</br>' +
                    '</span>';
  $('.card-panel').html(hypertyInfo);

  // Prepare to discover email:
  var hypertyDiscovery = result.instance.hypertyDiscovery;
  discoverEmail(hypertyDiscovery);

  connector = result.instance;

  connector.addEventListener('connector:connected', function(controller) {

    connector.addEventListener('have:notification', function(event) {
      notificationHandler(controller, event);
    });

  });
}

function discoverEmail(hypertyDiscovery) {

  var section = $('.discover');
  var searchForm = section.find('.form');
  var inputField = searchForm.find('.friend-email');
  var inputDomain = searchForm.find('.friend-domain');

  section.removeClass('hide');

  searchForm.on('submit', function(event) {
    event.preventDefault();

    var collection = section.find('.collection');
    var collectionItem = '<li class="collection-item item-loader"><div class="preloader-wrapper small active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></li>';

    collection.removeClass('hide');
    collection.addClass('center-align');
    collection.prepend(collectionItem);

    var email = inputField.val();
    var domain = inputDomain.val();

    hypertyDiscovery.discoverHypertyPerUser(email, domain).then(emailDiscovered).catch(emailDiscoveredError);

  });
}

function emailDiscovered(result) {
  console.log('Email Discovered: ', result);

  var section = $('.discover');
  var avatar = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';
  var collection = section.find('.collection');
  var collectionItem = '<li data-url="' + result.id + '" class="collection-item avatar">' +
  '<img src="' + avatar + '" alt="" class="circle" />' +
  '<span class="title"><b>Email: </b>' + result.id + '</span><p>&nbsp;</p>' +
  '<p>' + result.descriptor + '<br>' + result.hypertyURL + '</p>' +
  '<a title="Call to ' + result.id + '" class="waves-effect waves-light btn call-btn secondary-content"><i class="material-icons">call</i></a>' +
  '</li>';

  collection.removeClass('center-align');
  var loader = collection.find('li.item-loader');
  loader.remove();

  var itemsFound = collection.find('li[data-url="' + result.id + '"]');
  if (itemsFound.length) {
    itemsFound[0].remove();
  }

  collection.append(collectionItem);

  var callBtn = collection.find('.call-btn');
  callBtn.on('click', function(event) {
    event.preventDefault();
    openVideo(result);
  });

}

function emailDiscoveredError(result) {

  console.error('Email Discovered Error: ', result);

  var section = $('.discover');
  var collection = section.find('.collection');

  var collectionItem = '<li class="collection-item orange lighten-3"><i class="material-icons left circle">error_outline</i>' + result + '</li>';

  collection.empty();
  collection.removeClass('center-align');
  collection.removeClass('hide');
  collection.append(collectionItem);
}

function openVideo(result) {

  var toUser = result.hypertyURL;

  var options = options || {video: true, audio: true};
  getUserMedia(options).then(function(mediaStream) {
    console.info('recived media stream: ', mediaStream);
    return connector.connect(toUser, mediaStream);
  })
  .then(function(controller) {

    showVideo(controller);

    controller.addEventListener('on:notification', notification);
    controller.addEventListener('on:subscribe', function(controller) {
      console.info('on:subscribe:event ', controller);
    });

    controller.addEventListener('connector:notification', notification);

    controller.addEventListener('stream:added', processVideo);

  }).catch(function(reason) {
    console.error(reason);
  });
}

function processVideo(event) {

  console.log('Process Video: ', event);

  var messageChat = $('.video-holder');
  var video = messageChat.find('.video');
  video[0].src = URL.createObjectURL(event.stream);

}

function notification(event) {
  console.log('Event: ', event);
}

function notificationHandler(controller, event) {

  var calleeInfo = event.identity;
  var incoming = $('.modal-call');
  var acceptBtn = incoming.find('.btn-accept');
  var rejectBtn = incoming.find('.btn-reject');
  var informationHolder = incoming.find('.information');

  showVideo(controller);

  controller.addEventListener('stream:added', processVideo);

  acceptBtn.on('click', function(e) {

    e.preventDefault();

    var options = options || {video: true, audio: true};
    getUserMedia(options).then(function(mediaStream) {
      console.info('recived media stream: ', mediaStream);
      return controller.accept(mediaStream);
    })
    .then(function(result) {
      console.log(result);
    }).catch(function(reason) {
      console.error(reason);
    });

  });

  rejectBtn.on('click', function(e) {

    controller.decline().then(function(result) {
      console.log(result);
    }).catch(function(reason) {
      console.error(reason);
    });

    e.preventDefault();
  });

  var parseInformation = '<div class="col s12">' +
        '<div class="row valign-wrapper">' +
          '<div class="col s2">' +
            '<img src="' + calleeInfo.infoToken.picture + '" alt="" class="circle responsive-img">' +
          '</div>' +
          '<span class="col s10">' +
            '<div class="row">' +
              '<span class="col s3 text-right">Name: </span>' +
              '<span class="col s9 black-text">' + calleeInfo.infoToken.name + '</span>' +
            '</span>' +
            '<span class="row">' +
              '<span class="col s3 text-right">Email: </span>' +
              '<span class="col s9 black-text">' + calleeInfo.infoToken.email + '</span>' +
            '</span>' +
            '<span class="row">' +
              '<span class="col s3 text-right">locale: </span>' +
              '<span class="col s9 black-text">' + calleeInfo.infoToken.locale + '</span>' +
            '</span>' +
          '</div>' +
        '</div>';

  informationHolder.html(parseInformation);
  $('.modal-call').openModal();

}

// function processLocalVideo(controller) {
//
//   var localStreams = controller.getLocalStreams;
//   for (var stream of localStreams) {
//     console.log('Local stream: ' + stream.id);
//   }
//
// }

function showVideo(controller) {
  var videoHolder = $('.video-holder');
  videoHolder.removeClass('hide');

  var btnCamera = videoHolder.find('.camera');
  var btnMute = videoHolder.find('.mute');
  var btnMic = videoHolder.find('.mic');
  var btnHangout = videoHolder.find('.hangout');

  console.log(controller);

  btnCamera.on('click', function(event) {

    event.preventDefault();

    controller.disableCam().then(function(status) {
      console.log(status, 'camera');
      var icon = 'videocam_off';
      var text = 'Disable Camera';
      if (!status) {
        text = 'Enable Camera';
        icon = 'videocam';
      }

      var iconEl = '<i class="material-icons left">' + icon + '</i>';
      $(event.currentTarget).html(iconEl);
    }).catch(function(e) {
      console.error(e);
    });

  });

  btnMute.on('click', function(event) {

    event.preventDefault();

    controller.mute().then(function(status) {
      console.log(status, 'audio');
      var icon = 'volume_off';
      var text = 'Disable Sound';
      if (!status) {
        text = 'Enable Sound';
        icon = 'volume_up';
      }

      var iconEl = '<i class="material-icons left">' + icon + '</i>';
      $(event.currentTarget).html(iconEl);
    }).catch(function(e) {
      console.error(e);
    });

    console.log('mute other peer');

  });

  btnMic.on('click', function(event) {

    event.preventDefault();

    controller.disableMic().then(function(status) {
      console.log(status, 'mic');
      var icon = 'mic_off';
      var text = 'Disable Microphone';
      if (!status) {
        icon = 'mic';
        text = 'Enable Microphone';
      }

      var iconEl = '<i class="material-icons left">' + icon + '</i>';
      $(event.currentTarget).html(iconEl);
    }).catch(function(e) {
      console.error(e);
    });

  });

  btnHangout.on('click', function(event) {

    event.preventDefault();

    console.log('hangout');
  });
}
