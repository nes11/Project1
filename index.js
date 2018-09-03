var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('/ has been visited');
  res.send('Hello World');
})


app.get('/blah', function (req, res) {
  console.log('/blah has been visited');
  console.log(req);
  res.send('Fuck you world');
})

app.listen(3000);
