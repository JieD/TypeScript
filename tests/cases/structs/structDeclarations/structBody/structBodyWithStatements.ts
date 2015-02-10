struct C {
    var x = 1; // error
}

struct C2 {
    function foo() {} // error
}

var x = 1;
var y = 2;
struct C3 {
    x: number = y + 1; // ok, need a var in the statement production
}