
  function randomNumberGuessGame(num){
    let x = Math.floor(Math.random() * 10 + 1);
 
    // Counting the number of guesses
    // made for correct Guess
    let guess = 3;
    console.log(x);

    if (num < x) {
        return "ooops! too low. try again";
    } else if(num > x){
        return "uhmmmm too high. you can do this, try once more";
    }else if (num === x){
        return "correct! congratulation  you guessed right";
    }

  }
  console.log (randomNumberGuessGame(60));