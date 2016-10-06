"use strict";

function evals(i) {
    return {
        [Symbol.iterator]() {       // by default developer-defined iterators are not iterable ([Symbol.iterator] is needed)
            let counter = 0;
            return {
                next() {
                    return {done: !(i--), value: counter+=2};
                }
            }
        }
    }
}

for (let n of evals(10)) {
    console.log(n);
}
