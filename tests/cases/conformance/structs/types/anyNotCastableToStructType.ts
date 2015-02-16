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
as = <any>s; // error


a = ac; // ok
a = <any>as; // error
