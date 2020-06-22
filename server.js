'use strict';

let http = require('http');

function requestCallback(request, response) {
    console.log("Helloooooo");

    response.write('Hello World Server');
    response.end();
}

let server = http.createServer(requestCallback);

server.listen(8000);

console.log("Listening ....");