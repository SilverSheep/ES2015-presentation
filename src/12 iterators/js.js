"use strict";

function fibonacci(i) {
    return {
        // TODO
    }
}

var n = 10;
var iterator = fibonacci(n);

for (let i=0; i < n; i++) {
    console.log(iterator.next().value); // 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
}