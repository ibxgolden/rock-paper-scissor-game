let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}
function convertCase(anythingIwant) {
if (anythingIwant === 'paper') return 'Paper';
if (anythingIwant === 'scissors') return 'Scissors';
return 'Rock';
}
function win(user, computer) {
userScore++;
userScore_span.innerHTML = userScore;
const userName = ' (user)'.fontsize(3).sup();
const compName = ' (comp)'.fontsize(3).sup();
result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('winningStyles');
setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}
