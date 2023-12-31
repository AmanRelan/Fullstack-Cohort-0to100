/* 
using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time ?

    Can you make it so that it updates every second, and shows time in the following formats -

        - HH: MM:: SS(Eg. 13: 45: 23)

            - HH: MM::SS AM / PM(Eg 01: 45: 23 PM)
*/


setInterval(() => {
    const date = new Date();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const amPm = hours < 12 ? 'AM' : 'PM';
    const currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    console.log(currentTime);
}, 1000);