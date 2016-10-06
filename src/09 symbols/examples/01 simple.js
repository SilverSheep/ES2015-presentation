"use strict";

let firstName = Symbol("first name");
let person = {};

console.log(firstName==firstName2);

person[firstName] = "Marcin";
//person["first name"] = "Marcin";

console.log("Is property 'first name' part of person:");
console.log("first name" in person);        // false
console.log("\nValue of person[firstName]:");
console.log(person[firstName2]);             // "Marcin"
console.log("\nValue of firstName:");
console.log(firstName);                     // "Symbol(first name)"
console.log("\nValue of person:");
console.log(person);                        // {}