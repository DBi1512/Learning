const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const numCountries = document.querySelector('.numCountries');
numCountries.textContent = countries.length;

const startingWord = document.querySelector('#startingWord');
const anyWord = document.querySelector('#anyWord');
const alphabet = document.querySelector('#alphabet');
const input = document.querySelector('input')
const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('.result');

// clear input text
input.addEventListener('focus', function () {
  input.value = "";
})

// Creating random color
// const randomHexaNumberGenerator = () => {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color = color + letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

//or shorter way:
function randNumHexGenerator() {
  let randomColor = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
  return randomColor;
}

//assign font-awesome html code.
alphabet.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';

//switch alphabet button to up or down
function alphaFunc() {
  if (alphabet.innerHTML.includes('down')) {
    alphabet.classList.add('active');
    alphabet.innerHTML = '<i class="fas fa-sort-alpha-up"></i>';
    showCountries();
  } else if (alphabet.innerHTML.includes('up')) {
    alphabet.classList.remove('active');
    alphabet.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';
    showCountries();
  }
}
alphabet.addEventListener('click', alphaFunc);

// add active class to desired button & remove the other button active class
startingWord.addEventListener('click', function () {
  anyWord.classList.remove('active');
  alphabet.classList.remove('active');
  startingWord.classList.add('active');
  showCountries();
});

anyWord.addEventListener('click', function () {
  startingWord.classList.remove('active');
  alphabet.classList.remove('active');
  anyWord.classList.add('active');
  showCountries();
});

//enter the search word, execute function & return the result.
input.addEventListener('keyup', showCountries);

// functions: 
function showCountries() {
  //condition for the the on-going button to perform which function.
  if (startingWord.classList.contains('active')) {
    startingWordSearch();
  } else if (anyWord.classList.contains('active')) {
    anyWordSearch();
  };

  //hide & show the countries && result according to input value 
  // if (input.value === '') {
  //   wrapper.style.display = 'none';
  //   result.style.display = 'none';
  // } else {
  //   wrapper.style.display = 'flex';
  //   result.style.display = 'block';
  // }
};

function generateCountries(inputCountries) {
  wrapper.innerHTML = "";
  for (let i = 0; i < inputCountries.length; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    wrapper.appendChild(box);
    const span = document.createElement('span');
    box.appendChild(span);
    const backgroundColor = randNumHexGenerator();
    box.style.background = `linear-gradient(to bottom, ${backgroundColor} 10%, transparent 100%)`;
    span.style.color = contrastTextBackground(backgroundColor);

    //extra: RegExp, change the search keyword to different color
    const key = new RegExp(input.value, "gi");
    span.innerHTML = inputCountries[i].replace(key, `<b class="keyword">${input.value}</b>`);
  }
}

// NOTE: 
// UPPERCASE every country in the array & check with the input value that is UPPERCASE also.

function startingWordSearch() {
  const inputCountries = countries.filter(filterCountries => {
    return filterCountries.toUpperCase().startsWith(input.value.toUpperCase(), 0);
  })
  sortCountries(inputCountries);
  generateCountries(inputCountries);
  result.innerHTML = `Countries starting with "<span class="words">${input.value}</span>" : <span class="nums">${inputCountries.length}</span>`;
}

function anyWordSearch() {
  const inputCountries = countries.filter(filterCountries => {
    return filterCountries.toUpperCase().includes(input.value.toUpperCase());
  })
  sortCountries(inputCountries);
  generateCountries(inputCountries);
  result.innerHTML = `Countries containing "<span class="words">${input.value}</span>" : <span class="nums">${inputCountries.length}</span>`;
}

function sortCountries(inputCountries) {
  //check if alphabet key is down, default, no change. 
  //if up, reverse it.
  if (alphabet.innerHTML.includes('up')) {
    inputCountries.reverse();
  }
}

// The code below is a simpler way to choose a contrasting text color. You can delete seven functions from above (hexToRgb(), formatRgb(), rgbToHsl(), formatHsl(), pickContrastingFont(), and generateDivs()), and simply use the two functions below:
//pick a font color that has enough contrast with the background

function contrastTextBackground(randNumHexGenerator) {
  // 2 digits for each (r,g,b)
  let rawR = randNumHexGenerator.slice(1, 3);
  let rawG = randNumHexGenerator.slice(3, 5);
  let rawB = randNumHexGenerator.slice(5, 7);
  // convert to Integer (0 - 255)
  let R = parseInt(rawR, 16);
  let G = parseInt(rawG, 16);
  let B = parseInt(rawB, 16);
  // if the values of R,G,B are high, the background color is light => pick dark/black text
  // if the values of R,G,B are low, the background color is dark => pick white text
  if (R + G + B > 400) {
    return 'black';
  } else {
    return 'white';
  }
}