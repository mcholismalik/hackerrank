class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    // area() {
    //     let res = (this.h == 0) ? this.w * this.w : this.w * this.h;
    //     return res;
    // }
}

Rectangle.prototype.area = function () {
    let res = (this.h == 0) ? this.w * this.w : this.w * this.h;
    return res;
}

class Square extends Rectangle {
    constructor(w) {
        super(w, 0);
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}

console.log(JSON.stringify(['constructor']))
console.log(JSON.stringify(Object.getOwnPropertyNames(Square.prototype)))