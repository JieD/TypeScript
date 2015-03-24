// @target: ES5
// error to use super calls outside a constructor or in nested functions inside constructors

struct Base {
    x: string;
}

struct Derived extends Base {
    a: super(); // error
    b() {
        super(); // error
    }
    get C() {
        super(); // error
        return 1;
    }
    set C(v) {
        super(); // error
    }

    static a: super(); // error
    static b() {
        super(); // error
    }
    static get C() {
        super(); // error
        return 1;
    }
    static set C(v) {
        super(); // error
    }
}