/* 
Write a function performOperation(value, operationCallback) that takes a numerical value 
and an operationCallback.The function should simulate a calculation process with a delay
(use setTimeout for a 1 - second delay).
The operationCallback should be a function that takes the value and returns a new value.
After the delay, performOperation should log the result of calling operationCallback with value.

For example, if operationCallback is a function that multiplies the value by 2, and value is 5, 
performOperation should log 10 after a 1 - second delay.
*/
function performOperation(value, operationCb) {
    console.log("Calculating Operation");
    setTimeout(function () {
        console.log(operationCb(value));
    }, 1000)
};

function multiplicationBy9Operation(a) {
    return a * 9;
};
function additionBy9Operation(a) {
    return a + 9;
};
function multiplicationBy19Operation(a) {
    return a * 19;
};
function divideBy7Operation(a) {
    return a / 7;
}

performOperation(7, multiplicationBy9Operation);
performOperation(7, additionBy9Operation);
performOperation(7, multiplicationBy19Operation);
performOperation(42, divideBy7Operation);