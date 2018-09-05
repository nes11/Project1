const express = require('express');
const app = express();
const { makeComputerChoice, play, links } = require('./rockpaperscissors')
const port = 4000;

app.get('/game', function (req, res) {
  const computerChoice = makeComputerChoice();
  const playerChoice = req.query.player1;
  const result = play(playerChoice, computerChoice);
  const infoGame = `You have chosen ${playerChoice} and the computer has chosen ${computerChoice}.<br /> ${result}`;
  const responseString = `${infoGame}<br />${links}`;
  res.send(responseString);
})

app.listen(port, function(){ console.log('this application is listening on port', port)});
