var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

app.get('/', function(request, response) {
    var index_data = fs.readFileSync('index.html');
    response.send(index_data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
