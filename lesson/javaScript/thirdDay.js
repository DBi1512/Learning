const PI = Math.PI;

const BODY_TEMPERATURE = 37;

const GRAVITY = 9.8;


console.log('Third day of Js');

console.log(PI);

console.log(Math.round(PI));

console.log(Math.floor(PI));

console.log(Math.ceil(PI));

console.log(Math.sqrt(4));

console.log(Math.sqrt(2));

console.log(Math.abs(-10));

function areaOfCircle(radius) {
  var area = Math.PI * radius * radius; // equal: radius **2;
  return area.toFixed(2);
  /*
  parseInt () # The parseInt () method converts a string into an integer (a whole number ). It accepts two argument. ...
  parseFloat () # The parseFloat () method converts a string into a point number (a number with decimal and points). ...
  Number () # The Number () method converts a string to a number .
  */
}
console.log(areaOfCircle(10));

console.log(typeof areaOfCircle(10))

console.log(Math.floor(Math.random() * 10 + 1)); // or * 11

function rgbColorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}
console.log(rgbColorGenerator());

//SCOPE

function varTest() {
  let x = 1;
  console.log(x);
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
varTest();

for (let i = 0; i < 6; i++) {
  console.log(i);
}
// console.log(i);


const numbers = [1, 2, 3, 4, 5];
const countries = ['Vietnam', 'Finland', 'Spain'];

console.log(numbers);
numbers.push(6);
console.log(numbers);

let arr = [];
for (let i = 0; i < 10; i++) {
  const randNum = Math.floor(Math.random() * 11);
  arr.push(randNum); // same arr[i] = i;
}
console.log(arr);

const names = ['Daniel', 'John', 'Nathan', 'Dean'];
names.push('Hoang');
console.log(names);
names.pop();
console.log(names);
names.unshift('Marta');
console.log(names);
names.shift();
console.log(names);

// FUNCTION

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(fullName('Dean', 'Phan'));
console.log(fullName('Daniel', 'Portman'));

function square(n) {
  return n * n;
}
console.log(square(10));

const fullNameOne = function (firstName, lastName) {
  return firstName + ' ' + lastName;
}

const squareOne = function (n) {
  return n * n;
}
console.log(squareOne(2));

// ARROW FUNCTION

// const fullNameTwo = (firstName, lastName) => {
//   return firstName + ' ' + lastName;
// }

const fullNameTwo = (firstName, lastName) => firstName + ' ' + lastName;

const squareTwo = (n) => n * n;

// OBJECT

const person = {
  firstName: 'Dean',
  lastName: 'Phan',
  age: 33,
  job: 'student',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
  isMarried: true,
  getPersonInfo: function () {
    return `I am ${this.firstName} ${this.lastName}.\nI am ${this.age} years old.\nI am ${this.job}.\nMy skills are ${this.skills}`;
  }
};
console.log(person);
console.log(person.getPersonInfo());

const rectangle = {
  length: 100,
  width: 50,
  getArea: function () {
    return this.length * this.width;
  },
  getPeriMeter: function () {
    return 2 * (this.length + this.width);
  }
}
console.log(rectangle.getArea());
console.log(rectangle.getPeriMeter());