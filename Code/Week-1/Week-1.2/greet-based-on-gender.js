/* 
Question-2
Write a Program that greets a person based on their gender(if else)
*/
function greet(name, gender) {
    if (gender === 'male') {
        console.log(`Hello ${name} Sir`);
    } else {
        console.log(`Hello ${name} Madam.`);
    }
}

greet('Aman', 'male');
greet('Nidhi', 'female');