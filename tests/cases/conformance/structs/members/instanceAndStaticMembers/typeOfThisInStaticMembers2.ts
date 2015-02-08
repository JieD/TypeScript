struct C {
    static foo = this; // error
}

struct C2<T> {
    static foo = this; // error
}