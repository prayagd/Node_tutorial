let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
	console.log('request was made: ' + req.url);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	let myObj = {
		name: 'ryu',
		job: 'ninja',
		age: 21
	};
	res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
