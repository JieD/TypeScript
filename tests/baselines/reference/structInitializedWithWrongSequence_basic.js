//// [structInitializedWithWrongSequence_basic.ts]
struct Person {
	constructor(public name: string, public age: number) {}
}
var john = new Person("John", 25); // ok
var george = new Person(25, "George"); // error, sequence matters. comply with class syntax
var jg = new Person("John", "George", 25); // error, wrong call signature. comply with class syntax

var john1 = new Person({name: "John", age: 25}); // error, wrong call signature. comply with class syntax
var george1 = new Person({age: 25, name: "George"}); // error. wrong call signature. comply with class syntax



//// [structInitializedWithWrongSequence_basic.js]
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
var george = new Person(25, "George"); // error, sequence matters. comply with class syntax
var jg = new Person("John", "George", 25); // error, wrong call signature. comply with class syntax
var john1 = new Person({ name: "John", age: 25 }); // error, wrong call signature. comply with class syntax
var george1 = new Person({ age: 25, name: "George" }); // error. wrong call signature. comply with class syntax
