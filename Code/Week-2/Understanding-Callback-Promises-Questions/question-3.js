/*
Write a function getData(id, callback) that simulates retrieving data based on an ID.
The function should use setTimeout to simulate a database call that takes 1 second.
If the provided id is a positive number, the callback should be invoked with null 
as the first argument and an object { id: id, data: "Sample data for " + id } as the second argument.
If the id is not a positive number, the callback should be invoked with an error message "Invalid ID" 
as the first argument.
*/

function getData(id, cb) {
    setTimeout(function () {
        if (id > 0) {
            cb(null, { id, data: "Sample data for " + id })
        } else {
            cb("Invalid ID", null);
        }
    }, 1000);
};

getData(1, function (error, data) {
    if (error) { console.log(error) }
    console.log(data);
})