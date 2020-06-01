const express = require('express');
const WebSocket = require('ws');
const five = require('johnny-five');

const board = new five.Board();
const wss = new WebSocket.Server({ port: 8080 });
const app = express();
const port = 5000;

app.use('/', express.static('public'));
app.listen(port, () => `listening on port ${port}`);


function main() {
    board.on('ready', watchForChange);
}

function watchForChange() {
    const servo = new five.Servo(10);
    wss.on('connection', socket => {
        console.log('socket connected');
        socket.on('message', lightState => lightState === "on" ? servo.max() : servo.min());
    });
}


main()