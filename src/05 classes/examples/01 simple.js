"use strict";

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle extends Point {
    constructor(r, x, y) {
        super(x, y);
        this.r = r;
    }
    isPointIncluded(point) {
        if (point.constructor != Point) throw new Error("point must be an instance of Point");
        return Math.pow(this.r, 2)+Math.pow(this.y, 2) >=
            Math.pow(this.x-point.x, 2)+Math.pow(this.y-point.y, 2);
    }
}

let c = new Circle(6, 2, 1);

let p = new Point(2,  4);

console.log(c.isPointIncluded(p)); // true