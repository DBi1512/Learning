const input1 = "C 1 100 C 2 200 A 1 100 A 2 200";

const inputString = input1.split(' ');

console.log(inputString);

function toObject(arr) {
  let newArr = [];
  let C = {};
  let A = {};
  
    for (let i = 0; i < arr.length; i+=3) {
      let item = { };
      item[arr[i] + arr[i + 1]] = Number(arr[2]);
      newArr[i] = item;
    }
  return newArr;
  }

console.log(toObject(inputString));

const newString = toObject(inputString);
console.log(newString[2]);

