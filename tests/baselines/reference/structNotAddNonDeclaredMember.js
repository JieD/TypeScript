//// [structNotAddNonDeclaredMember.ts]
struct C {
	constructor(public firstName: string, public age: number) {}
}

var c = new C("John", 25);
c.lastName = c.firstName; // error, cannot add undefined members to struct

//// [structNotAddNonDeclaredMember.js]
var C = (function () {
    function C(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    return C;
})();
var c = new C("John", 25);
c.lastName = c.firstName; // error, cannot add undefined members to struct
