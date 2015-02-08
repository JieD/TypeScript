struct C {
    y: number;
    constructor(y: number) { } // ok
}

var c: C;
var r = c.y;

struct D {
    y: number;
    constructor(public y: number) { } // error
}

var d: D;
var r2 = d.y;

struct E {
    y: number;
    constructor(private y: number) { } // error
}

var e: E;
var r3 = e.y; // error

struct F {
    y: number;
    constructor(protected y: number) { } // error
}

var f: F;
var r4 = f.y; // error
