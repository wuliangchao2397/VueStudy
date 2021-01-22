function f(x,y){
    if(arguments.length != 2){
        throw new Error("function f called with"
         + arguments.length + "arguments,but it experts 2 arguments.");
    }
    console.log(x + y);
}

f(1,2);

function Max(/* ... */){
    var max = Number.NEGATIVE_INFINITY;
    for(var i = 0;i < arguments.length;i++){
        if(arguments[i] > max)max = arguments[i];
    }
    return max;
}

console.log(Max(1,9,3,4,6,2));

