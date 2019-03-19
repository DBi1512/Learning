// const newTitle = document.createElement('h1');
// console.log(newTitle);
// newTitle.textContent = 'Title';
// document.body.appendChild(newTitle);

// const anotherTitle = document.createElement('h1');
// anotherTitle.textContent = 'Title title';
// document.body.appendChild(anotherTitle);

// const oneMoreTitle = document.createElement('h1');
// oneMoreTitle.textContent = 'Title title title';
// document.body.appendChild(oneMoreTitle);

let title;
const content = ['Title A', 'Title B', 'Title C', 'Title D', 'Title E'];
for (let i = 0; i < content.length; i++) {
  title = document.createElement('h1');
  title.textContent = content[i];
  if (i % 2 === 0) {
    title.style.color = 'green';
  } else {
    title.style.color = 'red';
  }
  document.body.appendChild(title);
}

const radius = document.querySelector('#radius');
const button = document.querySelector('button');
const area = document.querySelector('#area');

button.addEventListener('click', function () {
  area.textContent = Math.PI * radius.value * radius.value;
});

const wrapper = document.querySelector('.wrapper');
let box;

for (let i = 0; i <= 100; i++) {
  box = document.createElement('div');
  box.textContent = i;
  if (i % 2 === 0) {
    box.style.background = 'grey';
  } else {
    box.style.background = 'lightblue';
  }
  document.body.append(box);
}