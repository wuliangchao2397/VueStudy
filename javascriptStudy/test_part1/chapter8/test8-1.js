function Test(x){
    console.log(x);
}

var square = function(x){//无需命名的函数表达式，可以通过这个变量使用
    return x*x;
}

var t = (function(x){//表达式方式使用函数，立即赋值使用
    console.log(x);
}(1));

Test("test");

console.log(square(3));