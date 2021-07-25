
var express = require('express');
var app = express();
const { configEnv } = require('./src/config');

configEnv();
console.log(process.env)

var server = require('http').createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res, next) {
    res.send('OK');
});

server.listen(process.env.SERVER_PORT, () => console.log('Server listening'));

io.on('connection', function (socket) {
    console.log('Client connected...', socket.id);
})
