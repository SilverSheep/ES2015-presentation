"use strict";

// generator
function *createIterator() {
    console.log('before 1. yield');
    yield 1;
    console.log('before 2. yield');
    yield 2;
    console.log('before 3. yield');
    yield 3;
    console.log('after 3. yield');
}

// generators are called like regular functions but return an iterator
let iterator = createIterator();

console.log(iterator.next().value);     // 1
console.log(iterator.next().value);     // 2
console.log(iterator.next().value);     // 3
console.log(iterator.next().value);     // undefined
console.log(iterator.next().value);     // undefined