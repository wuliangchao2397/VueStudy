var book = {
    "main title":"JavaScript",//属性名字里有空格，必须用字符串表示
    'sub-title':"The Definitive Guide",//属性名字里有连字符，必须用字符串表示
    "for":"all audiences",//for是保留字，必须用引号
    author:{//这里的属性是一个对象
        firstname:"David",//这里的属性名都没有引号
        surname:"Flanagan"
    }
};

delete book.author;//book不再有属性author
console.log(book.valueOf());
delete book["main title"];//不再有属性“main title”

console.log(book.valueOf());

o = {x:1};
console.log(delete o.x);
console.log(delete o.x);
console.log(delete o.toString);
console.log(delete 1);

console.log(delete Object.prototype);
var x = 1;
console.log(delete this.x);
function f(){}
console.log(delete this.f);
