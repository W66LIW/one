"use strict"

const a = prompt("Введите слово ...", 'AoAoA');

function changeRegister(str) {

return str
.split("")
.map((l) =>   
   (l === l.toUpperCase()) ? (l.toLowerCase()) : (l.toUpperCase()))
.join('');
}


alert(changeRegister(a));
console.log(typeof(changeRegister(a)));