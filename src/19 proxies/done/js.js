"use strict";

// use in browser

let letter = {
    receiverName: '',
    body: ''
};

let letterProxyHandler = {
    set(target, property, value, receiver) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return Reflect.set(target, property, value, receiver);
    }
};
let letterProxy = new Proxy(letter, letterProxyHandler);

letterProxy.receiverName = 'jolka';
letterProxy.body = 'siema';

console.log(`Receiver name: ${letter.receiverName }`);
console.log(`Letter body: ${letter.body }`);