/* 
Write a program that prints all the male people's first name given a complex object
*/

const allUsers = [{
    firstName: 'Aman',
    gender: 'male'
}, {
    firstName: 'Harkirat',
    gender: 'male'
},
{
    firstName: 'Nidhi',
    gender: 'female'
}];
// Using for Loop
for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] === 'male') {
        console.log(allUsers[i]["firstName"]);
    }
}
