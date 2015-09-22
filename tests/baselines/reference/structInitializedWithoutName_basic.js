//// [structInitializedWithoutName_basic.ts]
struct Person {
	constructor(public name: string, public age: number) {}
}

var test = function (person: Person) {}
test({ name: "John", age: 25 }); // error, need to name the type
test({name: "John", birth: "1990"}); // error
test(new Person({ name: "John", age: 25 })); // error, wrong call signature
test(new Person("John", 25)); // ok


//// [structInitializedWithoutName_basic.js]
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
    Person._TO = _Person;
    return Person;
})();
var test = function (person) {
};
test({ name: "John", age: 25 }); // error, need to name the type
test({ name: "John", birth: "1990" }); // error
test(new Person({ name: "John", age: 25 })); // error, wrong call signature
test(new Person("John", 25)); // ok
