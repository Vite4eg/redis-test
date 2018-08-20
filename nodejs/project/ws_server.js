const WebSocket = require('ws');
const redis     = require('redis');

let client = redis.createClient({
    host: 'redis'   // такой хост прописан в docker-compose.yml
});

const wss = new WebSocket.Server({
    port: 3000
});

wss.on('connection', function connection(ws) {


    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(`Принято сообщение: ${message}`);
    });

    ws.send('something');


    // коннектимся к редису
    client.on('message', function (channel, message) {
        ws.send(`Сообщение из канала ${channel}: ${message}`);
    });

    client.subscribe('myChannel');
});
