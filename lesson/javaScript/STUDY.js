/* 
    //document.write('Lets learn some JavaScript');
    today 
    we will talk about
    data types and others


   var firstName = 'Dean';
   var lastName = 'Phan';
   var age = 33;
   var country = 'Finland';
   // var fullName = firstName + ' ' + lastName;
   console.log(firstName);
   console.log(lastName);
   // console.log(fullName);

   // var personInfo = `I am ${fullName}. I am ${age} years old. I live in ${country}.`;
   // console.log(personInfo);

   //Length, split, slice,indexOdd, lastIntedex

   var firstName = 'What a long name';
   var firstLetter = firstName.slice(0,1);
   var remainingLetters = firstName.slice(1, firstName.length);
   console.log(firstLetter);
   console.log(remainingLetters);
   var modifiedName = firstLetter.toUpperCase() + remainingLetters;
   console.log(modifiedName);
   
   
   var school = 'Integrify Academy';
   console.log(school.split(' '));
   console.log(school.indexOf('A'));
   console.log(school.lastIndexOf('A'));
   console.log(school.includes('demy'));
   console.log(school.startsWith('Inte'));


   var numOne = 10;
   var numTwo = 20;
   var sum = numTwo % numOne;
   console.log(sum);

   var a = 7;
   var b = 3;
   console.log(7 % 3);

   var weather = 'sunny';
   // ==, ===, <, >, <=, >=, != 
   // && ||

   if (weather === 'rainy') {
     console.log('It is raining. You need a raincoat.');
   } else if (weather === 'cloudy') {
     console.log('It might be cold. You need a jacket.');
   } else if (weather === 'sunny') {
     console.log('Sunnnnnnn! Go out!');
   } else {
     console.log('It is not raining. No need for raincoat.');
   }

   //shorter version

if (isRaining) console.log('It is raining. You need a raincoat.');
     else console.log('It is not raining. No need for raincoat.');

switch (weather) {
  case 'rainy':
    console.log('It is raining. You need a raincoat.');
    break;
  case 'cloudy':
    console.log('It might be cold. You need a jacket.');
    break;
  case 'sunny':
    console.log('Sunnnnnnn! Go out!');
    break;
  default:
    console.log('It is not raining. No need for raincoat.');
}


// for loop
// for(initialization; condition; increment) {
// }

// for (var i = 1; i <= 10; i = i++) {
//   console.log(`${i}x${i}=${i * i}`);
// }

var i = 0;
while (i <= 10) {
  console.log(`${i}x${i}=${i * i}`);
  i++;
}

var j = 11;
do {
  console.log(`${j}x${j}=${j * j}`);
  j++;
} while (j <= 10);


// FUNCTION

function printFullName(firstName, lastName) {
  // console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}
// printFullName('Nathan', 'Fuller');
// printFullName ('Dean', 'Phan');
console.log(printFullName('Dean', 'Phan'));


function addNumbers(numOne, numTwo) {
  // console.log(numOne + numTwo);
  return numOne + numTwo;
}
console.log(addNumbers(2, 6));

function square(number) {
  return number * number;
}
console.log(square(10));

function multiplyTwoNumber(numOne, numTwo) {
  return numOne * numTwo;
}
console.log(multiplyTwoNumber(20, 4));


// ARRAYS

var shoppingCart = ['milk', 'egg', 'sugar', 'cucumber'];

for (var i = 0; i < shoppingCart.length; i++) {
  console.log(`I buy ${shoppingCart[i]}`);
}

for (var i = shoppingCart.length - 1; i >= 0; i--) {
  console.log(`I would like to buy ${shoppingCart[i]}`);
}


var numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);
console.log(numbers.length);

for (var i = 0; i < numbers.length; i++) {
  console.log(`Number ${numbers[i]}`);
}

for (var i = numbers.length - 1; i >= 0; i--) {
  console.log(`Number backward ${numbers[i]}`);
}


var arr = [1, 2, 3, 4, 5, 6];

function sumArrayValue(arr) {
  var sum = 0;
  for (var j = 0; j < arr.length; j++) {
    sum = sum + arr[j];
  }
  return sum;
}

console.log(sumArrayValue(arr));


*/


let firstName;
console.log(firstName);
firstName = 'Dean';
console.log(firstName);
let lastName = 'Phan';
console.log(lastName);

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let country = 'America';
country = 'Finland';
console.log(country);

let population = 6e6;
console.log(population);

let numOne = 3;
let numTwo = 4;
const gravity = 9.81;
const PI = 3.14;
let isRaining = false;
let isLightOn = false;
let isMarried = true;

console.log(typeof country, typeof numOne, typeof isLightOn);

console.log(`The sum of ${numOne} and ${numTwo} is ${numOne + numTwo}`);

// Arthimetic operations
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mul = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;

numOne = 3;
numTwo = 4;
console.log(remainder);

// Comparison Operators: >, <, >=, <=, ==, ===, !=, !==
console.log(4 > 3);
console.log(4 !== '4');

// Logical operators:
// &&, ||, !

// operand1, operand2 = true;
// true && true = true;
// true && false = false;
// false && false = false;

let allEvens = 0;
let allOdds = 0;

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i % 2 === 0) {
    allEvens = allEvens + 1;
  } else {
    allOdds++;
  }
}
console.log(allEvens, allOdds);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[numbers.length - 1]);
// or
let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]);

let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);
console.log('The average of the array items', total / numbers.length);

function creatSevenRandNums() {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
}
console.log(creatSevenRandNums());

function printFullName(firstName = 'John', lastName = 'Dow') {
  return firstName + ' ' + lastName;
}
console.log(printFullName());
console.log(printFullName('Dean', 'Phan'));

// Arrow function

const areaOfCircle = (r = 10) => Math.PI * r * r;

console.log(areaOfCircle());
console.log(areaOfCircle(20).toFixed(2));

// FIFTH DAY ===============================================================================================

// for OF ARRAY

const someNumbers = [1, 2, 3, 4, 5];
for (let num of someNumbers) {
  console.log(num);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
  //
  if (i === 3) continue;
  console.log(i);
}

// for IN OBJECT

const person = {
  name: 'David',
  age: 200,
  country: 'Finland',
};
for (let key in person) {
  console.log(key);
}

const names = ['Dean', 'Nathan', 'Jussi'];
for (let name in names) {
  console.log(name);
  console.log(names[name]);
}

// FOR EACH - only use for array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// convert to forEach
names.forEach(function (name, index) {
  console.log(index + 1, name.toUpperCase());
});
// arrow function
names.forEach((name, i) => {
  console.log(i + 1, name.toUpperCase());
});
// short arrow function
names.forEach((name, i) => console.log(i + 1, name.toUpperCase()));

// map() - return array that we can modify
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const newNames = names.map(function (name, i) {
  if (name !== 'Nathan') {
    return name.toUpperCase();
  }
  return name;
});
console.log(newNames);
//
const nums = [0, 1, 2, 3, 4, 5];
const numsSquare = nums.map(function (num, i) {
  return num * num;
})
console.log(numsSquare);

// filter() // reduce some items in array

const numbersGreater2 = nums.filter(function (num, i) {
  return num > 2;
})
console.log(numbersGreater2);
//
const countries = ['Finland', 'Sweden', 'Norway', 'Iceland', 'Netherland', 'USA'];
const landCountries = countries.filter((country, i) => country.includes('land'));
console.log(landCountries);
//
const longCountries = countries.filter((country) => country.length === 6);
console.log(longCountries);

// reduce() - reduce array to short ...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const points = [1, 2, 3];
const totalReduce = points.reduce(function (acc, curr) {
  return acc * curr
}, 4);
console.log(totalReduce);

// find() - look for the 1st value founded.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const findPoints = [1, 2, 3, 4, 5, 6, 'name', 'age']
const value = findPoints.find(function (num) {
  return typeof num === 'string';
})
console.log(value);

// findIndex() - 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const bools = [true, false, true, true];
const boolValue = bools.findIndex(function (bool) {
  return bool === false;
})
console.log(boolValue);

// method setInterval, setTimeout

function sayHello() {
  console.log('Hello')
}
sayHello();

let interval = setInterval(sayHello, 3000);
clearInterval(interval);
//
function sayGoodbye() {
  console.log('Done');
};
// setTimeout(sayGoodbye, 3000);

// DOM - Document Object Model
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

const personDom = {
  name: 'Dean',
  age: 33,
  country: 'Finland',
  skills: ['HTML', 'CSS', 'JavaScript'],
  address: {
    street: ' Köydenpunojankatu 8',
    post: '00180',
    city: 'Helsinki',
  },
  getPersonInfo: function () {
    return `I am ${this.name} & I live in ${this.country}. I am ${this.age}.`
  },
}
console.log(personDom);
console.log(personDom.name);
console.log(personDom.address);
console.log(personDom.skills[2]);

personDom.nationality = 'VN';
personDom.job = 'student';
console.log(personDom);

//Object methods: Object, assign, Object.keys, Object.values, Object.entries (key & value as each array)
//hasOwnProperty

// const personDomTwo = personDom;
// console.log(personDomTwo);

const personDomTwo = Object.assign({}, personDom);
console.log(personDomTwo);
const keys = Object.keys(personDom);
console.log(keys);
const address = Object.keys(personDom.address);
console.log(address);
const values = Object.values(personDom);
console.log(values);
const entries = Object.entries(personDom);
console.log(entries);
console.log(personDom.hasOwnProperty('name'));
console.log(personDom.hasOwnProperty('score'));

if (personDom.name === 'Dean') {
  console.log('User exist');
} else {
  console.log('User is not found');
}

// DOM