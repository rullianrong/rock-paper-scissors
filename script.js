let userScore = 0,
    computerScore = 0;

const compChoice = document.querySelector('#computer-choice');
const results = document.querySelector('#result');
const userTotal = document.querySelector('#user-score');
const compTotal = document.querySelector('#comp-score');

//function that generates random number from 0-2 and returns a 
//string based on the generated number this works as the
//engine of the computer/opponent
function computerPlay() {
    let numGenerator = Math.floor(Math.random() * 3);
    if (numGenerator === 0) {
        return "rock";
    } else if (numGenerator === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//function that determines who won the round by comparing 2 parameters:
//the user's input and computers input
function playRound(playerSelection, computerSelection) {
    let decision;
    if (playerSelection === computerSelection) {
        decision = "It's a Tie!\n ";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {

        decision = "You won this round!\n ";

    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {

        decision = "You lose this round!\n ";
    }
    result(decision, computerSelection);
}

function result(decision, computerSelection) {
    if ((userScore < 5) && (computerScore < 5)) {
        compChoice.innerHTML = "Computer chose: " + computerSelection;
        results.innerHTML = decision;

        if (decision == "You won this round!\n ") userScore++;
        else if (decision == "You lose this round!\n ") computerScore++;

        userTotal.innerHTML = userScore;
        compTotal.innerHTML = computerScore;
    }
    if ((userScore == 5) || (computerScore == 5)) {
        if (userScore > computerScore) {
            compChoice.innerHTML = "Congratulations! You Win!";
            results.innerHTML = '';
        } else {
            compChoice.innerHTML = "Sorry, you lost.";
            results.innerHTML = '';
        }
    }
}

const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', thisButton => {
        let playerSelection = thisButton.target.id;
        playRound(playerSelection, computerPlay());
    });
})