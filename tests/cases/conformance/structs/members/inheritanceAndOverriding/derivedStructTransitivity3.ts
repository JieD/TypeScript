// substructing is not transitive when you can remove required parameters and add optional parameters

struct C<T> {
    foo(x: T, y: T) { }
}

struct D<T> extends C<T> {
    foo(x: T) { } // ok to drop parameters
}

struct E<T> extends D<T> {
    foo(x: T, y?: number) { } // ok to add optional parameters
}

var c: C<string>;
var d: D<string>;
var e: E<string>;
c = e; // error, Type '(x: string, y?: number) => void' is not assignable to type '(x: string, y: string) => void':
var r = c.foo('', '');
var r2 = e.foo('', 1);