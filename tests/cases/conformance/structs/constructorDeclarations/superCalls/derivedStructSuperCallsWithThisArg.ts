// When a super call is required (meet the following condition):
// 1. The containing struct is a derived struct.
// 2. The constructor declares parameter properties or the containing struct
// declares instance member variables with initializers.
// it is a compile-time error for argument expressions to reference this.


struct Base {
    x: string;
    constructor(a) { }
}

struct Derived extends Base {
    constructor() {
        super(this); // ok
    }
}

struct Derived2 extends Base {
    constructor(public a: string) {
        super(this); // error, 'this' cannot be referenced in current location
    }
}

struct Derived3 extends Base {
    constructor(public a: string) {
        super(() => this); // error, 'this' cannot be referenced in current location
    }
}

struct Derived4 extends Base {
    constructor(public a: string) {
        super(function () { return this; }); // ok
    }
}