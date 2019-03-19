//OBJECT

const personAccount = {
  firstName: 'Dean',
  lastName: 'Phan',
  incomes: [{
    mainJob: 1800
  }, {
    sideJob: 500
  }],
  expenses: [{
      housing: 500
    },
    {
      food: 400
    },
    {
      shopping: 300
    }
  ],

  getTotalIncome: function () {
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      let value = Object.values(this.incomes[i]);
      console.log(value);
      sum = sum + value[0];
      // console.log(sum);
    }
    return sum;
  },

  getTotalExpense: function () {
    let sum = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      let value = Object.values(this.expenses[i]);
      // console.log(value[0]);
      sum = sum + value[0];
    }
    return sum;
  },

  getAccountInfo: function () {
    let account = `${this.firstName} ${this.lastName}.\nTotal income: ${this.getTotalIncome()}€.\nTotal expense: ${this.getTotalExpense()}€`
    return account;
  },

  getAddIncome: function (key, value) {
    if (key && value) {
      let object = {};
      object[key] = value;
      // console.log(object);
      this.incomes.push(object);
      return this.incomes;
    }
  },
  getAddExpense: function (key, value) {
    if (key && value) {
      let object = {};
      object[key] = value;
      // console.log(object);
      this.expenses.push(object);
      return this.expenses;
    }
  },

  getAccountBalance: function () {
    return this.getTotalIncome() - this.getTotalExpense();
  },
}
console.log(personAccount.getAddIncome('minorJob', 300));
console.log(personAccount.getAddExpense('activities', 200));
console.log(personAccount.getTotalIncome());
console.log(personAccount.getTotalExpense());
console.log(personAccount.getAccountInfo());
console.log(personAccount.getAccountBalance());

//2 Count logged in users,count users having greater than equal to 50 points from the following object.
//  const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     point:50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };