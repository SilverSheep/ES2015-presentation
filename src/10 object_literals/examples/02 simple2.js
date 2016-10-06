"use strict";

// old
var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

// new
var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};