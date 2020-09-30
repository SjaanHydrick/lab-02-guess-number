// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const button = document.getElementById('protag');
const dialogue = document.getElementById('dialogue');
const mothMan = document.getElementById('moth-man');
const input = document.getElementById('input');
const buttonBottom = document.getElementById('protag2');
const buttonInput = document.getElementById('protag3');

mothMan.style.visibility = 'hidden';
input.style.visibility = 'hidden';
buttonBottom.style.visibility = 'hidden';
buttonInput.style.visibility = 'hidden';

button.addEventListener('click', () => {
    button.style.visibility = 'hidden';
    mothMan.style.visibility = 'visible';
    dialogue.textContent = '\'Sup, human';
    buttonBottom.style.visibility = 'visible';
    buttonBottom.textContent = 'OHMIGOSH';
});

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
    }
});





// 3) Create input that appears for number entry
// 4) ???
// 5) Profit

