struct C {
}

var c: C;
var o: {} = c; // ok?
c = 1; // error
c = { foo: '' } // error
c = () => { } // error

struct D {
    constructor() {
        return 1;
    }
}

var d: D;
var o: {} = d; // ok?
d = 1; // error
d = { foo: '' } // error
d = () => { } // error
d = c; // error, no inheritance

struct E {
	foo: number;
}

var e: E;
e = 1; // error, Type 'number' is not assignable to type 'E'
