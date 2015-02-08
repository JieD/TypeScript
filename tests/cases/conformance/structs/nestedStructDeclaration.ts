// nested structes are not allowed

struct C {
    x: string;
    struct C2 {
    }
}

function foo() {
    struct C3 {
    }
}

var x = {
    struct C4 {
    }
}
