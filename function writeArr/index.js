"use strict"

const apple = ['a','pp', 'l', 'e'];

function writeArr (arr) {
    
    for(let i = 0; i < arr.length; i++){
        document.writeln(`<p>${i} --- ${arr[i]}<br></p>`)
    }
    
    
}

writeArr(apple);

