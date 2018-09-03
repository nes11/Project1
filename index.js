var express = require('express');
var app = express();

const port = 4000

app.get('/', function (req, res) {
  console.log('/ has been visited');
  res.send('Hello World');
})

app.get('/blah', function (req, res) {
  const query = req.query;
  console.log('/blah has been visited');
  console.log("Query is:", query);
  const responseText = 'Fuck you world ' + query.name;
  res.send(responseText);
  console.log('Responded with:', responseText)
})

app.listen(port, function(){ console.log('this application is listening on port', port)});
