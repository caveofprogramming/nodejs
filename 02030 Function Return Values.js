'use strict';

console.log(Math.pow(8, 2));

function square(number) {

    let square = number * number;

    return square;
}

let value = square(7);
console.log(value);

function greet(name) {
    let greeting = 'Hello ' + name;

    return greeting;
}

let message = greet('Neptune');
console.log(message);