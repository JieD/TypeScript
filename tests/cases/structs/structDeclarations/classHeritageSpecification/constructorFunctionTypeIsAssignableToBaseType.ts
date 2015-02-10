struct Base {
    static foo: {
        bar: Object;
    }
}

struct Derived extends Base {
    // ok
    static foo: {
        bar: number;
    }
}

struct Derived2 extends Base {
    // ok, use assignability here
    static foo: {
        bar: any;
    }
}