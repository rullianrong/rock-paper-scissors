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

function playRound(playerSelection, computerSelection) {
    let decision;
    if (playerSelection === computerSelection) {
        decision = "It's a Tie!\n ";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        decision = "You won this round!\n ";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        decision = "You lose this round!\n ";
    }
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection + "\n ");
    console.log(decision);

    return decision;
}

function game() {
    let userScore = 0,
        computerScore = 0;
    let result;
    while ((userScore < 5) && (computerScore < 5)) {
        let playerSelection = prompt("Please choose your weapon: ").toLowerCase();
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === "You won this round!\n ") {
            ++userScore;
        } else if (result === "You lose this round!\n ") {
            ++computerScore;
        } else {
            console.log("User: " + userScore);
            console.log("Computer: " + computerScore + "\n**********");
            continue;
        }
        console.log("User: " + userScore);
        console.log("Computer: " + computerScore + "\n**********");
    }
    return (userScore == 5 ? "CONGRATULATIONS! YOU WON THE GAME!" : "SORRY, YOU LOSE.");
}

console.log(game());