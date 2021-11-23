// Adding single story to DOM  
const body = document.querySelector('body');
console.log(body);

const parent = document.createElement('div');
parent.className = 'parent';
console.log(parent);

const child = document.createElement('div');
child.className = 'child';
console.log(child);

parent.appendChild(child);
body.appendChild(parent);