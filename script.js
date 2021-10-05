
let playerselection;
let computerselection;
let random;
let computerpoint = 0;
let playerpoint = 0;
const text = document.querySelector('.text');
const computerscore = document.querySelector('.computerscore');
const playerscore = document.querySelector('.playerscore') 


//for (var i=0; i<Infinity; i++) {

    //computerselection = computerplay();

    //playerselection = playerplay();

    //console.log(computerselection,playerselection);

    //game(computerselection,playerselection)

    //if (playerpoint == 5) {
        //alert("You Won!")
        //console.log("player has won the game");
        //break;
    //}

    //if (computerpoint == 5) {
        //alert("Game Over!")
        //console.log("computer has won the game")
        //break;
   // }


//}


playerscore.textContent = playerpoint;
computerscore.textContent = computerpoint;

const btn = document.querySelectorAll('button');

for(let i =0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        let a = computerplay();
        let b = e.target.className
        game(a,b);
        playerscore.textContent = playerpoint;
        computerscore.textContent = computerpoint;
        
        if(playerpoint == 5) {
            playerpoint = 0;
            computerpoint = 0;
            playerscore.textContent = playerpoint;
            computerscore.textContent = computerpoint;
            text.textContent = '';
            alert('you won')
            
        }

        if(computerpoint == 5) {
            computerpoint = 0;
            playerpoint = 0;
            playerscore.textContent = playerpoint;
            computerscore.textContent = computerpoint;
            text.textContent = '';
            alert('you lose')
            
        }
    });

    
}














function randomint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerplay() {

    
    let computerchoice;
    
    number = randomint(1,3);
    if (number == 1) {
        computerchoice = 'rock';
    }
    else if ( number == 2) {
        computerchoice = "paper";
    }
    else {
        computerchoice = "scissor";
    }
    return computerchoice;
    
}

//function playerplay() {

    //let playerchoice = prompt('choose your weapon: ');
    //if (playerchoice.toLocaleLowerCase() == 'rock' || playerchoice.toLocaleLowerCase() == 'paper' || playerchoice.toLocaleLowerCase() == 'scissor' ) {

    //}
   // else {
        //alert('only use: rock, paper, scissor.');
    //}

   // return playerchoice

//}

function game(a,b) {
    if (( a == "rock" && b.toLocaleLowerCase() == "scissor") || ( a == "scissor" && b.toLocaleLowerCase() == "paper") || ( a == "paper" && b.toLocaleLowerCase() == "rock")) {
        computerpoint++;
        console.log("computer won the round!");
        text.textContent = 'computer won the round!';
    }
    else if (a == b.toLocaleLowerCase()) {
        console.log('it\'s a tie');
        text.textContent = 'it\'s a tie';
    }
    else{
        playerpoint++;
        console.log('player won the round');
        text.textContent = 'player won the round!';
        
    }

    
}