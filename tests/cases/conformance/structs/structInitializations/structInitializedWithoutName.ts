/**
 * Created by jie on 2/4/15.
 */

struct Person {
	name: string;
	age: number
	constructor(name: string, age: number) {};
}

var test = function (person: Person) {}
test(new Person());
test({ name: "John", age: 25 }); // wrong, need an explicit declaration
