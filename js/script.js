//write a function to convert fahrenheit to celsius 

// function convertF(celsius){

//     let fahrenheit = (celsius * 9/5)  + 32;

//     return fahrenheit;
// }
// console.log(convertF(30));
// document.write(convertF(30));
// alert(convertF(30));



//write a function to convert celsius  to fahrenheit 
// function convertC(fahrenheit){
//     let celsius = (fahrenheit - 32) * 5/9;

//     return celsius;
// }
// console.log(convertC(30));
// document.write(convertC(30));
// alert(convertC(30));

// correction convert ferhenreit to celcius
// let C = parseInt(prompt('type your celcius to be converted to ferhereit here'));

// function toFerheneit() {
//     let celcius = (C - 3) * 5/9;

//     return celcius;
// }
// alert(toFerheneit());

// correction convert celcius to Ferhenreit
// let F = parseInt(prompt('type your ferhenreit to be converted to celcisu here'));

// function toCelcius() {
//     let ferhenreit = (F * 9/5) + 32;

//     return ferhenreit;
// }
// alert(toCelcius());

// convert from gallon to litre
let G = parseInt(prompt('type your gallon to convert to litre here'));

let L = 3.78;

function convertG(){
    let litre = G * L;

    return litre;
}
alert(convertG());


