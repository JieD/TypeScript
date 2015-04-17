var Pt = (function () {
    var _Pt = new TypedObject.StructType({
        x: TypedObject.float64,
        y: TypedObject.float64
    });
    function _ctor() {
    }
    function Pt() {
        var obj = new _Pt();
        _ctor.call(obj);
        return obj;
    }
    Pt._TO = _Pt;
    return Pt;
})();
var PtC = (function () {
    function PtC() {
    }
    return PtC;
})();
var arr = new (Pt._TO.array(5))();
arr[0].x = 10;
arr[0].y = 4;
var arr2 = new PtC[4];
