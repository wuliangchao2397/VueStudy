// 4-5 调用表达式猜想
function f1(x){
    return x;
}
console.log(f1());

// 4-7.6 运算符的结合性测试
var x=1,y=2,z=3;
var a=1,b=2,c=3,d=4,e=5,f=6,g=7;
console.log((x-y-z)==((x-y)-z));
console.log((~-y));
console.log(a?b:c);
console.log((a?b:c?d:e?f:g)==(a?b:(c?d:(e?f:g))));

// 4-8.3 位运算符测试
console.log(7<<1);//14
console.log(7<<2);//28
console.log(1>>2);
console.log(-1>>>63);
console.log((~7).toString(2));

// 4-12。2
var global_eval = eval;
var x = "global",y="global";
function f2(){
    console.log(x);
    var x = "local";
    eval("x += ' changed';");
    return x;
}

function f3(){
    var y1 = "local";
    eval(" y += ' changed';");//和书本的规则不同，别名引用不能找到全局变量
    return y1;
}

console.log(f2(),x);
console.log(f3(),y);
