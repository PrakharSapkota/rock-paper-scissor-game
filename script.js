// creating an array of choices
const choices = ["rock","paper","scissor"];

// Getting computer choices
function getComputerChoice(){
    const randChoice = (Math.floor(Math.random()*3));
    return choices[randChoice]
}
// console.log(getComputerChoice())

// Getting user choices
function getUserChoice(){
    let input = prompt("Enter rock,paper or scissor:")
    input.toLowerCase()
    return input
}
// console.log(getUserChoice())

// Creating the function to play one round and implementing the conditions
function playRound(){
    const playerSelect = getUserChoice()
    const computerSelect = getComputerChoice()
    if (playerSelect === computerSelect){
        return `OOPS!It's a DRAW!`;
    } else if (
        (playerSelect === "rock" && computerSelect === "scissor") ||
        (playerSelect === "paper" && computerSelect === "rock") ||
        (playerSelect === "scissor" && computerSelect === "paper")
    ){
        return `Yay!Victory: ${playerSelect} beats ${computerSelect}`;
    } else {
        return `What a blunder,You lost!: ${computerSelect} beats ${playerSelect}`;
    }
}

// To run the previous function 5 times.
function game(){
    for (let i = 1; i <= 5; i++){
        console.log(playRound(i))
    }
}
game()





