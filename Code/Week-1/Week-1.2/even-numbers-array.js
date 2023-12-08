/*
Question 4
Write a Program that prints all the even numbers in an array
*/

const ages = [21, 22, 23, 24, 25, 1000];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0) {
        console.log(ages[i]);
    }
}
