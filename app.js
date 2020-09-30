// import functions and grab DOM elements

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
const correctNumber = Math.floor((Math.random() * 20) + 1);

const tryOutputs = [
    '',
    'Only Two Chances Left!',
    'Only One Chance Left!',
];

let tryCounter = 0;

buttonInput.addEventListener('click', () => {

    const guess = input.valueAsNumber;

    if (guess > correctNumber) {
        dialogue.textContent = 'Too High, Tasty Human!';
    } else if (guess < correctNumber) {
        dialogue.textContent = 'Too Low, Tasty Human!';
    } else if (guess === correctNumber) {
        buttonInput.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        input.style.visibility = 'hidden';
        dialogue.textContent = 'WHAT! I\'m a moth of my word. Be on your way';
    }

    tryCounter++;
    buttonInput.textContent = tryOutputs[tryCounter];
    if (tryCounter === 3) {
        buttonInput.textContent = 'Uh-Oh...';
        dialogue.textContent = 'MUHAHAHAHAH!';
        input.style.visibility = 'hidden';
    } else if (tryCounter === 4){
        buttonInput.style.visibility = 'hidden';
        input.style.visibility = 'hidden';
        dialogue.textContent = 'PREPARE TO BE EATEN!!';
        resetButton.style.visibility = 'visible';
        resetButton.textContent = 'Maybe It Was All A Nightmare?';
    }
});

// to reset the page
resetButton.addEventListener('click', () => {
    window.location.reload();
});