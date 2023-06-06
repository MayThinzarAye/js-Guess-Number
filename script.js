'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('No Number');
  } else if (guessNumber === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guessNumber !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guessNumber > secretNumber ? 'Too High Number' : 'Too Low Number'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game ...');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing ...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
});
