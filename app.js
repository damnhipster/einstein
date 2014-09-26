var express = require('express');
var app = express();

app.set('views', __dirname + '/app');
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
  response.render('index.html');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
