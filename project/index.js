let inputField = document.getElementById('inputField');
let sendBtn = document.getElementById('sendBtn');
let hello = document.getElementById('kek');
let outputField = document.getElementById('outputField');
let msgText;

// hello.innerHTML = 'hello';

function displayMessage(msg) {
    outputField.append(document.createElement('br'));
    outputField.append(msg);
    outputField.append(document.createElement('br'));
};

function sendMsg() {
    socket.send(JSON.stringify(msgText));
}

inputField.addEventListener('input', updateValue);
function updateValue(e) {
    msgText = e.target.value;
}

const socket = new WebSocket('ws://localhost:8282');
socket.onopen = function(event) {
    outputField.append('WebChat is running');
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


