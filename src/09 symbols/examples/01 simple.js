"use strict";

let firstName = Symbol("first name");
let person = {};

console.log("Is Symbol(\"first name\")==Symbol(\"first name\")?");
console.log(Symbol("first name")==Symbol("first name"));

person[firstName] = "Marcin";
//person["first name"] = "Marcin";

console.log("\nIs property 'first name' part of person?");
console.log("first name" in person);        // false
console.log("\nValue of person[firstName]:");
console.log(person[firstName]);             // "Marcin"
console.log("\nValue of firstName:");
console.log(firstName);                     // "Symbol(first name)"
console.log("\nValue of person:");
console.log(person);                        // {}