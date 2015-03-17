struct C {
    foo();
    static foo(); // error, Function overload must not be static.
}

struct D {
    static foo();
    foo(); // error, Function overload must be static.
}

struct E<T> {
    foo(x: T);
    static foo(x: number); // error, Function overload must not be static.
}

struct F<T> {
    static foo(x: number);
    foo(x: T); // error, Function overload must be static.
}