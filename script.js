'use strict';

const number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Type a number';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '⬇️ Lower!!!';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '⬆️ Higher!!!';
  } else {
    document.querySelector('.message').textContent = 'You WON!!!';
    document.body.style.backgroundColor = '#60b347';
  }
});
