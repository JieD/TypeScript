/*
 * When comparing two objects of a class type, only members of the instance are compared.
 * Static members and constructors do not affect compatibility.
 * While for struct, type compatibility only works for structs within the same family.
 */
struct Animal {
	feet: number;
	constructor(name: string, numFeet: number) { }
}

struct Size {
	feet: number;
	constructor(numFeet: number) { }
}

var a: Animal;
var s: Size;

a = s;  //error
s = a;  //error

