var o = {
    test:"created"
}

new Vue({
    el:"#app",
    data:o,
    created:function(){
        console.log("created.data:" + this.test)
    },
    updated:function(){
        console.log("updated.data:" + this.test)
    }
})