const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph)

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv)

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! We need to add something to the top, like a heading!

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const myUl = document.createElement('ul');

const myIl1 = document.createElement('il');
const myIl2 = document.createElement('il');
const myIl3 = document.createElement('il');
const myIl5 = document.createElement('il');
const myIl4 = document.createElement('il');
myIl1.textContent = 'One'
myIl2.textContent = 'Two'
myIl3.textContent = 'Three'
myIl5.textContent = 'Five'
myIl4.textContent = 'Four'

myUl.appendChild(myIl2);
myUl.appendChild(myIl3);
myUl.appendChild(myIl4);
myUl.insertAdjacentElement('beforeend', myIl5);
myUl.insertAdjacentElement("afterbegin", myIl1);
document.body.appendChild(myUl);