'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = 'Jawaban anda benar');

// document.querySelector('.number').textContent = 3;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // ketika tidak memasukan inputan
    if (!guess) {
        document.querySelector('.message').textContent = "angka tidak ditemukan";

        // ketika player menang
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "selamat anda benar 🎉";
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('number').style.width = '30rem';
    
    // ketika salah menebak jawaban
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = "angka yang anda masukan terlalu besar";
        score --;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "anda kalah";
            document.querySelector('.score').textContent = 0;
        }

        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "angka yang anda masukan terlalu kecil"
            score --;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = "anda kalah";
            document.querySelector('.score').textContent = 0;
        }
       
    }

});
