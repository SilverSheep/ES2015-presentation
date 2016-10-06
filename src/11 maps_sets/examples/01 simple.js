"use strict";

// old

let old_set = Object.create(null);

old_set.foo = true;

// checking for existence
if (old_set.foo) {

    // do something
}

// new
let set = new Set();
set.add(5);
set.add("5"); // allows creating keys with different type

console.log(set.size);    // 2

if (set.has(5)) {
    // do something
}