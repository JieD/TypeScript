// @target: ES5
// ok

// accessors are not contextually typed
/* contextually typed expression
 * var f: (s: string) => string;
 * f = function(s) { return s.toLowerCase(); }
 * infer the type of s is string
 */

struct C {
    set x(v: (a: string) => string) {
    }

    get x() {
        return (x: string) => "";
    }
}

var c: C;
var r = c.x(''); // string