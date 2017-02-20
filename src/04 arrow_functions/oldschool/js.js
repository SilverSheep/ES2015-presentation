"use strict";
var workspace = {
    name: 'Moja',
    f: function () {
        var list = ['ukochana', 'najlepsza', 'praca'];
    //    var self = this;

        list.forEach(function(item) {
            //console.log(self.name + ' ' + item);
            console.log(this.name + ' ' + item);
        });
    }
};

workspace.f();