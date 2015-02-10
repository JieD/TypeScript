struct Person {
	name: string;
	age: number
	constructor(name: string, age: number) {};
}
var john = new Person("John", 25); // correct
var george = new Person(45, "George"); // wrong, sequence matters

