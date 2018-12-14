let readlineSync = require('readline-sync');

console.log("Welcome to the Terminal Number Guessing Game ")
var userGuess = readlineSync.question(
    "Start Guessing!!!");
var answer = 3;
var guess = readlineSync.question("Pick another")
for (i=0; i < 10; i++){
  if ( i === answer){
    console.log("omg how did you know? You WIN");
    break;
  }else {
    userGuess = readlineSync.question(
        "HAHA Wrong!!!");
  }
}
// user is almost done with game
let playAgain = readlineSync.question('Want to play again? n ');

	if(playAgain.toLowerCase() === 'n') {
		play = false;
	}

console.log("THANKS FOR PLAYING");
