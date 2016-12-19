var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static('public'));

app.get('*', function (request, response, next) {
  response.sendFile(__dirname + '/public/index.html');
});

var port = 8080;
server.listen(port, function () {
  console.log('App listening on port:' + port);
});