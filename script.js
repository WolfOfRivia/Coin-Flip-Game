const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');
const heads = document.querySelector('#heads-box .score-counter');
const tails = document.querySelector('#tails-box .score-counter');
const gameWinner = document.getElementById('game-winner');

function flipCoin() {

  // Score Limmit
  let scoreLimit = 4;
  
  // Getting current scores
  let headsScore = Number(heads.textContent);
  let tailsScore = Number(tails.textContent);

  const randomNum = Math.ceil(Math.random() * 100);
  if(randomNum <= 50) {
    let headsNewScore = headsScore + 1;
    heads.textContent = headsNewScore;
    gameOver('Heads', headsNewScore, scoreLimit);
  } else {
    let tailsNewScore = tailsScore + 1;
    tails.textContent = tailsNewScore;
    gameOver('Tails', tailsNewScore, scoreLimit);
  }

}

function restartGame() {
  heads.textContent = 0;
  tails.textContent = 0;
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