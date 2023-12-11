/* 
Write a function processData(data) that returns a new Promise.
This function should simulate a time - consuming data processing task.
Use setTimeout to simulate this delay(e.g., 2 seconds).
The Promise should resolve with the message "Processing complete" if the input data is a non - empty string; 
otherwise, it should reject with the message "Invalid data provided".
*/

function processData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (data !== '') {
                resolve("processing complete")
            } else {
                reject("Invalid data provided");
            }
        }, 2000);
    });
}
let finalAnswer = processData('abc')
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })