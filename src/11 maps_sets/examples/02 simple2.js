"use strict";

// old

let old_map = Object.create(null);

old_map[5] = "Nicholas";
old_map['5'] = false;

console.log(Object.keys(old_map).length); // 1 instead of 2

// new
let map = new Map();
map.set(5, "Nicholas");
map.set("5", 25);

console.log(map.size);    // 2