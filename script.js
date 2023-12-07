// A function that calculates the factorial of a given number.
// DO NOT USE PROMPT, ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE
//Solution

//function calculateFactorial(num) {
  //  let result = 1;

     //Multiply the result by numbers from 2 to the given number using a formula
    //for (let i = 2; i <= num; i++) {
      //  result *= i
//}
    //if(num === 0 || num === 1){
    //return 1;
    //}

  //  return result;

//}

//console.log(calculateFactorial(5));
//console.log("Factorial of 6:", calculateFactorial(6), "| Factorial of 9:", calculateFactorial(9));


//even

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate a random number between 1 and 100
  let randomNumber = getRandomNumber(1, 100);

  // Function to check the user's guess against the random number
  function checkGuess(userGuess) {
  // Check if the user's guess is a valid number between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      return 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < randomNumber) {
      return 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
      return 'Too high! Try again.';
    } else {
      return `Congratulations! ${randomNumber} is correct!`;
    }
  }

  // Example usage with different guess numbers:
let userGuess1 = 30;
console.log(checkGuess(userGuess1));

let userGuess2 = 80;
console.log(checkGuess(userGuess2));

let userGuess3 = 50;
console.log(checkGuess(userGuess3));

// Example with a correct guess
let userGuess4 = randomNumber;
console.log(checkGuess(userGuess4));