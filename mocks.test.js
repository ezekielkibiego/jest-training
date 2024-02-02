// test('mock a basic function', () => {
//     const mock = jest.fn(x => 42 + x);
//     expect(mock(1)).toBe(43);
//     expect(mock).toHaveBeenCalledWith(1);
// });


// //Spying On

// test('spying on a method of an object', () => {
//     const video = {
//         play() {
//             return true;
//         },
//     };
//      const spy = jest.spyOn(video, 'play');
//      video.play();

//      expect(spy).toHaveBeenCalled();
//      spy.mockRestore();
// })

// Mocking a basic function
test('mock a basic function', () => {
    const mockFunction = jest.fn(x => 42 + x);

    expect(mockFunction(1)).toBe(43);
    expect(mockFunction).toHaveBeenCalledWith(1);
});

// Spying on a method of an object
test('spying on a method of an object', () => {
    const calculator = {
        add(a, b) {
            return a + b;
        },
    };

    // Create a spy on the 'add' method of the 'calculator' object
    const spy = jest.spyOn(calculator, 'add');

    // Call the 'add' method
    calculator.add(2, 3);

    // Expect that the spy has been called
    expect(spy).toHaveBeenCalled();

    // Restore the original method (important to prevent side effects on other tests)
    spy.mockRestore();
});
