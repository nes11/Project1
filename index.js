var express = require('express');
var app = express();

const port = 4000

app.get('/', function (req, res) {
  console.log('/ has been visited');
  res.send('Hello World');
})

app.get('/blah', function (req, res) {
  console.log('/blah has been visited');
  console.log(req);
  res.send('Fuck you world');
})

app.listen(port, function(){ console.log('this application is listening on port', port)});
