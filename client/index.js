var net = require('net');

for (var i = 0; i < 10; i++) {
  var client = new net.Socket();
  client.connect(8888, '127.0.0.1', function() {
  	client.write('Hello, server! Love, Client.');
  });

  client.on('data', function(data) {
  	console.log('Received: ' + data);
  });
}
