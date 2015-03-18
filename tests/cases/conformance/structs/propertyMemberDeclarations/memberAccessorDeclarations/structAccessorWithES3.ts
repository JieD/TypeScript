// @target: ES3

// error to use accessors in ES3 mode

struct C {
    get x() {
        return 1;
    }
}

struct D {
    set x(v) {
    }
}

var x = {
    get a() { return 1 }
}

var y = {
    set b(v) { }
}