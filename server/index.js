var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server started \r\n');
	socket.pipe(socket);
});

server.listen(8888, '127.0.0.1');
