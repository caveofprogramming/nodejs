'use strict';

function greet(greetingFunc) {
    let greeting = greetingFunc();

    console.log(greeting);
}

function getGreeting1() {
    return 'Hello Neptune!';
}

greet(getGreeting1);

greet(function() { return 'Hello Poseidon'; });

greet(() => { return 'Hello Morpheus.'; });

greet(() => 'Hello Thor!');

let greetThor = () => 'Hi there Thor.';
greet(greetThor);