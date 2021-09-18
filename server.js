const express = require('express');
const http = require('http');
const path =  require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Setting Static folder to public
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', socket => {
    console.log("new socket connection made");
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(("Server running on port: " + PORT)));