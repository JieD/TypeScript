// @target: ES5

struct C {
    static get x() { return 1; }
    static get x() { return 1; } // error, Duplicate identifier 'x'.
}

struct D {
    static set x(v) {  }
    static set x(v) {  } // error, Duplicate identifier 'x'.
}

struct E {
    static get x() {
        return 1;
    }
    static set x(v) { }
}