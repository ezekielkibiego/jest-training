
const fetchDataWithCallback = require('./callbacks'); 

test('calls the callback with the expected data after a delay', (done) => {
    function callback(data) {
        expect(data).toBe('Hello jest');
        done();
    }

    fetchDataWithCallback(callback);
});
