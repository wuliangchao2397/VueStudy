//---------JavaScipt var声明变量---------
var x;
//-----------var可用类型------------
// x = 1; //整型
// x = 0.03; //实数，和整型共用同一种类型

// x = "hello world";//双引号内字符串
// x = "\'hello world\'";//双引号内使用单引号用转义\'
// x = 'JavaScript';//单引号内字符串
// x = '\"JavaScript\"';//单引号内使用双引号用转义\"

//布尔型两种类型
// x = true;
// x = false;

//两个相似的特殊值
// x = null;
// x = undefined;
// console.log(typeof null);//类型不同，null为object
// console.log(typeof undefined);//undefined为undefined
// console.log(Number(undefined));//转换值时undefined为NaN
// console.log(Number(null));//转化值时null为0
// console.log(undefined===null);//并不恒等
// console.log(undefined==null);//大多数时候相等

//测试用
console.log(x);

// ----------------对象（重点类型）---------------
// 对象是名/值对的集合，或字符串到值映射的集合
var book = {//对象用花括号
    topic:"JavaScript",//每一项间隔用逗号隔开
    fat:true//最后一项不用跟符号，花括号就是结束
};

// 访问对象
console.log(book.topic);
console.log(book["fat"]);
book.author="Flanagan";
console.log(book.author);
book.contexts={};
console.log(book);

//数组
var primes = [2,3,5,7];//访问数组所用方法与对象相似
console.log(primes.length)//数组长度
console.log(primes[primes.length - 1])//数组的起点是0

//数组与对象可以相互包含
var points = [
    {x:0,y:0},//数组下的对象可以有命名，也可以没有,输出结果都是没有
    {x:1,y:1}
];
var data = {
    trial1:[[1,2],[3,4]],//对象下的数组必须要有命名，按照这个格式
    trial2:[[2,3],[4,5]]
};
console.log(points);
console.log(data);
