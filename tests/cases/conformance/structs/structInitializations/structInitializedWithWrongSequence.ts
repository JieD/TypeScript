struct Person {
	constructor(public name: string, public age: number) {}
}
var john = new Person("John", 25); // correct
var george = new Person(25, "George"); // wrong, sequence matters. comply with class syntax
var jg = new Person("John", "George", 25); // wrong parameter number
var george1 = new Person({age: 25, name: "George"}); // wrong, sequence matters

