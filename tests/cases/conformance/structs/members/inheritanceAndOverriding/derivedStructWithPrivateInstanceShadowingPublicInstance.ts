// @target: ES5

struct Base {
    public x: string;
    public fn(): string {
        return '';
    }

    public get a() { return 1; }
    public set a(v) { }
}

// error, not a subtype
struct Derived extends Base {
    private x: string; 
    private fn(): string {
        return '';
    }

    private get a() { return 1; }
    private set a(v) { }
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