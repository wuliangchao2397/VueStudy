var q = {x:1,y:2,z:3};
var o = {x:0,r:9};

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

o = inherit(q);
console.log(o);
// o.r = 7;
// console.log(o.propertyIsEnumerable("toString"));
for(p in o){
    if(!o.hasOwnProperty(p)) continue;
    if(typeof o[p] === "function") continue;
    console.log(o[p]);
}

function extend(o,p){
    for (prop in p){
        o[prop] = p[prop];
    }
    return o;
}
