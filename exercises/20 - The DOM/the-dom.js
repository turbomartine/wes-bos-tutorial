// const p = document.querySelector('p')
// const divs = document.querySelectorAll('div')
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent)
// console.log(heading.innerText)
// heading.textContent = "Wes is cool";

// console.log(heading.textContent)
// console.log(heading.innerText)

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent)


// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// classes!
const pic = document.querySelector('.nice');
pic.classList.add('open')
// console.log(pic.classList)
pic.classList.remove('open')
// console.log(pic.classList)

pic.classList.toggle('round');
// console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round')
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup' // setter
// console.log(pic.alt) // getter
// console.log(pic.naturalWidth)

// window.addEventListener('load', function() {
//   console.log(pic.naturalWidth); // getter
// })

// pic.setAttribute('alt', 'REALLY CUTE PUP');
// console.log(pic.getAttribute('alt'));

// const custom = document.querySelector('.custom')

// console.log(custom.dataset)

// custom.addEventListener('click', function() {
//   alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
// })

