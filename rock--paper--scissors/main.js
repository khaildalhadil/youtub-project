

































// // init html elements
// const startGamesBtn = document.getElementById('start-game-btn');


// const ROCK = 'rock';
// const PAPER = 'paper';
// const SCISSORS = 'scissors';

// const DEFAULT_USER_CHOICE = ROCK;

// const RESULT_DRAW  = 'DRAW';
// const RESULT_PLAYER_WINS = 'PLAYER_WINS';
// const RESULT_COMPUTER_WINTS = 'COMPUTER_WINS';

// let gameISRunning = false;

// // ask user 
// const getPlayerChoice = function() {
//     const selection = prompt(`${ROCK}✊🏻, ${PAPER}✋🏻 or ${SCISSORS}✌🏻`, '').toLowerCase();
//     if (
//     selection !== ROCK && 
//     selection !== PAPER && 
//     selection !== SCISSORS) {
//         alert (`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
//         return DEFAULT_USER_CHOICE;
//     }
//     return selection;
// }

// const getComputerChoice = function () {
//     let randNum = Math.floor(Math.random() * 3 + 1);
//     if (randNum === 1) {
//         return ROCK;
//     } else if (PAPER === 2) {
//         return PAPER
//     } else {
//         return SCISSORS
//     }
// }

// const getWinner = function(cChoice, pChoice) {
//     if (cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER || 
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK 
//     ){
//         return RESULT_PLAYER_WINS;
//     } else {
//         return RESULT_COMPUTER_WINTS;
//     }
// }


// startGamesBtn.addEventListener('click', function () {
//     if (gameISRunning) {
//         return;
//     }
//     gameISRunning = true
//     console.log('Game is starting ...')
//     const playerSelection = getPlayerChoice()
//     const computerSelection = getComputerChoice()

//     console.log(`computer: ${computerSelection}, player ${playerSelection}`)

//     const winner = getWinner(computerSelection, playerSelection)
//     // alert (winner)
//     if (winner === RESULT_DRAW) {
//         message = `You picked ${playerSelection}, computer picked ${computerSelection} it's Draw😁`;
//     } else if (winner === RESULT_PLAYER_WINS) {
//         message = `You picked ${playerSelection}, computer picked ${computerSelection} You Win🎉`;
//     } else {
//         message = `You picked ${playerSelection}, computer picked ${computerSelection} You Loss 😂`;
//     }
//     alert(message)
//     gameISRunning = false;
// })






























