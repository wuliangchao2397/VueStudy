var token = true;
mainloop:while(token !=null){
    console.log(token);
    token = null;
    continue mainloop;
}

function factorial(num){
    var result = num;
    if(num < 0) return -1;
    else if(num === 0&&num === 1) return result;
    else{
        while(num>1){
            num--;
            result *= num;
        }
        return result;
    }
}

try{
    // var n = Number(prompt("请输入一个正整数"," "));
    var n = Number("test");
    var f = factorial(n);
    console.log(n + "! = " + f);
}
catch(ex){
    console.log(ex);
}