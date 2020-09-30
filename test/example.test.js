// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('compareNumbers will return a 1 for value 1 being high', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(12, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('compareNumbers will return a -1 for value 1 being low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(9, 12);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('compareNumbers will return a 0 for value 1 being equal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(9, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});