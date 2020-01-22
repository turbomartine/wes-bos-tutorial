// First class citizens

const age = 100;
const cool = true;


// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }


// This is an example of hoisting 
// If you want the browser to "pick out"
// the functions and run them first, they
// have to be the typical function declaration
// console.log(doctorize2("Wes"))

// // Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// function doctorize2(firstName) {
//   return `Dr. ${firstName}`;
// }

// Arrow functions
const inchToCm = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a * b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 })


// IIFE
// Immediately Invoked function Expression

(function(age) {
  return `You are cool and ${age}`;
})(10);

// Methods!!!

const wes = {
  name: 'Wes Bos',
  // Method!
  sayHi: function() {
    console.log('Hey Wes!')
  },
  // short hand Method
  yellHi() {
    console.log('HEY WESSSS')
  },
  // arrow function
  wisperHi: () => {
    console.log('hii wess im a mouse');
  }
}


// callback function
// click callback

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great clicking!')
}

button.addEventListener('click', handleClick)