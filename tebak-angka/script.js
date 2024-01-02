'use strict';

console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = 'Jawaban anda benar');

document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);
});
