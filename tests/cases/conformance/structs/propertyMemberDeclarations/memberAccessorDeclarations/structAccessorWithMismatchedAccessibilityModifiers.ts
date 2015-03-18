// @target: ES5
// Accessors for the same member name must specify the same accessibility.

class C {
    get x() {
        return 1;
    }
    private set x(v) { // error, Getter and setter accessors do not agree in visibility.
    }
}

class D {
    protected get x() {
        return 1;
    }
    private set x(v) { // error
    }
}

class E {
    protected set x(v) {
    }
    get x() { // error
        return 1;
    }
}

class F {
    protected static set x(v) {
    }
    static get x() { // error
        return 1;
    }
}