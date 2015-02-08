// ordering of super calls in derived constructors matters depending on other struct contents

struct Base {
    x: string;
}

struct Derived extends Base {
    constructor(y: string) {
        var a = 1;
        super(); // ok
    }
}

struct Derived2 extends Base {
    constructor(public y: string) { // has parameter properties
        var a = 1;
        super(); // error
    }
}

struct Derived3 extends Base {
    constructor(public y: string) {
        super(); // ok
        var a = 1;
    }
}

struct Derived4 extends Base {
    a = 1; // contains initialized properties
    constructor(y: string) {
        var b = 2;
        super(); // error
    }
}

struct Derived5 extends Base {
    a = 1;
    constructor(y: string) {
        super(); // ok
        var b = 2;
    }
}

struct Derived6 extends Base {
    a: number;
    constructor(y: string) {
        this.a = 1;
        var b = 2;
        super(); // ok
    }
}

struct Derived7 extends Base {
    a = 1;
    b: number;
    constructor(y: string) {
        this.a = 3;
        this.b = 3;
        super(); // error
    }
}

struct Derived8 extends Base {
    a = 1;
    b: number;
    constructor(y: string) {
        super(); // ok
        this.a = 3;
        this.b = 3;        
    }
}

// generic cases of Derived7 and Derived8
struct Base2<T> { x: T; }

struct Derived9<T> extends Base2<T> {
    a = 1;
    b: number;
    constructor(y: string) {
        this.a = 3;
        this.b = 3;
        super(); // error
    }
}

struct Derived10<T> extends Base2<T> {
    a = 1;
    b: number;
    constructor(y: string) {
        super(); // ok
        this.a = 3;
        this.b = 3;
    }
}