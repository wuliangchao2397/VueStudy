var empty = {};//没有任何属性
var point = {x:0,y:0};//两个属性
var point2 = {x:point.x,y:point.y+1};//更复杂的值
var book = {
    "main title":"JavaScript",//属性名字里有空格，必须用字符串表示
    'sub-title':"The Definitive Guide",//属性名字里有连字符，必须用字符串表示
    "for":"all audiences",//for是保留字，必须用引号
    author:{//这里的属性是一个对象
        firstname:"David",//这里的属性名都没有引号
        surname:"Flanagan"
    }
};

console.log(book.valueOf());

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

console.log(typeof inherit({"key":"test"}));
