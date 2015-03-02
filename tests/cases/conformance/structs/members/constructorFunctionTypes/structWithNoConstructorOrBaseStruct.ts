struct C {
    x: string;
}

var c = new C();
var r = C;

struct D<T,U> {
    x: T;
    y: U;
}

var d = new D();
var d2 = new D<string, number>();
var r2 = D;
