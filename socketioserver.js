var io = require("socket.io").listen(8080);
io.sockets.on('connection', function(socket){
	socket.emit('hello', 'Hello from the Socket.io');
});