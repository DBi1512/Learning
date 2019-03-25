const student = {
  name: 'Dean',
  age: 33,
  country: 'Finland',
  getPersonInfo: function () {
    return `${this.name} is ${this.age}yrs old & he is from ${this.country}`;
  }
}
console.log(student);

const studentJson1 = JSON.stringify(student);
console.log(studentJson1);

const studentJson2 = JSON.stringify(student, undefined, 8); // (value, replacer, space)
// undefined to keep the same data, num is for data format (the look)
console.log(studentJson2);

const studentObj = JSON.parse(studentJson2);
console.log(studentObj);

const jsonNoFormat = JSON.stringify(student);
jsonNoFormat;

console.log(typeof jsonNoFormat);


const rectangle = {
  width: 20,
  height: 10
}

const jsonRectangle = JSON.stringify(rectangle, undefined, 4);

let { length, width } = JSON.parse(jsonRectangle);
console.log(width);
console.log(length);
let { height } = JSON.parse(jsonRectangle);
console.log(height);

