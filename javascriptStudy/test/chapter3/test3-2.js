var p = "π";
var e = "e";//需要通过utf-16编码后，才会是两个16位
// console.log(p.length);
// console.log(e.length);

// console.log("two\nlines");
// console.log("one\
// long\
// line");

var text1 = "testing:1,2,3";
var text2 = "testing";
var pattern = /\d+/;//d为数字，D为非数字
console.log(pattern.test(text1));
console.log(pattern.test(text2));
