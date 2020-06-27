'use strict';

let http = require('http');
let fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let script = fs.readFileSync('main.js', 'utf8');

function requestCallback(request, response) {

    switch (request.url) {
        case '/':
            response.setHeader('Content-Type', 'text/html');
            response.write(html);
            break;
        case '/main.js':
            response.setHeader('Content-Type', 'text/javascript');
            response.write(script);
            break;
    }

    response.end();

}

let server = http.createServer(requestCallback);

server.listen(8000);

console.log("Listening ....");