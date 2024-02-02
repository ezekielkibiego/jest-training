const fetchPromise = require('./promise');

test('resolves with the expected data after a delay', () => {
    return fetchPromise().then((data) => {
        expect(data).toBe('Hello jest');
    });
});

// Alternatively, you can use async/await syntax
test('resolves with the expected data after a delay using async/await', async () => {
    const data = await fetchPromise();
    expect(data).toBe('Hello jest');
});


// test('the fetch fails with an error', () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// });