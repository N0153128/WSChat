console.log('WS server has started');
const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8282});

function broadcastMessage(server, message) {
    server.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    })
}

wss.on('connection', function connection(wss) {
    broadcastMessage(wss, 'Client Connected')

    wss.on('message', function incoming(message) {
        // message.toJSON;
        // let clientMessage = JSON.parse(message).message;
        // let prop = `${wss.id}: ${clientMessage}`
        console.log(message);
        broadcastMessage(wss, message)
    })
});

wss.on('close', function() {
    console.log('Client disconnected');
    broadcastMessage('Client Disconnected');
});