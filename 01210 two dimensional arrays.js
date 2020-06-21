'use strict';

let animalTable = [
    ['dog', 'cat'],
    ['giraffe', 'elephant', 'rhino'],
];

console.log(animalTable[1][2]);

animalTable[1][2] = 'capybara';

let animal = animalTable[1][2];

console.log(animal);