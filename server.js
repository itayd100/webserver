const express = require ('express');

var app = express();

app.get('/', (req, res) =>{
	//res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'Itay',
		likes: [
		'Caro',
		'TV'
		]
	})
});


app.get('/about', (req, res) =>{
	res.send ('About page');
});


app.get('/bad', (req, res) =>{
	res.send({
		errorMessage: 'something went wrong...'
	});
});

app.listen(3000, ()=>{
	console.log('server is up on port 3000');
});