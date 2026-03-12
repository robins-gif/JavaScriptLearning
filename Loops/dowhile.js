// do{
//     // work
// }while(condition)

// let i=11;

// do{
//     console.log(i);
//     i++;
// }while(i<=10)
const prompt = require("prompt-sync")();

let guess=8;
let userguess;

do{
    userguess = prompt("Guess the number between 0 to 10 ");
}while(userguess!=guess)

console.log("You guessed the right number ", guess);