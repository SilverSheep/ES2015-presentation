"use strict";

function fibonacci(i) {
    let cur = 0, next = 1;

    return {
        next() {
            [cur, next] = [next, cur + next];
            return {done: !(i--), value: cur};
        }
    }
}

var n = 10;
var iterator = fibonacci(n);

for (let i=0; i < n; i++) {
    console.log(iterator.next().value); // 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
}