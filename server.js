const express = require('express');

const app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/bower_components'))

app.get('*', function(req, res) {
	res.render('index');
});

app.listen(3000, '127.0.0.1');
