// jshint browser:true, jquery: true
// jshint varstmt: false
/* global Handlebars */
/* global Materialize */

var hypertyChat;
var avatar = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

function hypertyLoaded(result) {

  let hypertyInfo = '<span class="white-text">' +
                    '<b>Name:</b> ' + result.name + '</br>' +
                    '<b>Status:</b> ' + result.status + '</br>' +
                    '<b>HypertyURL:</b> ' + result.runtimeHypertyURL + '</br>' +
                    '</span>';
  $('.card-panel').html(hypertyInfo);

  hypertyChat = result.instance;

  hypertyChat.addEventListener('chat:subscribe', function(chatGroup) {
    prepareChat(chatGroup);
  });

  let messageChat = $('.chat');
  messageChat.removeClass('hide');

  let chatSection = $('.chat-section');
  chatSection.removeClass('hide');

  let createBtn = $('.create-room-btn');
  let joinBtn = $('.join-room-btn');

  createBtn.on('click', createRoom);
  joinBtn.on('click', joinRoom);

}

/*
  Create Room actions
 */
function createRoom(event) {
  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let createRoomBtn = createRoomModal.find('.btn-create');
  let addParticipantBtn = createRoomModal.find('.btn-add');

  addParticipantBtn.on('click', addParticipantEvent);
  createRoomBtn.on('click', createRoomEvent);

  createRoomModal.openModal();
}

function addParticipantEvent(event) {

  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let participants = createRoomModal.find('.participants-form');
  let countParticipants = participants.length - 1;

  countParticipants++;

  let participantEl = '<div class="row">' +
    '<div class="input-field col s8">' +
    '  <input class="input-email" name="email" id="email-' + countParticipants + '" required aria-required="true" type="text">' +
    '  <label for="email-' + countParticipants + '">Participant Email</label>' +
    '</div>' +
    '<div class="input-field col s4">' +
    '  <input class="input-domain" name="domain" id="domain-' + countParticipants + '" type="text">' +
    '  <label for="domain-' + countParticipants + '">Participant domain</label>' +
    '</div>' +
  '</div>';

  participants.append(participantEl);

}

function createRoomEvent(event) {
  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let participantsForm = createRoomModal.find('.participants-form');

  let participants = [];
  let serializedObject = $(participantsForm).serializeObjectArray();

  // Prepare the chat
  let name = createRoomModal.find('.input-name').val();

  console.log(serializedObject);

  if (serializedObject.hasOwnProperty('email')) {

    serializedObject.email.forEach(function(value, index) {
      participants.push({email: value, domain: serializedObject.domain[index]});
    });

  }

  console.log('Participants: ', participants);

  hypertyChat.create(name, participants).then(function(chatGroup) {

    prepareChat(chatGroup);

  }).catch(function(reason) {
    console.error(reason);
  });
}

/*
  Join to an existent chat room
 */
function joinRoom(event) {
  event.preventDefault();

  let joinModal = $('.join-chat');
  let joinBtn = joinModal.find('.btn-join');
  joinBtn.on('click', function(event) {

    event.preventDefault();

    let resource = joinModal.find('.input-name').val();

    hypertyChat.join(resource).then(function(chatGroup) {
      prepareChat(chatGroup);
    }).catch(function(reason) {
      console.error(reason);
    });

  });

  joinModal.openModal();

}

function inviteParticipants(event) {

  event.preventDefault();

  let inviteModal = $('.invite-chat');
  let inviteBtn = inviteModal.find('.btn-modal-invite');

  inviteBtn.on('click', function(event) {

    event.preventDefault();

    let emails = inviteModal.find('.input-emails').val();
    let participants = [];
    if (emails.includes(',')) {
      let emails = emails.replace(', ', ',').split(',');
    } else {
      participants.push(emails);
    }

    console.log(emails, participants, participants.length);

    let listOfEmails = participants.map((value, key) => {
      let domain = '';
      let email = value;

      if (value.includes('(') && value.includes(')')) {
        email = value.substring(value.indexOf('(') - 1);
        domain = value.substr(value.indexOf('()') + 1, value.length - 1);
      };

      console.log(value, key);
      return {email: email, domain: domain};
    });

    console.log('Participants:', listOfEmails);

    hypertyChat.invite(listOfEmails).then(function(result) {
      console.log('Invite emails', result);
    }).catch(function(reason) {
      console.log('Error:', reason);
    });

  });

  inviteModal.openModal();

}

function prepareChat(chatGroup) {

  chatGroup.addEventListener('have:new:notification', function(event) {
    console.log('have:new:notification: ', event);
    Materialize.toast('Have new notification', 3000, 'rounded');
  });

  chatGroup.addEventListener('new:message:recived', function(message) {
    console.info('new message recived: ', message);
    processMessage(message);
  });

  chatGroup.addEventListener('participant:added', function(participant) {
    console.info('new participant', participant);
    addParticipant(participant);
  });

  console.log('Chat Group Controller: ', chatGroup);

  Handlebars.getTemplate('hyperty-chat/chat-section').then(function(html) {
    $('.chat-section').append(html);

    chatManagerReady(chatGroup);

    var communication = chatGroup.dataObject.data;
    var participants = communication.participants;
    var owner = chatGroup.dataObject._owner;
    console.log('owner: ', owner);
    console.log('participant: ', communication.participants);
    participants.forEach(function(participant) {
      if (owner !== participant.hypertyResource) {
        addParticipant(participant);
      }
    });

    let inviteBtn = $('.invite-btn');
    inviteBtn.on('click', inviteParticipants);

  });

}

function chatManagerReady(chatGroup) {

  let chatSection = $('.chat-section');
  let addParticipantModal = $('.add-participant');
  let btnAdd = addParticipantModal.find('.btn-add');
  let btnCancel = addParticipantModal.find('.btn-cancel');

  let messageForm = chatSection.find('.message-form');
  let textArea = messageForm.find('.materialize-textarea');

  Handlebars.getTemplate('hyperty-chat/chat-header').then(function(template) {
    let name = chatGroup.dataObject.data.name;
    let resource = chatGroup.dataObject._url;

    let html = template({name: name, resource: resource});
    $('.chat-header').append(html);
  });

  let roomsSections = $('.rooms');
  let collection = roomsSections.find('.collection');
  let item = '<li class="collection-item active">' + chatGroup.dataObject.data.name + '</li>';
  collection.append(item);

  let badge = collection.find('.collection-header .badge');
  let items = collection.find('.collection-item').length;
  badge.html(items);

  textArea.on('keyup', function(event) {

    if (event.keyCode === 13 && !event.shiftKey) {
      messageForm.submit();
    }

  });

  messageForm.on('submit', function(event) {
    event.preventDefault();

    let object = $(this).serializeObject();
    let message = object.message;
    chatGroup.send(message).then(function(result) {
      console.log('message sent', result);
      messageForm[0].reset();
    }).catch(function(reason) {
      console.error('message error', reason);
    });

  });

  btnAdd.on('click', function(event) {
    event.preventDefault();

    let emailValue = addParticipantModal.find('.input-name').val();
    chatGroup.addParticipant(emailValue).then(function(result) {
      console.log('hyperty', result);
    }).catch(function(reason) {
      console.error(reason);
    });

  });

  btnCancel.on('click', function(event) {
    event.preventDefault();
  });

}

function processMessage(message) {

  let chatSection = $('.chat-section');
  let messagesList = chatSection.find('.messages .collection');

  let list = `<li class="collection-item avatar">
    <img src="` + avatar + `" alt="" class="circle">
    <span class="title">` + message.from + `</span>
    <p>` + message.value.chatMessage.replace(/\n/g, '<br>') + `</p>
  </li>`;

  messagesList.append(list);
}

function addParticipant(participant) {

  console.log('ADD PARTICIPANT: ', participant);

  let section = $('.conversations');
  let collection = section.find('.participant-list');
  let collectionItem = '<li class="chip" data-name="' + participant.hypertyResource + '"><img src="' + avatar + '" alt="Contact Person">' + participant.hypertyResource + '<i class="material-icons close">close</i></li>';

  collection.removeClass('center-align');
  collection.append(collectionItem);

  let closeBtn = collection.find('.close');
  closeBtn.on('click', function(e) {
    e.preventDefault();

    let item = $(e.currentTarget).parent().attr('data-name');
    removeParticipant(item);
  });
}

function removeParticipant(item) {
  let section = $('.conversations');
  let collection = section.find('.participant-list');
  let element = collection.find('li[data-name="' + item + '"]');
  element.remove();
}

Handlebars.getTemplate = function(name) {

  return new Promise(function(resolve, reject) {

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      Handlebars.templates = {};
    } else {
      resolve(Handlebars.templates[name]);
    }

    $.ajax({
      url: name + '.hbs',
      success: function(data) {
        Handlebars.templates[name] = Handlebars.compile(data);
        resolve(Handlebars.templates[name]);
      },

      fail: function(reason) {
        reject(reason);
      }
    });

  });

};
