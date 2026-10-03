let secretNumber = Math.floor(Math.random() * 100) + 1;

let input = document.getElementById("guessInput");
let button = document.getElementById("guessButton");
let result = document.getElementById("result");

button.addEventListener("click", function() {

    let guess = Number(input.value);

    if (guess < 1 || guess > 100 || input.value === "") {
        result.textContent = "Please enter a number between 1 and 100.";
    }
    else if (guess === secretNumber) {
        result.textContent = "Correct! You guessed the number!";
    }
    else if (guess < secretNumber) {
        result.textContent = "Too low! Try again.";
    }
    else {
        result.textContent = "Too high! Try again.";
    }

});