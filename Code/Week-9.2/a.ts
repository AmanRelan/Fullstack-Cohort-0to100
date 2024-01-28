const a: number = 21;
console.log(a);

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
const userJson = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};
function greetUser(user: User) {
  console.log(`Hello ${user.firstName} - ${user.lastName}`);
}
greetUser(userJson);

function isLegal2(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

isLegal2(userJson);

type GreetArg = number | string;
