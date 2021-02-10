// ---------表达式类型---------------
// 原始表达式
"test";//字符串
/pattern/;//正则表达式
true;//保留字
x;//变量

// 初始化表达式
[1,2,3];
var o = {key1:1,key2:2};

// 函数定义表达式
var square = function(x){return x * x;};

// 属性访问表达式
o.key1;
o[key1];

// 调用表达式
Math.max(1,2,3);

// 对象创建表达式
new Object();

// 算术表达式
1&0;//false
1|0;//true
1^1;//false,不能同时为0或1
~1;//-1,取反
7<<2;//28，2进制数左移2位，新位置用0补
7>>1;//3，右移一位，正数补0，负数补1
-1>>>1;//2147483647=2^64-1-2^(1-1)

// 关系表达式
null==undefined;//true
null===undefined;//false
x!==x;//只有在x为NaN时才会相等

var point = {x:1,y:2};
"x" in point;//true
"toString" in point;//true

var d = new Date();
d instanceof Date;//true,d是继承自Date
d instanceof Object;//所有的实例都是继承自Object
d instanceof Number;//d不是继承自Number的实例

// 逻辑表达式同c++的&&，||，！

// 赋值表达式
a (op)= b;//op指代操作符，可有可无，括号是不需要的，但是存在这种写法

// 表达式计算
eval("3+2");//置顶优先执行
// 其他
1>2?true:false;//满足条件为前一个，否则是后一个
typeof("test");//检查值的类型
delete o.key1;//删除o对象的属性key1
var a = [1,2,3];
delete a[2];//删除指定数组元素

