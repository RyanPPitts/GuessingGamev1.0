// create secret number

var secretNumber= 4;

// ask user for guess

var stringGuess = Number(prompt("Guess a Number?"));
var guess = Number(stringGuess);

// check if guess is right
if(guess === secretNumber){
alert("You got it right");
}

// otherwise check if higher

else if(guess > secretNumber){
alert("Too high guess again");
}

// other check if lower

else {
  alert("Too low guess again")
}
