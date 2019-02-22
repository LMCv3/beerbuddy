const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'))

app.get('*', function(req, res) {
	res.render('index');
});

mongoose.connect('mongodb://localhost/beerbuddy');

let con = mongoose.connection;
con.once('open', function(){
	console.log('Successfully connected to MongoDB');
})

app.listen(port);
