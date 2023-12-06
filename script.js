// A function that calculates the factorial of a given number.
// DO NOT USE PROMPT, ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE
//Solution

function calculateFactorial(num) {
    let result = 1;

     //Multiply the result by numbers from 2 to the given number using a formula
    for (let i = 2; i <= num; i++) {
        result *= i
}
    //if(num === 0 || num === 1){
    //return 1;
    //}

    return result;

}

//console.log(calculateFactorial(5));
console.log("Factorial of 6:", calculateFactorial(6), "| Factorial of 9:", calculateFactorial(9));
