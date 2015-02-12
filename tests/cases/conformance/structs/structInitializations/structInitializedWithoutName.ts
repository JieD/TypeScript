struct Person {
	constructor(public name: string, public age: number) {}
}

var test = function (person: Person) {}
test(new Person()); // error
test({ name: "John", age: 25 }); // wrong, need an explicit declaration
