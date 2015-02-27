// substructing is not transitive when you can remove required parameters and add optional parameters

struct C {
    foo(x: number) { }
}

struct D extends C {
    foo() { } // ok to drop parameters
}

struct E extends D {
    foo(x?: string) { } // ok to add optional parameters
}

var c: C;
var d: D;
var e: E;
c = e;
var r = c.foo(1);
var r2 = e.foo('');