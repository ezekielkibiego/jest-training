// callbacks

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback('Hello jest');
    }, 1000);
}

module.exports = fetchDataWithCallback;
