struct Person {
	constructor(public name: string, public age: number) {}
}

var test = function (person: Person) {}
test({ name: "John", age: 25 }); // error, need to name the type
test(new Person({ name: "John", age: 25 })); // error, wrong call signature
test(new Person("John", 25)); // ok