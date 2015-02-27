// substructing is not transitive when you can remove required parameters and add optional parameters on protected members

struct C {
    protected foo(x: number) { }
}

struct D extends C {
    protected foo() { } // ok to drop parameters
}

struct E extends D {
    public foo(x?: string) { } // ok to add optional parameters
}

var c: C;
var d: D;
var e: E;
c = e; // error, Type '(x?: string) => void' is not assignable to type '(x: number) => void':
var r = c.foo(1);
var r2 = e.foo('');