function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;  // generates a random whole number between 1-3
    console.log("Comp number: " + randomNumber); // This will output 1, 2, or 3
    return randomNumber 
}