const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');
const headsBox = document.querySelector('#heads-box .score-counter');
const headsCoin = document.querySelector('.coin.heads');
const tailsBox = document.querySelector('#tails-box .score-counter');
const tailsCoin = document.querySelector('.coin.tails');
const gameWinner = document.getElementById('game-winner');
// const gameSetting = document.getElementById('game-setting');

// Score Limmit
let scoreLimit = 3;

function flipCoin() {
  
  const randomNum = Math.ceil(Math.random() * 100);
  flip(randomNum);

}

function flip(num) {

  startFlip();
  setTimeout(() => {
    // Stop flip
    headsCoin.classList.remove('flip');
    tailsCoin.classList.remove('flip');
    // compare who won
    if(num <= 50) {
      headsCoin.classList.add('winning-coin');
    } else {
      tailsCoin.classList.add('winning-coin');
    }
    updateScore(num);
  }, 2000);

}

function startFlip() {
  // Remove winning class
  document.querySelectorAll('.coin').forEach((coin) => coin.classList.remove('winning-coin'));
  // Flip coins
  headsCoin.classList.add('flip');
  tailsCoin.classList.add('flip');
}

function updateScore(num) {

  // Getting current scores
  let headsScore = Number(headsBox.textContent);
  let tailsScore = Number(tailsBox.textContent);

  if(num <= 50) {
    let headsNewScore = headsScore + 1;
    headsBox.textContent = headsNewScore;
    gameOver('Heads', headsNewScore, scoreLimit);
  } else {
    let tailsNewScore = tailsScore + 1;
    tailsBox.textContent = tailsNewScore;
    gameOver('Tails', tailsNewScore, scoreLimit);
  }
}

function restartGame() {
  headsBox.textContent = 0;
  tailsBox.textContent = 0;
  gameWinner.textContent = '';
  startBtn.removeAttribute('disabled');
}

function gameOver(faction, score, limit) {
  if(score === limit) {
    gameWinner.textContent = faction + ' Wins!';
    startBtn.setAttribute('disabled', true);
  }
}

startBtn.addEventListener('click', flipCoin);
restartBtn.addEventListener('click', restartGame);
