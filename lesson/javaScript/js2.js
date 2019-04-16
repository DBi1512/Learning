// var firstName = 'Dean';
// var lastName = 'Phan';
// var fullName = firstName + ' ' + lastName;

// console.log(fullName);

// document.write('<h1>We are working with Js</h1>');

console.log('Welcome to JavaScript!', 'The most popular language', 2019);

var firstName;
console.log(firstName);
firstName = 'Dean';
console.log(firstName);
var age = 30;
var gravity = 9.81;
var boilingPoint = 100;
var bodyTemperature = 37;

var numOne = 3;
var numTwo = 4;
var sum = numOne + numTwo;
var diff = numOne - numTwo;
var mult = numOne * numTwo;
var div = numOne / numTwo;
var remainder = numTwo % numOne;
console.log(sum, diff, mult, div, remainder);

console.log('The boiling point of water is ' + boilingPoint + ' oC.\n' +
  'Human body temperature is ' + bodyTemperature + ' oC.\n' +
  'The gravity of the earth is ' + gravity + ' m/s2.');

console.log(`The boiling point of water is ${boilingPoint} oC. 
Human body tempereture is ${bodyTemperature} oC.
The gravity of earth is ${gravity} m/s2.`)

/* === Comparison operators === 

  > , < , >= , <= , == , === , != , !== 

*/

var houseNumber = '1987';
console.log(typeof houseNumber);
console.log(typeof parseFloat(houseNumber));

/* === Logical operators === 

  && , ||

*/

console.log(3 > 1 && 4 > 2);
console.log(3 < 1 && 4 > 2);
console.log(5 < 3 || 8 > 6);
console.log(5 < 3 || 8 < 6);

console.log(10 * 10 == 10 ** 2 && 100 < 10); // 10**2 = 10^2

var items = ['item 1', 'item 2', 'item 3', 'mango'];
var products = ['milk', 'egg', 'sugar', 'cake'];
var someItems = items.slice();


console.log(someItems);
console.log(items.length);
console.log(items[0]);
console.log(items[items.length - 1]);
console.log(items.splice(0, 1));
console.log(items);
console.log(items.splice(0));
console.log(items);

/* === Conditionals === */

var num = 3;

if (num > 10) {
  console.log(`${num} is greater than 10`);
} else {
  console.log(`${num} is less than 10`);
}

// var dayUserInput = prompt('Which day is it? ');
// var day = dayUserInput.toLowerCase();
// switch (day) {
//   case 'monday':
//     console.log('Today is Monday');
//     break;
//   case 'tuesday':
//     console.log('Today is Tuesday');
//     break;
//     case 'wednesday':
//     console.log('Today is Wednesday');
//     break;
//     case 'thursday':
//     console.log('Today is Thursday');
//     break;
//     case 'friday':
//     console.log('Today is Friday');
//     break;
//     case 'saturday':
//     console.log('Today is Saturday');
//     break;
//     case 'Sunday':
//     console.log('Today is Sunday');
//     break;
//   default:
//     console.log('It is not a day');
// }

for (var i = 0; i < 4; i++) {
  console.log(i * 2);
}

// for (var i = 100; i >= 0; i-=10) {
//   console.log(i);
// }

// for (var i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

var sumOfEvens = 0;
var sumOfOdds = 0;

for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEvens = sumOfEvens + i;
    console.log('I am pround to be Even ', i);
  } else {
    sumOfOdds = sumOfOdds + i;
    console.log('Im am proud to be an Odd number ', i)
  }
}
console.log(`The sumOfEvens is ${sumOfEvens}. The sumOfOdds is ${sumOfOdds}`);


function sumTwoNumbers() {
  var numOne = 1;
  var numTwo = 2;
  return numOne + numTwo;
}
console.log(sumTwoNumbers());


function sumNum(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(sumNum(2, 6));


function sumEvensOrOdds () {
  var sumOfEvens = 0;
  var sumOfOdds = 0;

  for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      sumOfEvens = sumOfEvens + i;
    } else {
      sumOfOdds = sumOfOdds + i;
    }
  }
  
  return { evens: sumOfEvens, odds: sumOfOdds };
  return `The sumOfEvens is ${sumOfEvens}. The sumOfOdds is ${sumOfOdds}`;
  return [sumOfEvens, sumOfOdds];
}
console.log(sumEvensOrOdds());


function sumOfNumbers() {
  var sumNum = 0;

  for (var i = 0; i <= 30; i++) {
    sumNum = sumNum + i;
  }

  return sumNum;
}
console.log(sumOfNumbers());
