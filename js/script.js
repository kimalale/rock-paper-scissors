function getComputerChoice(){
    
    let choice = ["Rock", "Paper", "Scissors"]

    return choice[Math.floor(Math.random() * 3)];

}


function playRound(playerSelection = "t", computerSelection = "T"){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    //Rock beats scissors, scissors beat paper, and paper beats rock.

    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection === computerSelection){
        return "It\'s a tie.";
    } else {
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }

}


function game(){

    let p1Score = 0;
    let comScore = 0;

    for (let i = 0; i < 5; i++) {
        
        let choice = prompt("Rock, Paper or Scissors?");

        let result = playRound(choice, getComputerChoice());
        console.log(result);

        if (result.includes("tie")){
            i -= 1;
         } else{
                
        (result.includes("Win")) ? p1Score += 1 : comScore +=1 ;

        }
        
      
     }

     (p1Score > comScore) ? console.log("You won the game!") : console.log("You lost the game!")

     console.log("Your Score: " + p1Score);
     console.log("Computer Score: " + comScore);
}




game();