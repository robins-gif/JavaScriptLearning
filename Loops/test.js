const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number:"));
let reversed = 0;

while (num > 0) {
    let rem = num % 10;
    reversed = reversed * 10 + rem;
    num = Math.floor(num / 10);
}

console.log("Reversed number:", reversed);