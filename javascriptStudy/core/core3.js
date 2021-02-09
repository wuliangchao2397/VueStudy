// 第三章
Math.pow(2,11);//2的11次幂
Math.round(.6);//四舍五入
Math.ceil(.6);//向上取整
Math.floor(.6);//向下取整
Math.abs(-5);//绝对值
Math.max(1,2,3);//最大
Math.min(1,2,3);//最小
Math.random();//随机数
Math.PI;//π
Math.E;//e,对数底数
Math.sqrt(3);//平方根
Math.pow(3,1/3);//立方根
Math.sin(0);//三角函数
Math.log(10);//10的自然对数
Math.log(100)/Math.LN10;//10为底的自然对数
Math.exp(3);//e的三次幂

Number.POSITIVE_INFINITY;//无穷大
Number.NEGATIVE_INFINITY;//无穷小

var s = "test";
s.charAt(0);//取用单个字符
s.substring(1,3);//取出指定范围字符串,前者起点必须，后者终点可选
s.slice(-3);//同substring，但可以用负数
s.indexOf("e");//第一次出现指定字符的位置，如果再加一个数字，则为指定起点后开始的第一个
s.lastIndexOf("t");//最后一次出现
s.replace("t","T");//替换全文字符
s.toUpperCase();//全员大写
s.toLowerCase();//全员小写

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