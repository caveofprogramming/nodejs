'use strict';

let http = require('http');

function requestCallback(request, response) {
    console.log("Helloooooo");

    response.setHeader('Content-Type', 'text/html');
    response.write('<HTML><STRONG>Hello World Server</STRONG></HTML>');
    response.end();
}

let server = http.createServer(requestCallback);

server.listen(8000);

console.log("Listening ....");