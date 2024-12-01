const WebSocket = require('ws');

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Enviar un mensaje "Hola Mundo" al cliente
    ws.send('Mensaje enviado  desde el servidor WebSocket');

    // Escuchar mensajes del cliente
    ws.on('message', (message) => {
        console.log(`Mensaje recibido del cliente: ${message}`);
    });

    // Manejar la desconexión del cliente
    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log('Servidor WebSocket corriendo en ws://localhost:8081');
