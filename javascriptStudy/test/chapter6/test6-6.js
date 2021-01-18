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

var value = "test";
var o = {
    data_drop:value,

    get accessor_prop(){
        return this.data_drop;
    },
    set accessor_prop(value){
        this.data_drop = value;
    }
};

o.accessor_prop = "change";
console.log(o.accessor_prop);

var random = inherit(o);
random = {
    get octet(){
        return Math.floor(Math.random()*256);
    },
    get uint16(){
        return Math.floor(Math.random()*65536);
    },
    get int16(){
        return Math.floor(Math.random()*65536)-32768;
    }
};
console.log(random.octet);
console.log(random.octet);
console.log(random.uint16);
console.log(random.uint16);
console.log(random.int16);
console.log(random.int16);
console.log(random.accessor_prop);//很显然是不能参与继承的
