const choice = document.querySelectorAll('.btn');
const playerChoice = document.getElementById('player');
const computerChoice = document.getElementById('computer');
const result = document.getElementById('result');
const playerScore = document.getElementById('p-score');
const compScore = document.getElementById('c-score');
const lastDiv = document.getElementById('final');
let p = 0;
let c = 0;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'Draw';
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    return 'You Win! Rock beats Scissor';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    return 'You Lose! Scissor beats Rock';
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    return 'You Win! Scissor beats Paper';
  } else {
    return 'You Lose! Rock beats Scissor';
  }
};

const selected = (e) => {
  let play = e.target.textContent.toLowerCase();
  let comp = getComputerChoice();
  playerChoice.textContent = `Player choice: ${play.toUpperCase()}`;
  computerChoice.textContent = `Computer choice: ${comp.toUpperCase()}`;
  result.textContent = `Result: ${playRound(play, comp)}`;
  if (/Win/.test(result.textContent)) {
    p++;
    playerScore.textContent = `Player score: ${p}`;
  }
  if (/Lose/.test(result.textContent)) {
    c++;
    compScore.textContent = `Computer score: ${c}`;
  }
  checkScore(p, c);
};

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', selected);
}

const checkScore = (p, c) => {
  if (p === 5) {
    const finalScore = document.createElement('h1');
    const message = document.createTextNode('Player Wins!');
    finalScore.appendChild(message);
    const parentDiv = document.getElementById('score-container');
    parentDiv.insertBefore(finalScore, lastDiv);
    for (let i = 0; i < choice.length; i++) {
      choice[i].style.display = 'none';
    }
  }
  if (c === 5) {
    const finalScore = document.createElement('h1');
    const message = document.createTextNode('Computer Wins!');
    finalScore.appendChild(message);
    const parentDiv = document.getElementById('score-container');
    parentDiv.insertBefore(finalScore, lastDiv);
    for (let i = 0; i < choice.length; i++) {
      choice[i].style.display = 'none';
    }
  }
};
