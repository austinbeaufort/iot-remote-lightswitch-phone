

const light = {
    state: "off",
    switch: document.querySelector('#switch'),
}


function main() {
    const socket = new WebSocket('ws://localhost:8080');
    light.switch.addEventListener('change', toggleAndSend.bind(null, socket));
}


function toggleAndSend(socket, e) {
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