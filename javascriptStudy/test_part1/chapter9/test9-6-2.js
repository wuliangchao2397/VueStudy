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

var Coin = enumeration({Penny:1,Nickel:5,Dime:10,Quarter:25});
var c = Coin.Dime;
console.log(c instanceof Coin);
console.log(c.constructor = Coin);
console.log(Coin.Quarter + 3*Coin.Nickel);
console.log(Coin.Dime == 10);
console.log(Coin.Dime > Coin.Nickel);
console.log(String(Coin.Dime) + ":" + Coin.Dime);

function enumeration(nameToValues){
    var enumeration = function(){throw "Can't Instantiate Enumerations";};

    var proto = enumeration.prototype = {
        constructor:enumeration,
        toString:function(){return this.name;},
        valueOf:function(){return this.valueOf;},
        toJSON:function(){return this.name;}
    };

    enumeration.values = [];

    for(key in nameToValues){
        var e = inherit(proto);
        e.name = key;
        e.value = nameToValues[key];
        enumeration[key] = e;
        enumeration.values.push(e);
    }

    enumeration.foreach = function(f,c){
        for(var i = 0;i < this.values.length;i++) f.call(c,this.values[i]);
    };

    return enumeration;
}

