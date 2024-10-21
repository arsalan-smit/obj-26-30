let num = +prompt("Enter a positive integer:");
alert(`Number: ${num}\nRound off value: ${Math.round(num)}\nFloor value: ${Math.floor(num)}\nCeil value: ${Math.ceil(num)}`);

let negNum = +prompt("Enter a negative floating point number:");
alert(`Number: ${negNum}\nRound off value: ${Math.round(negNum)}\nFloor value: ${Math.floor(negNum)}\nCeil value: ${Math.ceil(negNum)}`);

let number = +prompt("Enter any number:");
alert(`Absolute value: ${Math.abs(number)}`);

let diceRoll = Math.floor(Math.random() * 6) + 1;
alert(`Dice value: ${diceRoll}`);

let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
alert(`Coin toss result: ${coinToss}`);

let randomNum = Math.floor(Math.random() * 100) + 1;
alert(`Random number between 1 and 100: ${randomNum}`);

let weightInput = +prompt("Enter your weight:");
alert(`Your weight is: ${weightInput} kilograms`);

let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = +prompt("Guess a number between 1 and 10");
if (userGuess === secretNum) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert(`Try again! The secret number was ${secretNum}`);
}


      
      