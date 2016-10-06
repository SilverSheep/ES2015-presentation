"use strict";
let workspace = {
    name: 'Moja',
    f: function () {
        let list = ['Pasja', 'Atena', 'Współpraca'];

        list.forEach((item) => {
            console.log(this.name + ' ' + item);
        });
    }
};

workspace.f();