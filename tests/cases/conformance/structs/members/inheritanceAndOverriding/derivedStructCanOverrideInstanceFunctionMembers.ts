// doc 2.3
// derived struct can override base struct's instance function members

var x: { foo: string; }
var y: { foo: string; bar: string; }

struct Base {
    a: typeof x;
    b(a: typeof x) { }
    d: (a: typeof x) => void;

    constructor(a: typeof x) { }
}

struct Derived extends Base {
    a: typeof y; // error
    b(a: typeof y) { } // ok
    d: (a: typeof y) => void; // ok

    constructor(a: typeof y) { super(x) }
}


/* struct Base2 {
    [i: string]: Object;
    [i: number]: typeof x;
}

struct Derived2 extends Base2 {
    [i: string]: typeof x;
    [i: number]: typeof y;
}

var d2: Derived2;
var r7 = d2[''];
var r8 = d2[1]; */

