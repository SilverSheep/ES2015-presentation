"use strict";
let workspace = {
    name: 'Moja',
    f: function () {
        let list = ['Pasja', 'Atena', 'Współpraca'];
        let self = this;

        list.forEach(function(item) {
            console.log(self.name + ' ' + item);
        });
    }
};

workspace.f();