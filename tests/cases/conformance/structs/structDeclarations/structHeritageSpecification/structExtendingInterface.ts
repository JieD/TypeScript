interface C {
	foo: string;
	thing() { }
}

struct D implements C { // error. struct cannot implement interface
	bar: string;
}