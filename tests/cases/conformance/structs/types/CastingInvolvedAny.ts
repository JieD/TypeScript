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
as = a; // error, cannot assign any to struct
as = <S>a; // error


a = ac; // ok
a = as; // error, cannot assign sruct to any
a = <any>as; // error
