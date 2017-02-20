"use strict";
let workspace = {
    name: 'Moja',
    f: function () {
        var list = ['ukochana', 'najlepsza', 'praca'];

        list.forEach((item) => {
            console.log(this.name + ' ' + item);
        });
    }
};

workspace.f();