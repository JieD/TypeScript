// doc 2.2
// Due to Typed Objects being nonextensible and non-configurable, accessors are not allowed.

struct C {
    private _foo: string;

    set foo(new_foo: string) { // error, getters and setters are not allowed in strcut
        this._foo = new_foo;
    }
}