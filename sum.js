function sum(a, b) {
    return a + b;
}

module.exports = sum;


// function myFunction(input) {
//     if (typeof input !== 'number'){
//         throw new Error('invalid Input')
//     }
// }

// module.exports = myFunction;


function validateStringInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Invalid input. Expected a string.');
    }
}

module.exports = validateStringInput;
