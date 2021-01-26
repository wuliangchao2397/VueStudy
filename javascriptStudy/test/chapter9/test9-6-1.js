function Set(){
    this.values = {};//数据
    this.n = 0;//值的个数
    this.add.apply(this,arguments);//所有参数都放入这个集合
}

Set.prototype.add = function(){
    for(var i = 0;i < arguments.length;i++){
        var val = arguments[i];
        var str = Set._v2s(val);
        if(!this.values.hasOwnProperty(str)){
            this.values[str] = val;
            this.n++;
        }
    }
    return this;
};

Set.prototype.contains = function(value){
    return this.values.hasOwnProperty(Set._v2s(value));
};

Set.prototype.size = function(){
    return this.n;
};

Set.prototype.foreach = function(f,context){
    for(var s in this.values)
        if(this.values.hasOwnProperty(s))
            f.call(context,this.values[s]);
};

Set._v2s = function(val){
    switch(val){
        case undefined:return 'u';
        case null:return 'n';
        case true:return 't';
        case false:return 'f';
        default:switch(typeof val){
            case 'number':return '#' + val;
            case 'string':return '"' + val;
            default:return '@' + objectId(val);
        }
    }

    function objectId(o){
        var prop = "|**objectid**|";
        if(!o.hasOwnProperty(prop))
            o[prop] = Set._v2s.next++;
        return o[prop];
    }
};

Set._v2s.next = 100;


