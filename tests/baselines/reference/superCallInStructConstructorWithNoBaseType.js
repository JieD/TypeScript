//// [superCallInStructConstructorWithNoBaseType.ts]
// doc 3.2
// 'super' can only be referenced in a derived struct

struct C {
    constructor() {
        super(); // error
    }
}

/* struct D<T> {
    public constructor(public x: T) {
        super(); // error
    }
} */

//// [superCallInStructConstructorWithNoBaseType.js]
// doc 3.2
// 'super' can only be referenced in a derived struct
var C = (function () {
    function C() {
        _super.call(this); // error
    }
    return C;
})();
