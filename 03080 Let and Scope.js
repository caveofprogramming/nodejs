'use strict';

// github.com/caveofprogramming/nodejs

// Global scope
// Function/local scope
// Block scope
// (Module scope)

// Restrict the scope of variables as much as possible.
// Declare variables with 'const' wherever possible.

// Constants
const PI = 3.14159;
console.log(PI);


// Global scope

function testFunc1() {
    value1 = 321;
}

let value1 = 123;
testFunc1();
console.log(value1);

// Function scope
function testFunc2(value3) {
    let value2 = 456;
    value3 = 987;
}

// Block scope
{
    let value4 = 234;
    value4 = 432;
    console.log(value4);
}

for(let counter = 0; counter < 3; counter++) {
    console.log(counter);
}





