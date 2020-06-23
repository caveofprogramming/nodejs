'use strict';

let http = require('http');
let fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

/*
let server = http.createServer(function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});
*/

let server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(8000);

console.log("Listening ....");