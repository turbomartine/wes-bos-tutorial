const people = [
  { name: 'Wes', cool: true, country: 'Canada'},
  { name: 'Scott', cool: true, country: 'Merica'},
  { name: 'Snickers', cool: false, country: 'Dog Country'},
];

people.forEach((person, index) => {
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool)
  console.groupEnd(`${person.name}`);
});

// Console Methods

console.table(people)

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey Im one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('Doing some stuff')

}

function doctorize(name) {
  console.count(`running Doctorize ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize)
      + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`
});

async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

