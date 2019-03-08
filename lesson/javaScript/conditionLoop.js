// CONDITIONALS
//1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for. Output:
// Enter your age: 30
// You are old enough to drive. 
// Output:
// Enter your age:15
// You are left with 3 years to drive.

// const age = prompt('Enter your age: ');
// if (age > 18) {
//   console.log('You are old enough to drive!')
// } else {
//   const years = 18 - age;
//   console.log('You are left with ' + years + ' years to drive!')
// }

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. Output:
// Enter your age: 30
// You are 5 years older than me. 

// var ageOfMe = prompt('Enter age of mine: ');
// var ageOfYou = prompt('Enter age of yours: ');

// if (ageOfMe < ageOfYou && !isNaN(ageOfMe) && !isNaN(ageOfYou)) {
//   console.log(`You are ${ageOfYou - ageOfMe} years older than me.`);
// } else if (isNaN(ageOfMe) || isNaN(ageOfYou)) {
//   console.log(`PLease enter a number`);
// } else {
//   console.log(`I am older than you.`);
// }

// function comparingAge(myAge, yourAge) {
//   myAge = prompt("Enter my age: ");
//   yourAge = prompt("Enter your age: ");
//   var diffYears = yourAge - myAge;

//   if (myAge < yourAge) {
//     console.log(`Enter your age: ${yourAge}
//     You are ${diffYears} years older than me.`);
//   } else {
//     console.log(`I am older than you.`)
//   };
// }
// comparingAge();

//3 If a is greater than b return a is greater than b else a is less than b. Output:
// let a = 4;
// let b = 3;
// 4 is greater than 3

let a = 4;
let b = 3;
if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' is less than ' + b);
}

//4 Write a code which give grade students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0 -49, F

const studentGrade = 100;
if (studentGrade >= 80 && studentGrade <= 100) {
  console.log('A');
} else if (studentGrade >= 70 && studentGrade <= 79) {
  console.log('B');
} else if (studentGrade >= 60 && studentGrade <= 69) {
  console.log('C');
} else if (studentGrade >= 50 && studentGrade <= 59) {
  console.log('D')
} else if (studentGrade >= 0 && studentGrade <= 49) {
  console.log('F');
} else {
  console.log('Not valid!');
}

//5 Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const month = 'February';
if (month === 'September' || month === 'October' || month === 'November') {
  console.log('The season is Autumn.')
} else if (month === 'December' || month === 'January' || month === 'February') {
  console.log('The season is Winter.')
} else if (month === 'March' || month === 'April' || month === 'May') {
  console.log('The season is Spring.')
} else if (month === 'June' || month === 'July' || month === 'August') {
  console.log('The season is Summer.')
} else {
  console.log('Not a month.')
}

// LOOP

//1 Iterate 0 to 10 using for loop, do the same using while and do while loop.

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop.

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

let l = 10;
do {
  console.log(l);
  l--;
} while (l >= 0);

//3 Iterate the array from above question using a for loop and print out the items.

let array = [];
for (let i = 10; i >= 0; i--) {
  array.push(i);
}
console.log(array);

//4 Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//5 Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//6 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum all numbers is 5050.

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//7 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens is 2550. And the sum of all odds is 2500.

let sumOfEvens = 0;
let sumOfOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEvens = sumOfEvens + i;
  }
  if (i % 2 === 1) {
    sumOfOdds = sumOfOdds + i;
  }
}
console.log(sumOfEvens, sumOfOdds);

// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let hashes = '';
for (let i = 0; i < 7; i++) {
  hashes = hashes + '#'
  console.log(hashes);
}

