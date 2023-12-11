/*
Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.
*/

// Returns content in 1s

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//     for (let i = 0; i < 100000000; i++) {
//         i++;
//     }
//     console.log(data);
// });

// Returns content in 2s

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//     for (let i = 0; i < 1000000000; i++) {
//         i++;
//     }
//     console.log(data);
// });


// Returns content in 34s
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function (err, data) {
    for (let i = 0; i < 10000000000; i++) {
        i++;
    }
    console.log(data);
});