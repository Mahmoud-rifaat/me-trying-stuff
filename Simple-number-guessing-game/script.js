/*

UI:
1-a simple heading and paragraph for a guessNumber game.
2-a label and a text box to get the user input.
3-a message of hiOrLow.
4-a message of previousGuesses.
5-a message of successOrFailure.
6-a resetGameButton.
7-if exceeded 10 attempts shadow out the input area and print game over and show resetGameButton.
8-if a guess is right shadow out the input area and print congrats and show resetGameButton

input from user:
get a userGuess.
press the submit button.
a click on the resetGameButton.

output to user:
--static:
1-a simple heading and paragraph for a guessNumber game.
2-a label and a text box to get the user input.
--dynamic:
1-a message of hiOrLow.
2-a message of previousGuesses.
3-a message of successOrFailure.
4-a resetGameButton.


processing input into output:

variables:
randomNumber
userGuess
numberOfAttempts


functinos:


*/

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){

    const userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }else{
        lastResult.textContent = 'Wrong! Try again.';
        lastResult.style.backgroundColor = 'red';
        if(userGuess >  randomNumber){
            lowOrHi.textContent = 'Last guess was too high!';
        }else if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess was too low!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(const resetPara of resetParas){
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}