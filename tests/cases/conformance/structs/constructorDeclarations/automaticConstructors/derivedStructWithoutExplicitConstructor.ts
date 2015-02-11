struct Base {
    a = 1;
    constructor(x: number) { this.a = x; }
}

struct Derived extends Base {
    x = 1
    y = 'hello';
}

var r = new Derived(); // error
var r2 = new Derived(1); 

/* struct Base2<T> {
    a: T;
    constructor(x: T) { this.a = x; }
}

struct D<T extends Date> extends Base2<T> {
    x = 2
    y: T = null;
}

var d = new D(); // error
var d2 = new D(new Date()); // ok