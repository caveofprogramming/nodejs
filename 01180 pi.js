'use strict';

let counter = 0;
let denominator = 1;
let sign = 1;
let sum = 0;

while(counter < 1000000) {

    let term = sign * 1/denominator;

    sum += term;

    sign *= -1;
    denominator += 2;
    counter++;
}

let pi = sum * 4;
console.log(pi);
console.log(Math.PI);
