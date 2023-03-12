//Element to be used through out
const button = document.querySelector('button');
const view = document.querySelector('.main-view');
const leaderscore = document.createElement('div');
const round = document.createElement('p');
const score = document.createElement('p');
const textHeading = document.createElement('h2');
const choiceContainer = document.createElement('div');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
let options = [rock, paper, scissors];


//Game variables
let wins = 0;
let rounds = 0;
let result = '';




//Adding classes and attribute values
leaderscore.classList.add('leaderscore');
round.innerHTML = `Round: <span>${rounds}/3</span>`;
score.innerHTML = `Score: <span>${wins}/3</span>`;
textHeading.textContent = "Choose your pick:";
choiceContainer.classList.add('btn-container');
options.map((choice) => {
    choice.classList.add("btn-game");
});

button.addEventListener('click', () => {
    
    while (view.children.length != 0) {
        view.removeChild(view.children[0]);
    } 

   //Adding the element to the webview
    view.appendChild(leaderscore);
    view.appendChild(textHeading);
    view.appendChild(choiceContainer);

    leaderscore.appendChild(round);
    leaderscore.appendChild(score);


    options.map((choice) => {
        choice.classList.add("btn-game");
        choiceContainer.appendChild(choice);

    });
    rock.textContent= "Rock";
    rock.setAttribute('id', 'rock');
    paper.textContent= "Paper";
    paper.setAttribute('id','paper');
    scissors.textContent= "Scissors";
    scissors.setAttribute('id', 'scissors');



})

for (const option of options) {
    option.addEventListener('click', ()=> {
        rounds += 1;
        game(option);
    })
}



function game(id){

    
    round.innerHTML = `Round: <span>${rounds}/3</span>`;
    if (rounds < 3 ){
        result = playRound(id.getAttribute('id'), getComputerChoice());
        
        textHeading.textContent = result;
        if ((result.includes("tie"))) {
            rounds -= 1;
        }

        if (result.includes("Win")) 
            wins += 1;

        score.innerHTML = `Score: <span>${wins}/3</span>`;
      
          
    }
    if (rounds == 3){
        (wins == 3) ? textHeading.textContent = "You won the game!" : textHeading.textContent = "You lost the game!";
    }











    // let p1Score = 0;
    // let comScore = 0;

    // for (let i = 0; i < 5; i++) {
        
    //     let choice = prompt("Rock, Paper or Scissors?");

    //     let result = playRound(choice, getComputerChoice());
    //     console.log(result);

    //     if (result.includes("tie")){
    //         i -= 1;
    //      } else{
                
    //     (result.includes("Win")) ? p1Score += 1 : comScore +=1 ;

    //     }
        
      
    //  }

    //  (p1Score > comScore) ? console.log("You won the game!") : console.log("You lost the game!")

    //  console.log("Your Score: " + p1Score);
    //  console.log("Computer Score: " + comScore);
}



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





//game();