// Targeting by tag name
const titles = document.getElementsByTagName('h1');
console.log(titles.length);
for (let i = 0; i < titles.length; i++) {
  titles[i].classList.add('headers');
  titles[i].className = 'title header';
  titles[i].setAttribute('id', 'headers-id');
  if (i % 2 === 0) {
    titles[i].style.color = 'green';
  }
  else {
    titles[i].style.color = 'red';
  }
  
  console.log(titles[i]);
}


const firstTitle = document.querySelector('#firstTitle');
const secondTitle = document.querySelector('#secondTitle');
const allTitles = document.querySelectorAll('.title');

console.log(allTitles);

const newTitles = document.querySelectorAll('.title');
newTitles.forEach((title, i) => {
  title.setAttribute('id', 'title-' + i + 1);
  title.setAttribute('href', 'https://www.facebook.com/');
  if (i % 2 === 0) {
    title.style.color = 'green';
    title.style.backgroundColor = 'darkred';
    title.style.border = '2px solid grey';
  } else {
    title.style.color = 'black';
    title.style.backgroundColor = 'lightblue'
  }
})



