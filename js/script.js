const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  // empty message paragraph
  message.innerText = "";
  // Lets grab what was entered in the input
  const guess = letterInput.value;
 // Lets make sure it is a single letter
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    // We've got a letter! Lets guess!
    makeGuess(guess);
  }
  letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    //Is input empty?
    message.innerText = "Plese enter a letter.";
  } else if (input.length > 1) {
    // did you type more than one letter?
    message.innerText = "Plese enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    //Did you type a number, s special character or some other non letter thing?
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    // we finally got a single letter, omg yay
  }
  return input;
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText="You already guessed that letter, silly. Try again."
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
}

