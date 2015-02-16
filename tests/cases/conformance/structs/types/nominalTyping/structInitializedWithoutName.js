var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
})();

var test = function (person) {
};
test({ name: "John", age: 25 }); // error, need to name the type
test({ name: "John", age: 25, birth: "1990" }); // error
test(new Person({ name: "John", age: 25 })); // error, wrong call signature
test(new Person("John", 25)); // ok
