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

document.writeln(arrToStr1(apple));
document.writeln(typeof(arrToStr1(apple)));
document.writeln(arrToStr2(apple));
document.writeln(typeof(arrToStr2(apple)));
