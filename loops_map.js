// loop is an instruction that repeats itself until a condition is met

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//   // console.log("Number " + i);
//   if (i === 2) {
//     console.log("2 is my favorite number");
//     continue;
//   }

//   if (i === 5) {
//     break;
//   }

//   console.log("Number " + i);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10) {
//   console.log("Number " + i);
//   i++;
// }

//DO WHILE LOO
//ALWAYS WILL RUN AT LEAST ONCE

// let i = 0;

// do {
//   console.log("Number" + i);
//   i++;
// } while (i < 10);

// LOOP THROUGH ARRAY
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOREACH
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Karen" },
//   { id: 4, name: "Steve" },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// FORIN LOOP

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
