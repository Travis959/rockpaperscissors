let playerScore = 0;
let computerScore = 0;

function computerPlay() {  
    let choice = ['Rock','Paper','Scissors'];
    let result = choice[Math.floor(Math.random() * choice.length)];
    return result;
    console.log("Hello");
}

function playRound() {
    let playerChoice = prompt("Choose: Rock/Paper/Scissors",'');
    console.log(playerChoice);
    let computerChoice = computerPlay();
    console.log(computerChoice);
    if (playerChoice.toLowerCase() == "Rock".toLowerCase()) {
        if(computerChoice === "Scissors") {
            ++playerScore;
            return "You win!";
        } else if(computerChoice === "Paper") {
            ++computerScore;
            return "You lose.";
        } else {
            return "You tie.";
        }
    } else if (playerChoice.toLowerCase() === "Paper".toLowerCase()) {
        if (computerChoice === "Scissors") {
            ++computerScore;
            return "You lose.";
          } else if (computerChoice === "Rock") {
            ++playerScore;
            return "You win!";
          } else {
            return "You tie.";
          }
    } else if(playerChoice.toLowerCase() === "Scissors".toLowerCase()) {
        if (computerChoice === "Rock") {
            ++computerScore;
            return "You lose.";
          }else if (computerChoice === "Paper") {
            ++playerScore;
            return "You win!";
          }else {
            return "You tie."
          }
    }
}
function game() {
   console.log (playRound());
   console.log (playRound());
   console.log (playRound());
   console.log (playRound());
   console.log (playRound());

   console.log ("Your Score: "+playerScore);
   console.log ("Computer's Score: "+computerScore);

   if(playerScore > computerScore) {
        console.log("You win the game!");       
   } else if (playerScore < computerScore) {
        console.log("You lose the game!");
   } else {
        console.log("You tied the game!");
   }
   
}
game();