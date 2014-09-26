var express = require('express');
var app = express();

app.set('views', __dirname + '/app');
var port = process.env.PORT || 3000
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
  response.render('index.html');
});

var server = app.listen(port, function() {
  console.log('Listening on port %d', port);
});
