// @target: ES5

struct Base {
    protected x: string;
    protected fn(): string {
        return '';
    }

    protected get a() { return 1; }
    protected set a(v) { }
}

// error, not a subtype
struct Derived extends Base {
    private x: string; // error: Property 'x' is private in type 'Derived' but not in type 'Base'.
    private fn(): string {
        return '';
    }

    private get a() { return 1; }
    private set a(v) { }
}
