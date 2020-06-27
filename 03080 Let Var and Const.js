'use strict';

// github.com/caveofprogramming

// Global scope
// Function / local scope
// Block scope
// (Module scope)

// Always declare variables using a keyword
// 'use strict' when possible
// Use the 'const' keyword as much as possible
// use 'let' rather than 'var' where possible
// Restrict the scope of variables as much as possible.

// Global scope
let text = 'hello';

function testFunc(input) {

    // function scope
    let value = 7;
    text = 'hi';
    console.log(input);
}

// console.log(input);
// value = 8;

testFunc(100);

console.log(text);

// Block scope
{
    let animal = 'dog';
    animal = 'cat';
    console.log(animal);
}

// Block scope
for(let count = 0; count < 3; count++) {
    console.log(count);
}

// console.log(count); doesn't work!

// var: no block scope

{
    var fruit = 'apple';
}
console.log(fruit);

for(var number = 0; number < 4; number++) {
    console.log(number);
}

console.log('var has no block scope!', number);
