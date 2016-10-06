"use strict";

// TODO: Capitalize first letters of letter properties

let letter = {
    receiverName: '',
    body: ''
};

// More info on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// Use Reflect


// TODO prepare proxy


letterProxy.receiverName = 'jolka';
letterProxy.body = 'siema';

console.log(`Receiver name: ${letter.receiverName }`);  // Jolka
console.log(`Letter body: ${letter.body }`);            // Siema