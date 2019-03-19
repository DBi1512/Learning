

//2 Declare an array with more than 5 number of items

const numbersArray = [1, 2, 3, 4, 5, 6];

//3 Find the length of your array

console.log(numbersArray.length);

//4 Get the first item, the middle item and the last item of the array

function printMiddle(arr) {
  let arrayLength = arr.length / 2;
  if (arr.length % 2 === 0) {
    return arr[arrayLength] + ' and ' + arr[arrayLength - 1];
  } else {
    return arr[Math.floor(arrayLength)];
  }
}
console.log(numbersArray[0]);
console.log(printMiddle(numbersArray));
console.log(numbersArray[numbersArray.length - 1]);

//5 Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5

const mixedArray = ['Dean', 32, true, 'work', 'study', 'hobbies'];

//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7 Print the array using console.log()

console.log(itCompanies);

//8 Print the number of companies in the array

console.log(itCompanies.length);

//9 Print the first company, middle and last company

console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

//10 Print out each company

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

//11 Change companies to uppercase and print them out

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies.join(', ').replace('Oracle, Amazon', 'Oracle and Amazon') + ' are big IT companies.');

//or dynamic:

console.log(`${itCompanies.slice(0, itCompanies.length - 1)} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`.replace(/,/g, ', '));

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

const checkCompany = 'Google';
if (itCompanies.includes(checkCompany)) {
  console.log(checkCompany);
} else {
  console.log('Company is not found!')
}

//14 Filter out companies which have more than one 'o' without the filter method

// console.log(itCompanies);
// for (var i = 0; i < itCompanies.length; i++) {
//   if (itCompanies[i].match(/o/g).length >= 2) {
//     console.log(itCompanies[i]);
//   } 
// }

for (let i = 0; i < itCompanies.length; i++)  {
  if (itCompanies[i].indexOf('o') != itCompanies[i].lastIndexOf('o')) {
    console.log(itCompanies[i]);
  }
  console.log(itCompanies[i].indexOf('o'));
  console.log('======> ' + itCompanies[i].lastIndexOf('o'));
}

//15 Sort the array using sort() method

console.log(`${itCompanies.sort()}`);

//16 Reverse the array without reverse method

for (var i = itCompanies.length - 1; i >= 0; i--) {
  console.log(itCompanies[i]);
}

//17 Reverse the array using reverse() method

console.log(`${itCompanies.reverse()}`);

//18 Slice out the first 3 companies from the array

console.log(`${itCompanies.reverse()}`);
console.log(itCompanies.slice(0, 3));

//19 Slice out the last 3 companies from the array

for (var i = itCompanies.length - 1; i >= itCompanies.length - 3; i--) {
  console.log(itCompanies[i]);
}

//20 Slice out the middle IT company or companies from the array
console.log(itCompanies);
let middleIndex = itCompanies.length / 2;
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies[middleIndex], itCompanies[middleIndex - 1]);
} else {
  console.log(itCompanies[Math.floor(middleIndex)])
}

//21 Remove the first IT company from the array

itCompanies.splice(0, 1);
console.log(itCompanies);

//22 Remove the middle IT company or companies from the array

console.log(itCompanies.length);
let middle = itCompanies.length / 2;
if (itCompanies.length % 2 === 0) {
  itCompanies.splice(middle - 1, 2);
  console.log(itCompanies);
} else {
  itCompanies.splice(middle - 1, 1)
  console.log(itCompanies);
}

//23 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

//24 Remove all IT companies

itCompanies.length = 0;
console.log(itCompanies);