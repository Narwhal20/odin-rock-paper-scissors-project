let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;  // generates a random whole number between 1-3
    console.log("Comp number: " + randomNumber); // This will output 1, 2, or 3
    return randomNumber; 
}
function getHumanChoice(userInput = prompt("What do you choose? rock, paper, or scissors? type first letter only. ")){ // prompts user for r,p, or s.
    console.log("this is your choice... " +  userInput); //outputs users choice

}
