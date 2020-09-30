
export function compareNumbers(input){
    const guess = input.valueAsNumber;
    const correctNumber = Math.floor((Math.random() * 20) + 1);

    if (guess > correctNumber) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    } else if (guess === correctNumber) {
        return 0;
    }

}