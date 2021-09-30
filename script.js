
let playerselection;
let computerselection;
let random;
let computerpoint = 0;
let playerpoint = 0;


for (var i=0; i<Infinity; i++) {

    computerselection = computerplay();

    playerselection = prompt('choose your weapon: ');
    if (playerselection.toLocaleLowerCase() == 'rock' || playerselection.toLocaleLowerCase() == 'paper' || playerselection.toLocaleLowerCase() == 'scissor' ) {

    }
    else {
        i--;
        alert('only use: rock, paper, scissor.');
        continue;
    }

    game(computerselection,playerselection)

    if (playerpoint == 5) {
        alert("You Won!")
        console.log("player has won the game");
        break;
    }

    if (computerpoint == 5) {
        alert("Game Over!")
        console.log("computer has won the game")
        break;
    }


}
















function randomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerplay() {

    
    let choice;
    
    number = randomint(1,3);
    if (number == 1) {
        choice = 'rock';
    }
    else if ( number == 2) {
            choice = "paper";
    }
    else {
        choice = "scissor";
    }
    return choice;
    
}

function game(a,b) {
    if (( a == "rock" && b.toLocaleLowerCase() == "scissor") || ( a == "scissor" && b.toLocaleLowerCase() == "paper") || ( a == "paper" && b.toLocaleLowerCase() == "rock")) {
        computerpoint++;
        console.log("computer won the round!");
    }
    else if (a == b.toLocaleLowerCase()) {
        console.log('it\'s a tie');
    }
    else{
        playerpoint++;
        console.log('player won the round');
    }
}