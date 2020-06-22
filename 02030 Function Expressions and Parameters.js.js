'use strict';

// 3! "three factorial" = 3 x 2 x 1
// 5! = 5 x 4 x 3 x 2 x 1
// 0! = 1

function factorial1(value) {

    let factorial = 1;

    for (let n = 2; n <= value; n++) {
        factorial = factorial * n;
    }

    return factorial;
}

let result1 = factorial1(0);
console.log(result1);

let factorial2 = function (value) {
    let factorial = 1;

    for (let n = 2; n <= value; n++) {
        factorial = factorial * n;
    }

    return factorial;
}

let result2 = factorial2(5);
console.log(result2);

console.log(factorial2(4));

let factorial3 = (value) => {
    let factorial = 1;

    for (let n = 2; n <= value; n++) {
        factorial = factorial * n;
    }

    return factorial;
}

console.log(factorial3(6));
