struct C {
}

var c: C;
var o: {} = c; // error, can only assign struct to struct
c = 1; // error
c = { foo: '' } // error
c = () => { } // error

struct D {
    constructor() {
        return 1;
    }
}

var d: D;
var o: {} = d; // error
d = 1; // error
d = { foo: '' } // error
d = () => { } // error

struct E {
	foo: number;
}

var e: E;
e = 1; // error, property missing (TS original behavior)