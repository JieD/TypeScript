//// [structWithPredefinedTypesAsNames.ts]
// structes cannot use predefined types as names

struct any { }
struct number { }
struct boolean { }
struct string { }

//// [structWithPredefinedTypesAsNames.js]
// structes cannot use predefined types as names
var any = (function () {
    function any() {
    }
    return any;
})();
var number = (function () {
    function number() {
    }
    return number;
})();
var boolean = (function () {
    function boolean() {
    }
    return boolean;
})();
var string = (function () {
    function string() {
    }
    return string;
})();
