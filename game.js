const playerSelection = function() {
    return prompt("Choose your weapon - Rock, Paper or Scissors?");
  };
  const options = ["rock", "paper", "scissors"];
  const computerSelection = function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
  };
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! you both picked ${playerSelection}`); 
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors") ;
         return true;
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock"); 
        return true
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper") ;
        return true
     } else {
        console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
        return false
     }
}
function fullGame() {
  let round = 1;
  let playerWins = 0;
  let botWins = 0;
  let result = 0;

  while ( round <= 5 ) {

    result = playRound(playerSelection(), computerSelection());
    if ( result === true ) {
      playerWins++;
    } else {
      if ( result === false ) {
        botWins++;
      }
    }
    round++;
  }
  if(playerWins<botWins){
    console.log("You Lost The game better luck next time !")
}else if(playerWins>botWins){

        console.log("You Won ! great round to pull of the victory")
    
  
}else{
    console.log("Its a draw ! one step closer to victory");
  }
}

fullGame();
