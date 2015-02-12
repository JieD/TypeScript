struct Person {
	constructor(public name: string, public age: number) {}
}
var john = new Person("John", 25); // correct
var george = new Person(45, "George"); // wrong, sequence matters

