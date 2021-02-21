// number-to-string
var n = 17;
binary_string = n.toString(2);//2进制
console.log(binary_string);
octal_string = "0" + n.toString(8);//八进制
console.log(octal_string);
hex_string = "0x" + n.toString(16);//十六进制
console.log(hex_string);

n = 123456.789;
console.log(n.toFixed(0));//有效小数
console.log(n.toFixed(2));
console.log(n.toFixed(5));
console.log(n.toExponential(1));//指数形式
console.log(n.toPrecision(10));//有效位数

//string-to-number
console.log(parseInt("3 test"));
console.log(parseFloat("3.14 test"));
console.log(parseInt("-12.34"));
console.log(parseInt(0xff));
console.log(parseFloat(0xff));
console.log(parseInt(".1"));
console.log(parseFloat("#1.11"))
console.log(parseInt("ff",16));

// object-to-string
var s1 = [1,2,3].toString()//数组类
var s2 = (function(x){ f(x);}).toString()//函数类
var pattern=/\d+/g;//正则直接量
var s3 = pattern.toString()
// var s4 = new Date(2020,1,6).toString()//日期
var s4 = new Date(2020,1,6).valueOf()//日期
var list = {key1:1,key2:2,key3:3};
var s5 = list.toString();//普通对象
// var s5 = list.valueOf();
var s6 = new Error("test").toString()//error类
console.log(s1,s2,s3,s4,s5,s6);

var now = new Date();
console.log(typeof(now + 1));
console.log(typeof(list -1));
console.log(typeof(now - 1));
