var a: any;

class C {
	foo: string;
}
var ac: C;

struct S {
	foo: string;
}
var as: S;

ac = a; // ok
as = s; // error

a = ac; // ok
a = as; // error
