'use strict';

greet1();

// Function definition
function greet1() {
    console.log("Hello 1");
}

// Function expression
let greet2 = function() {
    console.log("Hello 2");
}

greet2();

let greet3 = () => {
    console.log("Hello 3")
}

greet3();

