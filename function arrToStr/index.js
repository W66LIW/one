"use strict"

const apple = ['a','pp', 'l', 'e']

function arrToStr1 (arr) {
    
    const str = arr.join("");
    return str;
}

function arrToStr2 (arr) {

    let str = "";

    for(let i = 0; i < arr.length; i++){
        str += arr[i];
    }

    return str;
}

document.writeln(
    `<p>${arrToStr1(apple)} - ${typeof(arrToStr1(apple))}<br>
        ${arrToStr2(apple)} - ${typeof(arrToStr2(apple))}</p>`);



