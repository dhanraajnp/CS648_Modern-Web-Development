function displayTitle() {
    "use strict";   
    window.alert("Welcome to the Rock, Paper, Scissors Game!");
}

function playGame(){
    "use strict";

    var computerChoice = Math.random();
    console.log("Computer:-"+computerChoice)
    var isRock = Boolean (computerChoice >= 0 && computerChoice < 0.3)
    var isPaper = Boolean (computerChoice >= 0.31 && computerChoice < 0.6)

    var humanChoice = prompt('Choose Either of Rock(R), Paper(P), Scissors(S)');
    var isHumanChoiceRock = Boolean (humanChoice.toUpperCase() == "R" || humanChoice.toLowerCase() == "rock");
    var isHumanChoicePaper = Boolean (humanChoice.toUpperCase() == "P" || humanChoice.toLowerCase() == "paper");
    var isHumanChoiceScissors = Boolean (humanChoice.toUpperCase() == "S" || humanChoice.toLowerCase() == "scissors");

    if(isRock){
        // computer is Rock
        if(isHumanChoiceRock){
            alert("It's a draw");
        } else if(isHumanChoicePaper){
            alert("You win");
        } else{
            alert("You lose");
        }
    } else if (isPaper){
        // computer is Paper
        if(isHumanChoiceScissors){
            alert("You win");
        } else if(isHumanChoicePaper){
            alert("It's a draw");
        } else{
            alert("You lose");
        }
    } else {
        // coomputer is Scissors
        if(isHumanChoiceRock){
            alert("You win");
        } else if(isHumanChoiceScissors){
            alert("It's a draw");
        } else{
            alert("You lose");
        }
    }
}

function main() {
    "use strict";
    
    displayTitle();
    var playagain = "y";
    while (playagain === "y") {
        playGame();
        playagain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing!");
}
main();
