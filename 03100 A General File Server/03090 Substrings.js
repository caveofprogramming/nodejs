'use strict';

// substr
// substring
// split
// pop

let url = '/about.html';

let filename = url.substring(1);
let extension = filename.split('.').pop();

console.log(filename, extension);


