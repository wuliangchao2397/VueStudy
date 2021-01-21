var o = {
    value:"null",
    test:function(x){
        this.result = this.value + x;
    }
}

// o.test("test");
o["test"]("test");
console.log(o.result);
