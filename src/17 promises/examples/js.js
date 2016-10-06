"use strict";

// use in browser

function promiseMaker(condition, timeout = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve("Success!");
            } else {
                reject(new Error("Something went wrong!"));
            }
        }, timeout);
    });
}

promiseMaker(true)
    .then((data) => {
       console.log(`sukces - ${data}`);
    });

promiseMaker(false, 3000)
    .catch((err) => {
        console.log(`błąd ${err}`);
    });