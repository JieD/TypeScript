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
        super(this); // error
    }
}

struct Derived3 extends Base {
    constructor(public a: string) {
        super(() => this); // error
    }
}

struct Derived4 extends Base {
    constructor(public a: string) {
        super(function () { return this; }); // ok
    }
}