'use strict';

let fs = require('fs');

//let text = fs.readFileSync('./hello.txt', {encoding: 'utf8'});

let text = fs.readFileSync('./hello.txt', 'utf8');

console.log(text);