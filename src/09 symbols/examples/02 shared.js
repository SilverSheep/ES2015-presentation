"use strict";

let uid = Symbol.for("uid");
let object = {
    [uid]: "12345"  // symbol used using []
};

console.log(object[uid]);       // "12345"
console.log(uid);               // "Symbol(uid)"

let uid2 = Symbol.for("uid");   // the same symbol used

console.log(uid === uid2);      // true
console.log(object[uid2]);      // "12345"
console.log(uid2);              // "Symbol(uid)"