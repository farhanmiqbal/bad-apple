'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = 'Jawaban anda benar');

// document.querySelector('.number').textContent = 3;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message ;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    // ketika tidak memasukan inputan
    if (!guess) {
        // document.querySelector('.message').textContent = "angka tidak ditemukan";
        displayMessage ("angka tidak ditemukan");
        // ketika player menang
    } else if (guess === secretNumber) {
        
        displayMessage("selamat anda benar 🎉");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore ;
        }
    
    //when guess is too high
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'terlalu besar' : 'terlalu kecil');
        score --;
        document.querySelector('.score').textContent = score;
        } else {
            displayMessage('anda kalah');
            document.querySelector('.score').textContent = 0;
        }

    }
    // ketika salah menebak jawaban
//     } else if (guess > secretNumber) {
//         if(score > 1) {
//             document.querySelector('.message').textContent = "angka yang anda masukan terlalu besar";
//         score --;
//         document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = "anda kalah";
//             document.querySelector('.score').textContent = 0;
//         }

        
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = "angka yang anda masukan terlalu kecil"
//             score --;
//             document.querySelector('.score').textContent = score;

//         } else {
//             document.querySelector('.message').textContent = "anda kalah";
//             document.querySelector('.score').textContent = 0;
//         }
       
//     }

});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage("silahkan menebak angka");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222' ;
    document.querySelector (".number").style.width = '15rem';
})


