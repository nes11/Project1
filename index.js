const express = require('express');
const app = express();

const port = 4000;

const links = '<a href="/game?player1=rock">rock</a><br /><a href="/game?player1=scissors">scissors</a><br /><a href="/game?player1=paper">paper</a>'

const makeComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 1) {
      computerChoice = 'rock';
  } else if (computerChoice === 2) {
      computerChoice = 'paper';
  } else {
      computerChoice = 'scissors';
  }
  console.log('The computer has chosen', computerChoice);
  return computerChoice;
}

const play = function(userChoice, computerPlay) {
  if (userChoice === computerPlay) {
      return "It's a draw!";
  } else if (userChoice === 'paper') {
      if (computerPlay === 'rock') {
        return 'You win!';
    } else if (computerPlay === 'scissors') {
        return 'The computer wins!';
    }
  } else if (userChoice === 'rock') {
      if (computerPlay === 'paper') {
        return 'The computer wins!';
    } else if (computerPlay === 'scissors') {
        return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerPlay === 'rock') {
      return 'The computer wins';
    } else if (computerPlay === 'paper') {
      return 'You win!';
    }
  }
}

app.get('/game', function (req, res) {
  const computerChoice = makeComputerChoice();
  const playerChoice = req.query.player1;
  const result = play(playerChoice, computerChoice);
  const infoGame = `You have chosen ${playerChoice} and the computer has chosen ${computerChoice}.<br /> ${result}`;
  const responseString = `${infoGame}<br />${links}`;
  res.send(responseString);
})

app.listen(port, function(){ console.log('this application is listening on port', port)});
