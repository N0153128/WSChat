console.log('WS server has started');

let WebSocket = require('ws');
let server = new WebSocket.Server({port: 8282});

function heartbeat() {
    this.isAlive = true;
}


function broadcast(msg) {
    console.log(`Received: ${msg}`);
    server.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(msg);
        }
     });
 };


 server.username = function() {
    let noun = ['Bunny', 'Kitten', 'Ram', 'Wolf', 'Fox'];
    let adjective = ['Wise', 'Smart', 'Clever', 'Bright', 'Creative'];

    function makeID() {
        let username = [];
        username.push(adjective[Math.floor(Math.random()*adjective.length)]);
        username.push(noun[Math.floor(Math.random()*noun.length)]);
        username = username.toString().replace(/,/g, ' ');
        return username;
    };
    return makeID();
}

function messageHandler(server, data) {
    let message = JSON.parse(data);
    if (message.length > 0 && message.length < 150) {
        let prop = `${server.id}: ${message}`;
        console.log(prop);
        broadcast(prop);
    }

}

server.on('connection', function connection(wss, req) {
    wss.id = server.username();
    wss.isAlive = true;
    const ip = req.socket.remoteAddress;
    let interval = setInterval( function ping() {
        server.clients.forEach(function each(wss) {
            if (wss.isAlive === false) return wss.terminate();
            wss.isAlive = false;
            wss.ping();
        });
    }, 5000);
    wss.on('pong', heartbeat);
    wss.on('error', console.error);
    broadcast(`${wss.id} connected`)
    console.log('client connected')

    wss.on('message', function incoming(message) {
        messageHandler(wss, message);
    });

    server.on('close', function() {
        console.log('Client disconnected');
        broadcast('Client Disconnected')
    });
});
