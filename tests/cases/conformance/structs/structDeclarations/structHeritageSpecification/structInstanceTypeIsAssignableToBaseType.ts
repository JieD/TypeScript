struct C {
	foo: string;
	thing() { }
}

struct D extends C {
	foo: number;  // error, not assignable to base type
}