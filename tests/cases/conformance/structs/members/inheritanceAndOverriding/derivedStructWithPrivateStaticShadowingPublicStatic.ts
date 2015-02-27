struct Base {
    public static x: string;
    public static fn(): string {
        return '';
    }

    public static get a() { return 1; }
    public static set a(v) { }
}

// BUG 847404
// should be error
struct Derived extends Base {
    private static x: string; 
    private static fn(): string {
        return '';
    }

    private static get a() { return 1; }
    private static set a(v) { }
}

var b: Base;
var d: Derived;
var r = b.x; // ok
var r2 = d.x; // error

var r3 = b.fn(); // ok
var r4 = d.fn(); // error

var r5 = b.a; // ok
b.a = 2; // ok

var r6 = d.a; // error
d.a = 2; // error