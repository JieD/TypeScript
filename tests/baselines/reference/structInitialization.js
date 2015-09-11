//// [structInitialization.ts]
// doc 7
// Struct initialization requires explicit declaration and the sequence of the arguments matters.
struct Person {
	constructor(public name: string, public age: number) {}
}
var john = new Person("John", 25); // ok
var george = new Person(25, "George"); // error, sequence matters
var jg = new Person("John", "George", 25); // error, wrong call signature
var john1 = new Person({name: "John", age: 25}); // error, wrong call signature

var test = function (person: Person) {}
test(john); // ok
test({ name: "John", age: 25 }); // error, type incompatibility. need an explicit declaration



//// [structInitialization.js]
// doc 7
// Struct initialization requires explicit declaration and the sequence of the arguments matters.
var Person = (function () {
    var _Person = new TypedObject.StructType({
    });
    function _ctor(name, age) {
        this.name = name;
        this.age = age;
    }
    function Person(name, age) {
        var obj = new _Person();
        _ctor.call(obj ,name, age);
        return obj;
    }
    return Person;
})();
var john = new Person("John", 25); // ok
var george = new Person(25, "George"); // error, sequence matters
var jg = new Person("John", "George", 25); // error, wrong call signature
var john1 = new Person({ name: "John", age: 25 }); // error, wrong call signature
var test = function (person) {
};
test(john); // ok
test({ name: "John", age: 25 }); // error, type incompatibility. need an explicit declaration
