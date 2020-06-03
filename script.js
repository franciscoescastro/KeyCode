const eventKeyCode = document.getElementById('event-key-code')
const eventKey = document.getElementById('event-key')
const eventLocation = document.getElementById('event-location')
const eventCode = document.getElementById('event-code')

document.addEventListener('keydown', event => {
  eventKeyCode.innerHTML = event.keyCode
  eventKey.innerHTML = event.key
  eventLocation.innerHTML = event.location
  eventCode.innerHTML = event.code
})