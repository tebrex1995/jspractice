'use strict';

// function describeCountry(country, population, capitalCity) {
//   const statement = `${country} has ${population} milion people and its capital city is ${capitalCity}`;
//   return statement;
// }

// const serbia = describeCountry("Serbia", 6.8, "Belgrade");
// const vatikan = describeCountry("Vatikan", 0.02, "Vatikan");
// const belgium = describeCountry("Belgium", 11.59, "Brussels");
// const england = describeCountry("England", 44, "London");
// console.log(serbia);
// console.log(vatikan);
// console.log(belgium);

//functional declaration

// function percentageOfWorld1(country, population) {
//   console.log(
//     `${country} has ${population}, so its about ${
//       (population / 7900) * 100
//     } of the world population. `
//   );
// }

// // percentageOfWorld1("Serbia", 6.8);
// // percentageOfWorld1("Belgium", 11.59);
// // percentageOfWorld1("utopia", 1000);

// // const percentage = function (country, population) {
// //   return `${country} has ${population}, so its about ${
// //     (population / 7900) * 100
// //   } of the world population. `;
// // };

// // console.log(percentage("Serbia", 6.8));

// // const percentageOfWorld = (country, population) => {
// //   return `${country} has ${population}, so its about ${
// //     (population / 7900) * 100
// //   } of the world population. `;
// // };

// // const percentageSerbia = percentage("Serbia", 6.8);
// // console.log(percentageSerbia);

// const describe = function describePopulation(country, population) {
//   return percentageOfWorld1(country, population);
// };

// console.log(describe("S", 6));

// Coding challenge #1

// dolphins 44,23,71 koalas 65,54,49

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
//     return console.log(`Dolphins win (${avgDolphins}) vs (${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
//     return console.log(`Koalas win (${avgKoalas}) vs (${avgKDolphins})`);
//   } else {
//     console.log("nobody wins");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

//Arrays

// const population = [6.8, 11, 44, 105];
// const percentageOfWorld = (population) => {
//   return (population / 7900) * 100;
// };
// const percentages = [
//   percentageOfWorld(population[0]),
//   percentageOfWorld(population[1]),
//   percentageOfWorld(population[2]),
//   percentageOfWorld(population[population.length - 1]),
// ];
// console.log(population.length === 4);
// console.log(percentages);'

// const neighbours = ['Bosnia', 'Montenegro', 'Macedonia'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European coutnry :D');
// }
// neighbours[neighbours.indexOf('Bosnia')] = 'Republic of Serbia';
// console.log(neighbours);

// const calcTip = (bill) => {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const myCountry = {
//   country: 'Serbia',
//   capital: 'Belgrade',
//   language: 'serbian',
//   population: 6.8,
//   neighbours: ['Bosnia', 'Montenegro', 'Macedonia'],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} milion ${this.language}  people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//     );
//   },
// };
// console.log(myCountry.describe());
// console.log(
//   `${myCountry.country} has ${myCountry.population} milion ${myCountry.language}  people,${myCountry.neighbours.length} neighbouring countries and a capital caller ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

//Coding challenge BMi

// const markBMI = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   weight: 78,
//   height: 1.69,
//   bmi: function () {
//     return this.weight / this.height ** 2;
//   },
// };
// const johnBMI = {
//   firstName: 'John',
//   lastName: 'Smith',
//   weight: 92,
//   height: 1.95,
//   bmi: function () {
//     return this.weight / this.height ** 2;
//   },
// };

// const bmiCalc = function () {
//   if (markBMI.bmi() > johnBMI.bmi()) {
//     console.log(
//       `${markBMI.firstName}s BMI(${markBMI.bmi()}) is higher than ${
//         johnBMI.firstName
//       }s (${johnBMI.bmi()}) `
//     );
//   } else {
//     console.log(
//       `${johnBmi.firstName}s BMI(${johnBMI.bmi()}) is higher than ${
//         markBMI.firstName
//       }s (${markBMi.bmi()}) `
//     );
//   }
// };
// bmiCalc();

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting.`);
// }

// const population = [6.8, 11, 44, 105];
// // function percentageOfWorld1(population) {
// //   console.log((population / 7900) * 100);
// // }
// const percentages2 = [];
// for (let i = 0; i < population.length; i++) {
//   percentages2.push((population[i] / 7900) * 100);
// }

// console.log(percentages2);
// // const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }
/////////
// const population = [6.8, 11, 44, 105];

// const percentages2 = [];
// for (let i = 0; i < population.length; i++) {
//   percentages2.push((population[i] / 7900) * 100);
// }

//While challenge
// const percentages3 = [];
// let i = 0;
// while (i < population.length) {
//   percentages3.push((population[i] / 7900) * 100);
//   i++;
// }
// console.log(percentages3);
//  22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

/// Calc tip challenge
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (bill) => {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

let i = 0;
while (i < bill.length) {
  tips.push(calcTip(bill[i]));
  totals.push(bill[i] + tips[i]);
  i++;
}
console.log(tips);
console.log(totals);

const array = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
