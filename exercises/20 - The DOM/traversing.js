const wes = document.querySelector('.wes')

console.log(wes.children);
console.log(wes.firstElementChild)
console.log(wes.lastElementChild)
console.log(wes.previousElementSibling)
console.log(wes.nextElementSibling)
console.log(wes.parentElement)

//console.log(wes.childNodes);

// console.log(wes.childNodes);
// console.log(wes.firstChild);
// console.log(wes.lastChild);
// console.log(wes.previousSibling);
// console.log(wes.nextSibling);
// console.log(wes.parentNode);

const p = document.createElement('p')
p.textContent = 'I will be removed';

document.body.appendChild(p);

p.remove()