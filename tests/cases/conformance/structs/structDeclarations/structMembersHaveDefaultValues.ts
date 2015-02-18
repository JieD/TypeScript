// reference specification
struct Person {
	name: string;
	age: number;
	parents: Person[];
}

var empty: Person = new Person();
empty.name; // empty string
empty.age; // 0
empty.parents; // []


