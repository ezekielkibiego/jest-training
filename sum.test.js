// Basic tests

// const sum = require('./sum');
const validateStringInput = require('./sum');

// test('adds 2 + 3 to equal 5', () => {
//     expect(sum(2, 3)).toBe(5);
// })


// matchers

// toBe

test('two plus five is seven', () => {
    expect(2 + 5).toBe(7);
});

//toEqual

test('object assignment', () => {
    const data = {two: 2};
    data['five'] = 5;
    expect(data).toEqual({two: 2, five: 5});
});


// toBeFalsy

test('null is falsy', () => {
    const m = null;
    expect(m).toBeFalsy();
});

test('Zero is falsy', () => {
    const m = 0;
    expect(m).toBeFalsy();
});

// toBeTruthy

test('One is truthy', () => {
    const m = 1;
    expect(m).toBeTruthy();
});

//Error Handling - toThrow

// test('throws an invalid input', () => {
//     expect(() => {
//         myFunction('Any string');
//     }).toThrow
// })



test('throws an invalid input error for non-string input', () => {
    expect(() => {
        validateStringInput(123); // Pass any non-string value to trigger the error
    }).toThrowError('Invalid input. Expected a string.');
});

test('does not throw an error for valid string input', () => {
    expect(() => {
        validateStringInput('Valid String'); // Pass a valid string to ensure no error is thrown
    }).not.toThrow();
});
