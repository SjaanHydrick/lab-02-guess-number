// import functions and grab DOM elements
import { compareNumbers } from './utils.js';


const button = document.getElementById('protag');
const dialogue = document.getElementById('dialogue');
const mothMan = document.getElementById('moth-man');
const input = document.getElementById('input');
const buttonBottom = document.getElementById('protag2');
const buttonInput = document.getElementById('protag3');
const resetButton = document.getElementById('reset');

// hidden elements
mothMan.style.visibility = 'hidden';
input.style.visibility = 'hidden';
buttonBottom.style.visibility = 'hidden';
buttonInput.style.visibility = 'hidden';
resetButton.style.visibility = 'hidden';

// to begin
button.addEventListener('click', () => {
    button.style.visibility = 'hidden';
    mothMan.style.visibility = 'visible';
    dialogue.textContent = '\'Sup, human';
    buttonBottom.style.visibility = 'visible';
    buttonBottom.textContent = 'OHMIGOSH';
});

// game introduction
const dialogueOutput = [
    '',
    'I have that effect on people',
    'Moth Monster',
    'I\'ma eat you now',
    'Okay, fine, then let\'s play a game',
    'I\'m thinking of a number, 1 thru 20',
    'You have three tries to guess right',
    'What\'s your first guess?'];

const buttonOutputs = [
    '',
    'WHAT ARE YOU?',
    'UH.',
    'MAYBE DON\'T?',
    'UH?',
    'UHHHH?',
    'OKAY?'];

let dialogueCounter = 0;
let buttonCounter = 0;

buttonBottom.addEventListener('click', () => {
    dialogueCounter++;
    buttonCounter++;
    dialogue.textContent = dialogueOutput[dialogueCounter];
    buttonBottom.textContent = buttonOutputs[buttonCounter];

    if (buttonCounter === 7) {
        buttonBottom.style.visibility = 'hidden';
        buttonInput.style.visibility = 'visible';
        input.style.visibility = 'visible';
    }
});

// Numbers Game and Outputs

let tryCounter = 0;

const correctNumber = Math.floor((Math.random() * 20) + 1);

buttonInput.addEventListener('click', () => {

    if (document.getElementById('input').value === ''){
        alert('You have to guess a number!');
    } else {
        
        const guess = input.valueAsNumber;
        const result = compareNumbers(guess, correctNumber);

        if (result === 1) {
            dialogue.textContent = 'Too High, Tasty Human!';

        } else if (result === -1) {
            dialogue.textContent = 'Too Low, Tasty Human!';

        } else if (result === 0) {
            buttonInput.style.visibility = 'hidden';
            resetButton.style.visibility = 'visible';
            input.style.visibility = 'hidden';
            dialogue.textContent = 'WHAT, YOU GUESSED IT?! I\'m a moth of my word, be on your way';
        }

        tryCounter++;
        
        if (tryCounter === 1) {
            buttonInput.textContent = 'Only Two Chances Left!';  

        } else if (tryCounter === 2) {
            buttonInput.textContent = 'Only One Chance Left!';

        } else if (tryCounter === 3) {
            buttonInput.textContent = 'Uh-Oh...';
            input.style.visibility = 'hidden';

        } else if (tryCounter === 4){
            buttonInput.style.visibility = 'hidden';
            input.style.visibility = 'hidden';
            dialogue.textContent = 'PREPARE TO BE EATEN!!';
            resetButton.style.visibility = 'visible';
            resetButton.textContent = 'Maybe It Was All A Nightmare?';
        }
    }
});

// to reset the page
resetButton.addEventListener('click', () => {
    window.location.reload();
});