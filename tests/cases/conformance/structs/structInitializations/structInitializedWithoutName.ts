struct Person {
	constructor(public name: string, public age: number) {}
}

var test = function (person: Person) {}
test(new Person("John", 25)); // correct
test({ name: "John", age: 25 }); // wrong, need an explicit declaration
