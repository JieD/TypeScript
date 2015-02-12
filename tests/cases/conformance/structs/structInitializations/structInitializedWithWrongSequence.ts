struct Person {
	constructor(public name: string, public age: number) {}
}
var john = new Person("John", 25); // correct
var george = new Person(45, "George"); // wrong, sequence matters
var jg = new Person({age: 45, name: "George"}); // wrong, sequence matters

