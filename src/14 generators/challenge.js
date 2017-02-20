"use strict";

function* powGenerator() {
    return Math.pow(yield "a", yield "b");
}

let g = powGenerator();
console.log(g.next(2).value);        // = ?
console.log(g.next(5).value);      // = ?
console.log(g.next(2).value);       // = ?