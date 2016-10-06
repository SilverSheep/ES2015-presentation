"use strict";

// old
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

// new
function createPerson(name, age) {
    return {
        name,
        age
    };
}