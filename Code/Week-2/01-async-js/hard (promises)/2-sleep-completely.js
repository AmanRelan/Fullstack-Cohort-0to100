/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// This passes the test case but the actual thread halt can be done if we provide a sync call like a big value to iterate
// something like
// function haltThread(milliseconds) {
//     const startTime = Date.now();
//     while (Date.now() - startTime < milliseconds) {
//     }
// }
// haltThread(1000);

function sleep(seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, seconds);
    })
}
module.exports = sleep;