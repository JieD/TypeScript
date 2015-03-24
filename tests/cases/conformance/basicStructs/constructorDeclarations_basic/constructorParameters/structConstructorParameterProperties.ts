struct C {
    y: string;
    constructor(private x: string, protected z: string) { }
}

var c: C;
var r = c.y;
var r2 = c.x; // error, Property 'x' is private and only accessible within struct 'C'
var r3 = c.z; // error, Property 'z' is protected and only accessible within struct 'C' and its substructes

struct D<T> {
    y: T;
    constructor(a: T, private x: T, protected z: T) { }
}

var d: D<string>;
var r = d.y;
var r2 = d.x; // error
var r3 = d.a; // error, Property 'a' does not exist on type 'D<string>'
var r4 = d.z; // error
