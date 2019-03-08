//1
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'

function countWords(para, word) {
  const words = para.split(' ');
  console.log(words);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(word)) {
      count++;
    }
  }
  return count;
}
console.log(countWords(paragraph, 'love'));
//or
//Regular express
const countRgExWords = (para, word) => {
  const pattern = new RegExp(word, 'gi');
  const matches = para.match(pattern);
  let count = matches === null ? 0 : matches.length;
  return count;
};
console.log(countRgExWords(paragraph, 'love'));

//2

function checkDataTypes(arr) {
  let dataTypeArr = [];
  for (let i = 0; i < arr.length; i++) {
    dataTypeArr.push(typeof arr[i]);
  }
  return dataTypeArr;
}
console.log(checkDataTypes([5, 'a', true, {
  name: 'Dean'
}, undefined, null]));
//or
const arr = [5, 'a', true, {
  name: 'Dean'
}, undefined, null];
const checkData = arr.map(function (item, i) {
  return typeof item;
});
console.log(checkData);

//3

function agesGreaterEighteen(ageArr) {
  let older = [];
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i] > 18) {
      older.push(ageArr[i]);
    }
  }
  return older;
}
console.log(agesGreaterEighteen([23, 45, 15, 50, 10]));
//or
const ageArr = [12, 20, 40, 15, 29];
const agesMoreThanEighteen = ageArr.filter((age, i) => age > 18);
console.log(agesMoreThanEighteen);
//or
console.log([23, 16, 49, 10].filter((age, i) => age > 18));

//4

function removeAndAdd(arr, item1, item2) {
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    arr.splice(middle - 1, 2, item1, item2);
  } else {
    arr.splice(middle, 1, item1, item2);
  }
  return arr;
}
console.log(removeAndAdd([1, 2, 3, 4, 5], 'a', 'b'));

//5

function averageAge() {
  let sum = 0;
  let avr = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  avr = sum / arguments.length;
  return avr;
}
console.log(averageAge(20, 30, 40));
//or
const arrAge = [10, 20, 30];
const avg = (arr) => {
  let sum = 0;
  arr.map((num) => sum += num);
  return sum / arr.length;
}
console.log(avg(arrAge));

//names.forEach(function (name, index) {
//   console.log(index + 1, name.toUpperCase());
// });

//6

function getCarPlateNum() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  let letterPlate = '';
  let numPlate = '';
  for (let i = 0; letterPlate.length < 3; i++) {
    letterPlate += letters.charAt(Math.round(Math.random() * 26));
  }
  for (let i = 0; numPlate.length < 3; i++) {
    numPlate += nums.charAt(Math.round(Math.random() * 10));
  }
  return letterPlate + '-' + numPlate;
}
console.log(getCarPlateNum());

//7 Write a function which can generate  a random Finnish social security number.
//  console.log(genSocialSecurityNum())
//  220590-255H
// console.log(genSocialSecurityNum())
//  190395-225J

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getSocialSecurityNum() {

  let date = randomDate(new Date(01 / 01 / 1990), new Date(1999, 0, 1));
  console.log(date);

  let formattedDate = date.toISOString().substring(2, 10).replace(/-/g, "");
  console.log(formattedDate);

  let idDate = formattedDate.split(/(.{2})/).reverse().join('');
  console.log(idDate);

  // back number letter
  const nums = '0123456789';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let backNum = '';
  for (let i = 0; backNum.length < 3; i++) {
    backNum += nums.charAt(Math.round(Math.random() * 10));
  }
  console.log(backNum);

  let backLetter = ''
  for (let i = 0; backLetter.length < 1; i++) {
    backLetter += letters.charAt(Math.round(Math.random() * 26));
  }
  console.log(backLetter);

  return idDate + '-' + backNum + '' + backLetter;

}
console.log(getSocialSecurityNum());

//8 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

function addProduct(product) {
  shoppingCart.push(product);
  return shoppingCart;
}
console.log(addProduct('Milk'));

function editProduct(index, product) {
  shoppingCart.splice(index, 0, product);
  return shoppingCart;
}
console.log(editProduct(1, 'Egg'));

function removeProduct(index) {
  shoppingCart.splice(index, 1);
  return shoppingCart;
}
console.log(removeProduct(2));

//9 The following todoList has three tasks. Create an addTask, removeTask and editTask functions to  modify the todoList. Add, remove or edit at least on task

const todoList = [{
    task: 'Prepare JS Test',
    time: '3/1/2019 12:00',
    completed: true
  },
  {
    task: 'Give JS Test',
    time: '3/1/2019 1:00',
    completed: false
  },
  {
    task: 'Sprint Retrospective',
    time: '3/1/2019 3:00',
    completed: false
  }
]

function addTask(task, time, completed = false) {
  todoList.push({
    task: task,
    time: time,
    completed,
  })
  return todoList;
}
console.log(addTask('dean', 'asap'));

function removeTask(index) {
  todoList.splice(index, 1);
  return todoList;
}
console.log(removeTask(3));

function editTask(index, property, value) {
  todoList[index][property] = value;
  return todoList;
}
console.log(editTask(2, 'time', 'asap'));

//10

function itemUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      return false
    }
  }
  return true
}
console.log(itemUnique([1, 4, 6, 2, 1]));

//11 Write a function which filter users who has  scoresGreaterThan85, 
// Write a function which addUser  to the user array only if the user does not exist. 
// Write a function which addUserSkill which can add skill to a user only if the user exist. 
// Write a function which editUser if the user exist in the users array.

const users = [{
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
];