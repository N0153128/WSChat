let inputField = document.getElementById('inputField');
let sendBtn = document.getElementById('sendBtn');
let hello = document.getElementById('kek');
let outputField = document.getElementById('outputField');
let msgText;

// hello.innerHTML = 'hello';

inputField.value = '';
msgText = '';

function displayMessage(msg) {
    outputField.prepend(document.createElement('br'));
    outputField.prepend(msg);
    outputField.prepend(document.createElement('br'));
};

function sendMsg() {
    socket.send(JSON.stringify(msgText));
    inputField.value = ''; msgText = '';
}

inputField.addEventListener('input', updateValue);
function updateValue(e) {
    msgText = e.target.value;
}

const socket = new WebSocket('ws://localhost:8282');
socket.onopen = function(event) {
    outputField.append('WSChat is running');
};

socket.onmessage = function(event) {
    console.log(event.data)
    displayMessage(event.data);
};

socket.onclose = function(event) {
    void(0);
};

function sendMessage(message) {
    socket.send(message);
};


