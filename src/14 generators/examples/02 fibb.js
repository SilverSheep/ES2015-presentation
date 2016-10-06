"use strict";

// use in browser

// generator
function *createIterator(n) {
    let cur = 1, next = 1;
    for(let i=0; i<n; i++) {
        yield cur;
        [cur, next] = [next, cur+next];
    }
}

// generators are called like regular functions but return an iterator
let iterator = createIterator(7);

console.log(...iterator);     // 1
