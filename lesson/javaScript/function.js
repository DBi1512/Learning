let firstName = 'Dean';
let lastName = 'Phan';
let maritalStatus = 'married';
let country = 'Finland';
let age = 33;

//4

// var firstName = 'Dean',
//   lastName = 'Phan',
//   maritalStatus = 'married',
//   country = 'Finland',
//   age = 33;

//5

let myAge = 25;
let yourAge = 30;
console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`)

//EXERCISE 3 - DATA TYPES

console.log(typeof firstName, typeof lastName, typeof maritalStatus, typeof country, typeof age, typeof myAge, typeof yourAge);

// EXERCISE 5

let operandOne = 4;
let operandTwo = 3;

console.log(operandOne + operandTwo);
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo);

operandOne++;
operandTwo++;
console.log(operandOne);
console.log(operandTwo);

operandOne--;
operandTwo--;
console.log(operandOne);
console.log(operandTwo);

// EXERCISE 6

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// EXERCISE 7

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// FUNCTION
//1 Declare a function fullName and it print out your full name.

// function fullName() {
//   var firstName = 'Dean';
//   var lastName = 'Phan';
//   return firstName + ' ' + lastName;
// }
// console.log(fullName());

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(fullName('Dean', 'Phan'));

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(addNumbers(3, 6));

//4 An area of a rectangle is calculated as follows: area = lenght x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(2, 5));

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  var perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(3, 5));

//6 A volume of a rectangular prism is calculated as follows: volume = lenght x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  var volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(2, 3, 4));

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const PI = Math.PI;

function areaOfCircle(r) {
  let area = PI * r * r;
  return area;
}
console.log(areaOfCircle(3));

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
  let circum = 2 * PI * r;
  return circum;
}
console.log(circumOfCircle(10));

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubstance(mass, volume) {
  var density = mass / volume;
  return density;
}
console.log(densityOfSubstance(4, 2));

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a fucntion which calculates a speed of a moving object, speed.

function speed(q, t) {
  let v = q / t;
  return v;
}
console.log(speed(30, 2));

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightOfSubstance(mass, gravity) {
  var weight = mass * gravity;
  return weight;
}
console.log(weightOfSubstance(4, 5));

//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converst oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit(oC) {
  let oF = 0;
  oF = (oC * (9 / 5)) + 32;
  return oF;
}
console.log(convertCelciusToFahrenheit(25));

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obsese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bodyMassIndex(weightInKg, height) {
  let bmi = weightInKg / (height * height);
  return bmi;
}
console.log(bodyMassIndex(65, 1.65));

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  switch (month) {
    case 'December' || 'January' || 'Febuary':
      console.log('Winter');
      break;
    case 'March' || 'April' || 'May':
      console.log('Spring');
      break;
    case 'June' || 'July' || 'August':
      console.log('Summer');
      break;
    case 'September' || 'October' || 'November':
      console.log('Falls');
      break;
    default:
      console.log('Check spelling. For example: January');
      break;
  }
}
checkSeason('June');

//15 Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.

function solvLinEquation(a, b, y) {
  let x = 0;
  x = (y - b) / a;
  return x;
}
console.log(solvLinEquation(2, 4, 8));

//16 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solvQuadEquation(a, b, c, y) {
  let x = 0;
  let discr = b ** 2 - 4 * a * c;
  if (discr < 0) {
    console.log(`The equation has no solution.`)
  } else if (discr === 0) {
    x = -b / (2 * a);
  } else {
    let solOne = (-b + Math.sqrt(discr)) / (2 * a);
    let solTwo = (-b - Math.sqrt(discr)) / (2 * a);
    console.log(`x = ${solOne} or x = ${solTwo}`);
  }
}
solvQuadEquation(4, 5, 1, 0);

//17 Declare a function name printArray. It takes array as a parameter and it prints out each value of thearray.

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Phuc'];

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  return array;
}
printArray(itCompanies);

//18 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use method).

function reverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  return arr;
}
reverseArray(itCompanies);

//19 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray() {
  for (let i = 0; i < itCompanies.length; i++) {
    let capitalCompanies = itCompanies[i].charAt(0).toUpperCase() + itCompanies[i].slice(1);
    console.log(capitalCompanies);
  }
}
capitalizeArray();

//20 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item) {
  var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Phuc'];
  itCompanies.push(item);
  return itCompanies;
}
console.log(addItem('Dean'));

// or

function newItem(item) {
  itCompanies.splice(2, 0, item);
  return itCompanies;
}
console.log(newItem('Hoang'));

//21 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function remove(i) {
  itCompanies.splice(i, 1);
  return itCompanies;
}
console.log(remove(2));

//22 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

let sumNum = 0;

function sumOfNumbers(num) {
  for (var i = 0; i <= num; i++) {
    sumNum = sumNum + i;
  }
  return sumNum;
}
console.log(sumOfNumbers(5));

//23 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfOdds(6));

//24 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEvens(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfEvens(8));

//25 Declare a function name evensAndOdds	. It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

function evensAndOdds(num) {
  let numOfOdds = 0;
  let numOfEvens = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      numOfOdds++;
    } else {
      numOfEvens++;
    }
  }
  return `evensAndOdds(${num});\nThe number of odds are ${numOfOdds}.\nThe number of evens are ${numOfEvens}.`
}
console.log(evensAndOdds(100));

/*Extra
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'Ibm', 'Oracle', 'Amazon', 'Phuc'];
var checkCompany = prompt('Something: ');

for (var item = 0; item < itCompanies.length; item++) {
  checkCompany = checkCompany.charAt(0).toUpperCase() + checkCompany.slice(1).toLowerCase();
  if (checkCompany === itCompanies[item]) {
    console.log(`${checkCompany} found`);
    var found = true;
    break;
  }
  if(!found) {
    console.log(`${checkCompany} is not found!`);
  }
}

var arr = ['One', 'Two', 'Three'];
var nameInput = prompt(" Enter A Name")

for (var item = 0; item < arr.length; item++) {  
  nameInput = nameInput.charAt(0).toLocaleUpperCase() +
    nameInput.slice(1).toLowerCase();
  if (nameInput === arr[item]) { 
    console.log(arr[item] + ' was matched');
    var found = true;
    break;
  } else { 
    console.log(arr[item] + ' wasnt matched ')
    }
}
*/

//26 Write a funcition which takes any number of arguments and return the sum of the arguments
// sum(1,2,3) // -> 6
// sum(1,2,3,4) // -> 10

function sumOfAny() {
  var s = 0;
  for (var i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
  return s;
}
console.log(sumOfAny(4, 8, 6, -2));

// Write a function which generates a randomUserIp.

function randomUserIp() {
  let ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
  return ip;
}
console.log(randomUserIp());

// Write a function which generates a randomMacAddress

function randomMacAddress() {
  const hexDigits = '0123456789ABCDEF';
  let mac = '';
  for (let i = 0; i < 6; i++) {
    mac = mac + hexDigits.charAt(Math.round(Math.random() * 15));
    mac += hexDigits.charAt(Math.round(Math.random() * 15));
    if (i !== 5) {
      mac = mac + ':';
    }
  }
  return mac;
}
console.log(randomMacAddress());

//27 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

function randomHexaNumberGenerator() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomHexaNumberGenerator());

console.log(itCompanies);

for (let i = 0; i < itCompanies.length; i++) {
  let newCom = i + 1 + ' ';
  newCom = newCom + itCompanies[i].toUpperCase();
  console.log(newCom);
}

//28 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

function userIdGenerator() {
  var numAndLetters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWZYX';
  var id = '';
  for (var i = 0; i < 7; i++) {
    id = id + numAndLetters[Math.floor(Math.random() * 36)];
  }
  return id;
}
console.log(userIdGenerator());

//29 Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// "kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// "
// userIdGeneratedByUser()
// "1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// "

var numOfCharacters = 3;
var numOfIds = 2;

function userIdGeneratedByUser() {

  function userIdGenerator() {
    var numAndLetters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWZYX';
    var id = '';
    for (var i = 0; i < numOfCharacters; i++) {
      id = id + numAndLetters[Math.floor(Math.random() * 36)];
    }
    return id;
  }
  for (var i = 0; i < numOfIds; i++) {
    console.log(userIdGenerator());
  }

}
userIdGeneratedByUser();

//30 Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}
console.log(rgbColorGenerator());

//31 Use the new Date() object to get month, date, year, hour and minute.

let whatDate = new Date();
console.log(whatDate);

//32 Write a function name displayDateTime which display time in this format: 28/08/2018 04:08
// displayDateTime()
// 28/08/2018 04:08

function displayDateTime() {
  let whatDay = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let whatDate = new Date().getDate();
  let whatMonth = new Date().getMonth();
  let whatYear = new Date().getFullYear();
  let whatHour = new Date().getHours();
  let whatMinute = new Date().getMinutes();
  return `${days[whatDay.getDay()]} ${whatDate}/${whatMonth}/${whatYear} ${whatHour}:${whatMinute}`;
}
console.log(displayDateTime());

//33 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffeArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }
  return array;
}
console.log(shuffeArray(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']));

//34 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(n) {
  let factory = 1;
  for (let i = 1; i <= n; i++) {
    factory = factory * i;
  }
  return factory;
}
console.log(factorial(4));

//35 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(para) {
  if (para) {
    console.log('NOT empty');
  } else {
    console.log('Empty');
  }
}
isEmpty('');

//36 Call your function sum, it takes any number of arguments and it returns the sum.

function sum() {
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
  return s;
}
console.log(sum(15, 20, 30));

//37 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(array) {
  let sum = 0;
  if (array.some(isNaN)) {
    console.log(`One or few items is not a number.`);
  } else {
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    console.log(sum);
  }

}
sumOfArrayItems([1, 2, 3, 'go']);

//38 Write a function called average, it takes an array parameter and returns the average the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(array) {
  let sum = 0;
  let avr = 0;
  if (array.some(isNaN)) {
    console.log(`One or few items is not a number.`);
  } else {
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    avr = sum / array.length;
    console.log(avr);
  }
}
average([2, 4, 12]);

//39 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]);
// // →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
// console.log(modifyArray(["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]);
// // →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
// console.log(modifyArray(["Google", "Facebook","Apple", "Amazon"]);
// // →"Not Found"

function modifyArray(array) {
  let newArray = array.slice();
  if (array.length < 5) {
    console.log(`Item not found.`)
  } else {
    newArray[4] = newArray[4].toUpperCase();
    console.log(newArray);
  }
  return newArray;
}
modifyArray(['Milk', 'Egg', 'Tomato', 'Cucumber', 'Protein', 'Cake']);

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maxiumum with out using Math.max method.
// console.log(findMax(0, 10, 5));
// 10
// console.log(findMax(0, -10,-2));
// 0

function findMax(...arr) {
  console.log(arr);
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(-20, 30, 5));

// or

const arrTest = [1, 4, 20, 5];
console.log(Math.max(...arrTest));

// Declare a functin name swapValues. This function swaps value of x to y.
// swapValues(3,4); // x => 4, y=>3
// swapValues(4,5); // x = 5, y = 4

function swapValues(x, y) {
  let temp = y;
  y = x;
  x = temp;
  return x + ' ' + y;
}
console.log(swapValues(4, 5));

//42 Write a function called *isPrime, which checks if a number is prime number.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(isPrime(11));

// Write a function which checks if all the items of the array are the same data type.

function checkDataType(...arr) {
  console.log(arr);
  let start = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof start !== typeof arr[i]) {
      return 'Not the same data type.';
    }
  }
  return 'Same data type.';
}
console.log(checkDataType(1, 3, 4, 'a'));

//43 Write a functions which checks if all items are unique in the array.

function itemUnique(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      return 'Not unique'
    }
  }
  return 'Unique'
}
console.log(itemUnique(20, 'a', 20, 31));

//44 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [1,4,5,7,9,8,0]

function sevenRandomNumbers() {

  // let arr = [];
  // for (let i = 0; arr.length < 7; i++) {
  //   let randomNum = Math.floor(Math.random() * 10);
  //     if (!arr.includes(randomNum)) {
  //       arr.push(randomNum);
  //   }
  // }

  // or

  let arr = [];
  while (arr.length < 7) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!arr.includes(randomNum)) {
      arr.push(randomNum);
    }
  }
  return arr;
}
console.log(sevenRandomNumbers());