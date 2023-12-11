/*
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

let stringToBeAdded = 'This is a valid new asda stringadded to the bottom';
let stringToBeAddedToWriteFile = 'String written to FS.writefile';

fs.writeFileSync('a.txt', stringToBeAdded, function (err) {
    if (err) { console.error(err) };
    console.log("File written")
})
fs.writeFile('createdByFsModule.txt', stringToBeAddedToWriteFile, function (err) {
    if (err) console.log(err);
    console.log("File written by fs.writeFile");
})