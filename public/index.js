

const light = {
    state: "off",
    switch: document.querySelector('#switch'),
}


function main() {
    const socket = new WebSocket('ws://localhost:8080');
    light.switch.addEventListener('change', toggleAndSend.bind(null, socket));
}


function toggleAndSend(socket, e) {
    console.log('i am here')
    toggleState();
    socket.send(light.state);
}


function toggleState() {
    if (light.state === "off")
        light.state = "on";
    else
        light.state = "off";
}



main();