
//Random Number Guessing Game:
//Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.
 
function randomNumberGuessngGame(num){
    let x = Math.floor(Math.random() * 100 + 1);
 
    console.log(x);

    if (num < x) {
        return "ooops! too low. try again";
    } else if(num > x){
        return "uhmmmm too high. you can do this, try once more";
    }else if (num === x){
        return "correct! congratulation  you guessed right";
    }

  }
  
  console.log (randomNumberGuessngGame(50));