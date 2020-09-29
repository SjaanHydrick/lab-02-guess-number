// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const button = document.getElementById('protag');
const dialogue = document.getElementById('dialogue');
const mothMan = document.getElementById('moth-man');
const input = document.getElementById('input');
const buttonBottom = document.getElementById('protag2');

mothMan.style.visibility = 'hidden';
input.style.visibility = 'hidden';
buttonBottom.style.visibility = 'hidden';

button.addEventListener('click', () => {
    button.style.visibility = 'hidden';
    mothMan.style.visibility = 'visible';
    dialogue.textContent = '\'Sup, human';
    buttonBottom.style.visibility = 'visible';
    buttonBottom.textContent = 'OHMIGOSH';
    buttonBottom.style.backgroundColor = 'firebrick';
});

buttonBottom.addEventListener('click', () => {
    dialogue.textContent = 'I have that effect on people';
    buttonBottom.textContent = 'WHAT ARE YOU?';

    buttonBottom.addEventListener('click', () => {
        dialogue.textContent = 'Moth Monster';
        buttonBottom.textContent = 'UH.';

        buttonBottom.addEventListener('click', () => {
            dialogue.textContent = 'I\'ma eat you now';
            buttonBottom.textContent = 'MAYBE DON\'T?';

            buttonBottom.addEventListener('click', () => {
                dialogue.textContent = 'Okay, fine, then let\'s play a game';
                buttonBottom.textContent = 'UH?';
                buttonBottom.style.backgroundColor = 'indianred';

                buttonBottom.addEventListener('click', () => {
                    dialogue.textContent = 'I\'m thinking of a number, 1 thru 20';
                    buttonBottom.textContent = 'UHHHH?';

                    buttonBottom.addEventListener('click', () => {
                        dialogue.textContent = 'You have three tries to guess right';
                        buttonBottom.textContent = 'OKAY?';
                    });
                });
            });
        });
    });

});


// Things to Do:
// 1) Make mothMan hidden/appear on 1st click
// 2) Add onClick elements to lead the "story"
// 3) Create input that appears for number entry
// 4) ???
// 5) Profit

