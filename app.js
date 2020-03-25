let fs = require('fs');

fs.unlink('./stuff/writeme.txt', (err) => {
	console.log('removed');
});

fs.rmdir('stuff', (err) => {
	console.log('Deleted');
});
