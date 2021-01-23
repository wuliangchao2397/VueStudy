var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){return scope;}
    return f;
}
console.log(checkscope());

var uniqueInteger = (function(){
    var counter = 0;
    return function(){
        return counter++;
    };
}());
uniqueInteger();
console.log(uniqueInteger());

function counter(){
    var n = 0;
    return {
        count: function(){return n++;},
        reset: function(){n = 0;}
    };
}

var c = counter(),d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(d.count());
console.log(c.count());

function addPrivateProperty(o, name, predicate){
    var value;

    o["get" + name] = function(){return value;};

    o["set" + name] = function(v){
        if(predicate && !predicate(v))
            throw Error("set" + name + ":invalid value " + v);
        else
            value = v;
    };
}

var o = {};

addPrivateProperty(o, "Name", function(x){return typeof x == "string";});

o.setName("Frank");
console.log(o.getName());
o.setName(0);
