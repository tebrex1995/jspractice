'use strict';

// function logger() {
//   console.log("My name is Aleksa");
// }

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1995);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// };

// const age2 = calcAge2(1991);

// console.log(age2);

//Arrow funtion

// const calcAge3 = (birthYear) => 2037 - birthYear;

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const years = new Array(1991, 1974, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// const newLength = friends.push('Jay');
// console.log(newLength);
// friends.unshift('John');

// //Remove elements
// friends.pop(); // Last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift(); // first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// const aleksa = {
//   firstName: 'Aleksa',
//   lastName: 'Tvrdisic',
//   birthYear: 1995,
//   job: 'Qa tester',
//   friends: ['Michael', 'Steven', 'Peter'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2023 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
// };

// // console.log(aleksa);
// // console.log(aleksa['lastName']);

// // console.log(aleksa.lastName);
// // const nameKey = 'Name';
// // console.log(aleksa['first' + nameKey]);
// // console.log(aleksa['last' + nameKey]);

// // // const interestedIn = prompt(
// // //   'What do you want to know about Aleksa? Choose beetwen firstName, lastName,age, job, friends.'
// // // );

// // // if (aleksa[interestedIn]) {
// // //   console.log(aleksa[interestedIn]);
// // // } else {
// // //   console.log(
// // //     'Wrong request! Choose beetwen firstName, lastName,age, job, friends.'
// // //   );
// // // }

// // aleksa.location = 'Portugal';
// // aleksa['twitter'] = '@just4ki';
// // console.log(aleksa);

// // Challenge
// // "Aleksa has 3 friends, and his best friend is called Michael."

// console.log(
//   `${aleksa.firstName} has ${aleksa.friends.length} friends, and his best friend is ${aleksa.friends[0]}`
// );

//Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license."

// const aleksa = {
//   firstName: 'Aleksa',
//   lastName: 'Tvrdisic',
//   birthYear: 1995,
//   job: 'Qa tester',
//   friends: ['Michael', 'Steven', 'Peter'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2023 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
//   },
// };
// console.log(aleksa.getSummary());

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// const aleksa = [
//   'Aleksa',
//   'Tvrdisic',
//   2023 - 1995,
//   'Qa tester',
//   ['Michael', 'Steven', 'Peter'],
// ];

// // for (let i = 0; i < aleksa.length; i++) {
// //   console.log(aleksa[i], typeof aleksa[i]);
// // }

// // const years = [1991, 2007, 1969, 2020];
// // const ages = [];
// // for (let i = 0; i < years.length; i++) {
// //   ages.push(2023 - years[i]);
// // }
// // console.log(ages);

// //continue and break

// console.log('---ONLY STRINGS ---');
// for (let i = 0; i < aleksa.length; i++) {
//   if (typeof aleksa[i] !== 'string') continue;
//   console.log(aleksa[i], typeof aleksa[i]);
// }

// console.log('---Break with nubmer ---');
// for (let i = 0; i < aleksa.length; i++) {
//   if (typeof aleksa[i] === 'number') break;
//   console.log(aleksa[i], typeof aleksa[i]);
// }
// const aleksa = [
//   'Aleksa',
//   'Tvrdisic',
//   2023 - 1995,
//   'Qa tester',
//   ['Michael', 'Steven', 'Peter'],
//   true,
// ];

// for (let i = aleksa.length - 1; i >= 0; i--) {
//   console.log(aleksa[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
//   }
// }

///While loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }
