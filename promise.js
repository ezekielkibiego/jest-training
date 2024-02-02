function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello jest'), 1000);
    });
}

module.exports = fetchPromise;
