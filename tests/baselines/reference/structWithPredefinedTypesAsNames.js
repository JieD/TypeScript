//// [structWithPredefinedTypesAsNames.ts]
// structs cannot use predefined types as names

struct any { }
struct number { }
struct boolean { }
struct string { }

//// [structWithPredefinedTypesAsNames.js]
// structs cannot use predefined types as names
var any = (function () {
    var _any = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function any() {
        var obj = new _any();
        _ctor.call(obj);
        return obj;
    }
    return any;
})();
var number = (function () {
    var _number = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function number() {
        var obj = new _number();
        _ctor.call(obj);
        return obj;
    }
    return number;
})();
var boolean = (function () {
    var _boolean = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function boolean() {
        var obj = new _boolean();
        _ctor.call(obj);
        return obj;
    }
    return boolean;
})();
var string = (function () {
    var _string = new TypedObject.StructType({
    });
    function _ctor() {
    }
    function string() {
        var obj = new _string();
        _ctor.call(obj);
        return obj;
    }
    return string;
})();
