'use strict';

let fruits = [];

fruits[0] = "orange";
fruits[1] = "apple";
fruits.push("banana");

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log();

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let animals = [];

animals.push(['dog', 'cat', 'mouse']);
animals.push(['tiger', 'lion', 'elephant']);

console.log();

for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
