"use strict";

let name = "Marcin";

// old

let old_message = 'Hello '+name+'.';

console.log(old_message);       // "Hello, Marcin."

// new

let message = `Hello ${name}.`;

console.log(message);       // "Hello, Marcin."