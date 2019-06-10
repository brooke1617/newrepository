var letter = ["a","i", "e","o", "u"];
var computerChoice = "";
var wins = 0;
var loses = 0;
var guessesLeft = null;
var guessesSofar = null;
document.onkeyup = function(event) {
    console.log(event.key);


    // // Determines which key was pressed.
     var userGuess = event.key;

    // // Randomly chooses a choice from the options array. This is the Computer's guess.
     computerChoice = letter[Math.floor(Math.random() * letter.length)];
    console.log(computerChoice);
    if (userGuess === computerChoice) {
        wins++;
        console.log(wins)    
    }

    else {loses++
    console.log(loses)
    }
    
    // // Reworked our code from last step to use "else if" instead of lots of if statements.

    // // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    //if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    //   if ((userGuess === "r" && computerGuess === "s") ||
    //     (userGuess === "s" && computerGuess === "p") || 
    //     (userGuess === "p" && computerGuess === "r")) {
    //     wins++;
    //   } else if (userGuess === computerGuess) {
    //     ties++;
    //   } else {
    //     losses++;
    //   }

    //   // Hide the directions
       //directionsText.textContent = "choices are a, e, i, o, u";

    //   // Display the user and computer guesses, and wins/losses/ties.
    //   userChoiceText.textContent = "You chose: " + userGuess;
    //   computerChoiceText.textContent = "The computer chose: " + computerGuess;
    //   winsText.textContent = "wins: " + wins;
    //   lossesText.textContent = "losses: " + losses;
    //   tiesText.textContent = "ties: " + ties;
    // }

}
