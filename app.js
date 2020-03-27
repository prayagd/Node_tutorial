let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
	console.log('request was made: ' + req.url);
	if (req.url === '/home' || req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/contact') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if (req.url === '/api/ninjas') {
		let myObj = [
			{
				name: 'ryu',
				age: 21
			},
			{
				name: 'moshi',
				age: 22
			}
		];
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(myObj));
	} else {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
