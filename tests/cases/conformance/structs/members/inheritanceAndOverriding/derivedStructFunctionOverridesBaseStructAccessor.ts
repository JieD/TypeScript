class Base {
    get x() { // instance member accessor
        return 1;
    }
    set x(v) {
    }
}

// error
class Derived extends Base {
    x() { // error, instance member function -> wrong overriding
        return 1;
    }
}