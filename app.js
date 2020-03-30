let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/contact', (req, res) => {
	res.render('contact', { qs: req.query });
});

app.get('/profile/:name', (req, res) => {
	let data = { age: 22, job: 'ninja', hobbies: [ 'eating', 'fighting', 'fishing' ] };
	res.render('profile', { person: req.params.name, data: data });
});

app.listen(3000);
