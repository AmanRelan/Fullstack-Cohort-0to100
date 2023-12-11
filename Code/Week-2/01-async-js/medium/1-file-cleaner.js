/*
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
    ```
hello     world    my    name   is       raman
```

After the program runs, the output should be

    ```
hello world my name is raman
```
*/
const fs = require('fs');

fs.readFile('file-cleaner.txt', 'utf-8', function (err, data) {
    if (err) console.log(err);
    console.log(data);
    let fileData = data;
    let fileWords = fileData.split(' ');
    let finalString = fileWords.filter((singleWord) => singleWord.length > 0).join(' ');
    console.log(finalString);
    fs.writeFile('file-cleaner.txt', finalString, function (err) {
        if (err) console.log(err);
    })
})