let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3) + 1;  // generates a random whole number between 1-3
    console.log("Comp number: " + randomNumber); // This will output 1, 2, or 3
    return randomNumber; // 1=rock, 2=paper, 3=scissor
}
function getHumanChoice(userInput = prompt("What do you choose? rock, paper, or scissor? type full name. ")){ // prompts user for rock, paper or scissor
    console.log("this is your choice... " +  userInput.toLowerCase()); //outputs users choice
    return userInput.toLowerCase() // returns userinput to all lowercase to be used 

}

function playRound(comp, hum){
    if (comp == 1){ // if computer chooses rock
        if (hum == "rock"){ //tied if human has rock
            console.log("Tie you both choose the same");
        }
        else if (hum == "scissor") { //comp wins rock over scissors
            console.log("You lose, Rock beats Scissor");
            computerScore++;
        }
        else if (hum == "paper"){ //human wins paper over rock
            console.log("You win, Paper beats Rock");
            humanScore++;
        }
    }
    if (comp == 2){ //if computer chooses paper
        if (hum == "paper"){ //tied if human has rock
            console.log("Tie you both choose the same");
        }
        else if (hum == "rock") { //comp wins paper over rock
            console.log("You lose, Paper beats Rock");
            computerScore++;
        }
        else if (hum == "scissor"){ //human wins scissors over paper
            console.log("You win, scissor beats paper");
            humanScore++;
        }
    }
    if (comp == 3){ //if computer chooses scissors
        if (hum == "scissor"){ //tied
            console.log("Tie you both choose the same");
        }
        else if (hum == "paper") { //comp wins scissors over paper
            console.log("You lose, Scissor beats paper");
            computerScore++;
        }
        else if (hum == "rock"){ //human wins rock over scissors
            console.log("You win, Rock beats Scissor");
            humanScore++;
        }
    }

    console.log(humanScore , computerScore)
}

function playGame(){
    for (let i = 0; i < 6; i++) { // loops 5 times
        let humanSelection = getHumanChoice(); //sets human choice every round
        let computerSelection = getComputerChoice(); // sets comp choice every round
        playRound(computerSelection, humanSelection); //playRound function as described above
        console.log("round number ", i); //prints round number
        console.log("humans: ", humanScore, "computer: ", computerScore); // prints score at the end of each round.
    }
}
playGame();


