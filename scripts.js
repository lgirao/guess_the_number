let guessButton = document.querySelector(".guess-button");
let guessInput = document.getElementById("guess");
let resultContainer = document.querySelector(".guess-outcome");
let playAgain = document.querySelector(".play-again");

let randomNumber = (Math.floor(Math.random() * 10) + 1);
console.log(randomNumber);

guessButton.addEventListener("click", processGuess);
guessInput.addEventListener("keyup", buttonEvent);

function buttonEvent(e) {
    if(e.code === 'Enter') {
        processGuess();
    }
}

function processGuess() {
    let feedbackText;

    if (guessInput) {
        const guess = Number(guessInput.value);
        console.log(typeof guess);
        if (guess === randomNumber) {
            feedbackText = "Congrats, you guessed right!";
            resultContainer.style.color = 'green';
        } else if (guess < randomNumber) {
            feedbackText = "Too low, guess again.";
        } else {
            feedbackText = "Too high, guess again.";
        }
    }

    if (resultContainer) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        resultContainer.insertAdjacentHTML("afterbegin", `<p>Your guess ${guessInput.value} is: ${feedbackText}</p>`);
    }

    guessInput.value = "";
}

playAgain.addEventListener('click', function () {
    location.reload();
});

