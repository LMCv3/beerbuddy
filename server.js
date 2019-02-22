const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'))

app.get('*', function(req, res) {
	res.render('index');
});

app.listen(port);
