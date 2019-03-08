const title = document.querySelector('.title');
title.textContent = 'Calculate your BMI';

const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const test = document.querySelector('#test');
const form = document.querySelector('form');
const button = document.querySelector('button');
const box = document.querySelectorAll('.box');
const myList = document.querySelector('#myList');
const ul = document.createElement('ul');
const displayImage = document.querySelector('.displayImage');
const check = document.querySelector('.check');
const result = document.querySelector('.result');
const resultInfo = document.querySelector('.resultInfo');
const lists = [{
  text: 'Underweight: BMI is less than 18.5',
  color: 'rgb(255,212,69)',
  image: '<img src="./img/underweight.jpg"/>'
},
{
  text: 'Normal: BMI is 18.5 to 24.9',
  color: 'rgb(130,222,100)',
  image: '<img src="./img/normal.jpg"/>'
},
{
  text: 'Overweight: BMI is 25 to 29.9',
  color: 'darkred',
  image: '<img src="./img/overweight.jpg"/>'
},
{
  text: 'Obese: BMI is 30 or more',
  color: 'red',
  image: '<img src="./img/obese.jpg"/>'
}
];

button.innerHTML = 'Calculate';
displayImage.innerHTML = '<img class="image" src="./img/default.jpg"/>';
resultInfo.innerHTML = 'Result';

document.getElementById('myList').appendChild(ul); //put ul inside div

lists.forEach(function (listItem) {
  let li = document.createElement('li'); //create li in html
  ul.appendChild(li); //put li inside ul
  li.innerHTML += listItem.text; //put HTML stuff inside the li
  li.style.color = listItem.color; //style the li
});
//
weight.addEventListener("focus", (event) => { 
  weight.value = ""
})
height.addEventListener("focus", (event) => { 
  height.value = ""
})
//

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let userBMI = (weight.value / (height.value * height.value)).toFixed(2);
  resultInfo.innerHTML = `Your BMI is : ${userBMI}`;

  switch (true) {
    case userBMI < 18.5:
      resultInfo.innerHTML = `Your BMI is : ${userBMI} ${lists[0].text}`;
      resultInfo.parentNode.style.backgroundColor = lists[0].color;
      displayImage.innerHTML = lists[0].image;
      break;
    case userBMI >= 18.5 && userBMI <= 24.9:
      resultInfo.innerHTML = `Your BMI is : ${userBMI} ${lists[1].text}`;
      resultInfo.parentNode.style.backgroundColor = lists[1].color;
      displayImage.innerHTML = lists[1].image;
      break;
    case userBMI >= 25 && userBMI <= 29.9:
      resultInfo.innerHTML = `Your BMI is : ${userBMI} ${lists[2].text}`;
      resultInfo.parentNode.style.backgroundColor = lists[2].color;
      displayImage.innerHTML = lists[2].image;
      break;
    case userBMI >= 30:
      resultInfo.innerHTML = `Your BMI is : ${userBMI} ${lists[3].text}`;
      resultInfo.parentNode.style.backgroundColor = lists[3].color;
      displayImage.innerHTML = lists[3].image;
      break;
  }

});