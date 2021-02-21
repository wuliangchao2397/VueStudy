var scope = "global";
function f(){//声明提前样例
    console.log(scope);
    var scope = "local";
    console.log(scope);
}

function f2(){//解决方案
    var test = scope;
    console.log(test);
}

f();
f2();

var test1 = "test1";
test2 = "test2";
this.test3 = 3;
console.log(delete test1);
console.log(delete test2);
console.log(delete this.test3);
