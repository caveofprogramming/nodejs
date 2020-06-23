'use strict';

let http = require('http');
let fs = require('fs');

function requestCallback(request, response) {
    console.log("Helloooooo");

    let name = 'Poseidon';

    let html = `
        <!DOCTYPE html>
        <HTML>
        <HEAD>
            <STYLE>
                strong {
                    color: red;
                }
            </STYLE>

        </HEAD>
            
        <BODY>
        <STRONG>Hello ${name}</STRONG>
        </BODY>

        </HTML>
        `;

    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
}

let server = http.createServer(requestCallback);

server.listen(8000);

console.log("Listening ....");