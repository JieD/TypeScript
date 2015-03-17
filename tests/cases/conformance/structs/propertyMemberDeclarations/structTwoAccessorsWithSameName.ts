// @target: ES5

struct C {
    get x() { return 1; }
    get x() { return 1; } // error, Duplicate identifier 'x'.
}

struct D {
    set x(v) {  }
    set x(v) {  } // error, Duplicate identifier 'x'.
}

struct E {
    get x() {
        return 1;
    }
    set x(v) { }
}

var x = {
    get x() {
        return 1;
    },

    // error, Duplicate identifier 'x'.
    get x() {
        return 1;
    }
}

var y = {
    get x() {
        return 1;
    },
    set x(v) { }
}