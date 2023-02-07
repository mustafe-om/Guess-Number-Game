'use strict';

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayAnything = function (type, value) {
  document.querySelector(`${type}`).textContent = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayAnything('.message', '⛔️ Type a number');

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      guess > secretNumber
        ? displayMessage('⬇️ Go Lower!!!')
        : displayMessage('⬇️ Go Higher!!!');
      displayAnything('.score', score);
    } else {
      displayMessage('💥 Game Over!');
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#9e1a1a';
    }
  }

  // when guess is wrong
  else if (guess === secretNumber) {
    score += secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('You WON!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    score > highscore
      ? ((highscore = score),
        (document.querySelector('.highscore').textContent = highscore))
      : null;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
