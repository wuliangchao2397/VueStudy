var addr ="";
var customer = {
    address0:"test1",
    address1:"test2",
    address2:"test3",
    address3:"test4"
}
for(i = 0;i < 4;i++){
    addr += customer["address" + i] + '\n';
}
console.log(addr); 