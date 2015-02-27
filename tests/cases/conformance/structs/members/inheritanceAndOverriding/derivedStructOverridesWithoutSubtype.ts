struct Base {
    x: {
        foo: string;
    }
}

struct Derived extends Base {
    x: {
        foo: any; // correct?
    }
}

struct Base2 {
    static y: {
        foo: string;
    }
}

struct Derived2 extends Base2 {
    static y: {
        foo: any;
    }
}