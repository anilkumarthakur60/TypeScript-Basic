"use strict";
let evh = {
    name: 'Eddie Van Halen',
    album: [263, 32, 'jasdj']
};
let jp = {
    name: 'Jimi Hendrix',
    album: ['Are You Experienced', 'Axis: Bold as Love', 'Electric Ladyland']
};
const greetGuitarist = (guitarist) => {
    console.log(`Hello ${guitarist.name}`);
};
const greetGuitarists = (guitarist) => {
    console.log(`Hellos ${guitarist.name}`);
};
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    console.log(value);
    if (typeof value === 'string')
        return 'string';
    // if (typeof value === 'number') return 'number'
    if (isNumber(value))
        return 'number';
    return createError('invalid type');
};
greetGuitarist(evh);
greetGuitarists(jp);
console.log(numberOrString(12));
let a = 'hello'; //lateral type
let b = a;
let c = a;
let d = 'world';
let e = 'world';
// console.log(e);
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); //assertion
let myVal1 = addOrConcat(2, 2, 'concat'); //assertion
console.log(myVal1);
10;
let subtract = (a, n) => {
    return a + n;
};
console.log(subtract(1, 3));
let multiplys = function (c, d) {
    return c * d;
};
const add = (a, b) => {
    return a + b;
};
const substract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const calculate = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'substract':
            return substract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            throw new Error('operation not supported');
    }
};
console.log(calculate(5, 10, 'add'));
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 5, 6, 7));
const myImg = document.querySelector('#myId');
const img = document.querySelector('img');
const nextImage = document.querySelector('img');
const myImg1 = document.querySelector('#myId');
img.src;
myImg1.src;
