var express = require('express');
var index = require('./routes/index');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static('./public'));

app.use(bodyparser.json());

app.use('/', index);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('ready and waiting on port', port);
})
