const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool')

function handleClick() {
  console.log('IT GOT CLICKED!')
}

const hooray = () => console.log('HOORAY')

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);


// butts.removeEventListener('click', handleClick);


// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button')
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
})

window.addEventListener('click', function() {
  console.log('YOU CLICKED THE WINDOW')
  console.log(event.target);
//  this.event.stopPropagation();
}, {capture: true})

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
  console.count(e.currentTarget);
  console.log(this);
})