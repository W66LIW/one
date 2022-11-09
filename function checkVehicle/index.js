"use strict"

function checkVehicle (wheels, weight){
    if(wheels === 2 && weight < 100)
    return "Парковка разрешена";
    else 
    return "Вам здесь не место";
}

const wheels = +prompt("Number of wheels");
const weight = +prompt("Weight oh vehicle");

alert(checkVehicle(wheels, weight));