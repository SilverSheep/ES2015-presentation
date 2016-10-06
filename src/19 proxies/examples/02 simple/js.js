"use strict";

// use in browser


// it's a bad example

let obj = {
    foo() {
        
    }
};

let handler = {
    get(target, name, receiver) {
        return (...args) => {
            console.log('Missing method '+name
                + ', arguments: '+args);
        }
    }
};
let proxy = new Proxy(obj, handler);

proxy.foo(3,4,'trolo');