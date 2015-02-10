struct C {
	name: string;
	age: number
}

var c1 = new C(); // correct
c1.name = "John";
c1.age = 25;
var c2 = new C("John", 25); // error, (constructor) C(): C

struct D {
	name: string;
	age: number
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	};
}
var d1 = new D(); // error, (constructor) D(name: string, age: number): D
var d2 = new D("John", 25); // correct
d2.name; // should be 'John'