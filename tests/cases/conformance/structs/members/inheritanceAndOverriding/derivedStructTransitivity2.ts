// substructing is not transitive when you can remove required parameters and add optional parameters

struct C {
    foo(x: number, y: number) { }
}

struct D extends C {
    foo(x: number) { } // ok to drop parameters
}

struct E extends D {
    foo(x: number, y?: string) { } // ok to add optional parameters
}

struct F extends D {
	foo(x: number, y?: number) { } // ok to add optional parameters
}

var c: C;
var d: D;
var e: E;
var f: F;
c = e; // error, function signature are not compatible
c = f; // ok
var r = c.foo(1, 1);
var r2 = e.foo(1, '');