import inquirer from "inquirer";
let computerGuess = Math.floor((Math.random() * 10) + 1);
let guess = await inquirer.prompt([
    {
        message: "Guesss any number betwenn 1 to 10:",
        type: "number",
        name: "userGuess",
    },
]);
console.log(`Computer guess: ${computerGuess}`);
if (guess.userGuess === computerGuess) {
    console.log(`Congratulations! You Win.`);
}
else {
    console.log(`You Lose. Try Again`);
}
