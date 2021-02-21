var a1 = [,,,];
var a2 = new Array(3);
console.log(a1.toString());
console.log(a2.toString());
console.log(0 in a1);
console.log(0 in a2);

var a3 = [,];
var a4 = [undefined];
console.log(0 in a3);
console.log(0 in a4);

var table = new Array(10);
for(var i = 0;i < table.length;i++){
    table[i] = new Array(10);
}
for(var row = 0;row < table.length;row++){
    for(var col = 0;col < table[row].length;col++){
        table[row][col] = row*col;
    }
}
for(var value in table){
    console.log(table[value]);
    for(var key in table[value]){
        console.log(table[value][key]);
    }
}