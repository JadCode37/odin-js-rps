const getcomputerchoice = () => {
    let randomNumbers = Math.random();

    if(randomNumbers<0.33)
        return "rock"
    else if(randomNumbers<0.66)
        return "paper"
    else
        return "scissors"
};
 
const getHumanChoice = () => {
    return prompt("Rock , Paper or Scissors?").toLowerCase();

}



let humanScore = 0;
let computerScore = 0;

const playRound = () =>{
    humanchoice = getHumanChoice()
computerchoice = getcomputerchoice() 
console.log(humanchoice);
console.log(computerchoice);
      // 1. Check for a tie
    if (humanchoice === computerchoice) {
        console.log("its a tie");
         
    }

    // 2. Check all winning conditions for the player
    else if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) 
        humanScore++;
    else
         computerScore++;

   
}

playGames = () => {
if(humanScore + computerScore == 5){
    if(humanScore > computerScore)
        console.log("human wins")
    else if(computerScore>humanScore)
        console.log("computer wins")
}
else{
    playRound();
    console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    playGames();
}

}

console.log(playGames());

   

