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

