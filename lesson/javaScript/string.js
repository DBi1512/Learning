//EXERCISE 4 - STRING
//1

let company = "Integrify Academy";
console.log(company);
console.log(company.length);
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.slice(1));

//7 Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let string = 'You cannot end a sentence with because because because is a conjunction';
let firstPosition = string.indexOf('because');
console.log(firstPosition);
let lastPosition = string.lastIndexOf('because') + 'because'.length + 1;
console.log(lastPosition);

console.log(string.substring(firstPosition, lastPosition));

//8 Check if the string contains a word Academy using includes() method

console.log(company.includes('Academy'));

//9 Split the string into array using split() method

console.log(company.split());

//10 Split the string Coding Academy at the space using split() method

console.log(company.split(' '));

//11 "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split the string at the comma and change it to an array.

let myString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(myString.split(' '));

//12 Change Coding Academy to Microsoft Academy using replace() method.

console.log(company.replace('Integrify', 'Microsoft'));

//13 What is character at index 10 in "Coding Academy" string use charAt() method.

console.log(company.charAt('10'));

//14 What is the character code of A in 'Coding Academy' string using charCodeAt()

company = 'Coding Academy';
console.log(company.charCodeAt(8));

//15 Use indexOf to determine the position of the first occurrence of c in Coding Academy

console.log(company.indexOf('c'));

//16 Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.

console.log(company.lastIndexOf('c'));

//17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string.indexOf('because'));

//18 Use lastIndexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string.lastIndexOf('because'));

//19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string.search('because'));

//20 Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g " Coding Academy ".

let newCompany = " Integrify Academy ";
console.log(newCompany.trim());

//21 Use startsWith() method with the string Coding Academy make the result true
console.log(company);
console.log(company.startsWith('Coding'));

//22 Use endsWith() method with the string Coding Academy make the result true

console.log(company.endsWith('Academy'))

//23 Use match() method to find all the c’s in Coding Academy

console.log(company.match(/c/g));

//24 Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(string.match(/because/g));

//25 Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'

let stringOne = 'Coding';
let stringTwo = 'Academy';
let jointString = stringOne.concat(' ', stringTwo);
console.log(jointString);

//26 Use repeat() method to print Coding Academy 5 times

console.log(jointString.repeat(5));

//27 Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// const incomes = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.split(' ');
// const numbers = [];

// console.log(incomes);
// for (let i = 0; i < incomes.length; i++) {
//   console.log(incomes[i]);
//   console.log(typeof incomes[i]);
//   console.log(parseFloat(incomes[i]));

//   if (parseFloat(incomes[i])) {
//     numbers.push(parseFloat(incomes[i]));
//   }
// }
// console.log(numbers);
// const annualNumbers = numbers[0] * 12 + numbers[1] + numbers[2] * 12;
// console.log(annualNumbers);

let pattern = /\d+/g; // or /[0-9]+/g;
const incomes = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(pattern);

console.log(incomes);