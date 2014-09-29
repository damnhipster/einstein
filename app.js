var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index.html');
});

var server = app.listen(port, function() {
  console.log('Listening on port %d', port);
});
