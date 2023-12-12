/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve() }, n * 1000)
    });
}

const startTime = new Date().getTime();
const ans = wait(2);
ans.then(function (resolvedValue) {
    const endTime = new Date().getTime();
    const difference = endTime - startTime;
    return difference;
});
module.exports = wait;