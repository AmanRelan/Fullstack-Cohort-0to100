/* 
1. Create a counter in Javascript(counts down from 30 to 0)
2. Calculate the time it takes between a setTimeout call and the innerFunction actually running
3. Create a Terminal Clock(HH:MM:SS)
*/

//Question 1
for (let i = 30; i >= 0; i--) {
    console.log("Counter Value right now is:- ", i);
    if (i === 0) {
        console.log("Counter finished counting till 30");
    }
}

//Question 2
const startTime = Date.now();

setTimeout(() => {
    const endTime = Date.now();
    const actualTimeToComplete = endTime - startTime;
    console.log(`Expected time to complete: 1000 ms, Actual time to complete: ${actualTimeToComplete} ms`);
}, 1000);

//Question 3
function currentTimeDisplay() {
    const timeRightNow = new Date();
    console.log(timeRightNow.toLocaleTimeString());
}
setInterval(currentTimeDisplay, 1000);