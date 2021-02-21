var o  = {x:1}
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);

console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));//toString是继承属性

function inherit(p){
    if(p == null) throw TypeError();
    if(Object.create)
        return Object.create(p);
    var t = typeof p;
    if(t !== "object"&&t !== "function") throw TypeError();
    function f(){};
    f.prototype = p;
    return new f();
}

console.log("---");
console.log(o.y !== undefined);

var o = inherit({y:2});
o.x = 1;
console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("y"));
console.log(o.propertyIsEnumerable("toString"));

console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);

