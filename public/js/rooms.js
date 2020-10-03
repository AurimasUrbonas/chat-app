const socket = io();

const $selectFormSelect = document.querySelector('#formSelect');
const $selectFormButton = document.querySelector('#selectFormButton');

const roomListTemplate = document.querySelector('#room-list-template').innerHTML;

socket.on('roomList', (rooms) => {
  if(rooms === undefined || rooms.length === 0) {
    rooms[0] = 'No active rooms available'
    $selectFormSelect.setAttribute('disabled', true);
    $selectFormButton.setAttribute('disabled', true);
  }

  const html = Mustache.render(roomListTemplate, {
    rooms
  });
  document.querySelector('#formSelect').innerHTML = html;
});