'use strict';

window.onload = function() {
    let helloButton = document.getElementById('hello-button');
    
    helloButton.onclick = function() {
        let greetingDiv = document.getElementById('greeting');

        greetingDiv.style.backgroundColor = 'green';
    }
}