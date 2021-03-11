var vm = new Vue({
    el:"#app",
    data:{
        counter:0,
        name:"vue"
    },
    methods:{
        greet:function(str , e){
            alert(str);
            console.log(e);
        }
    }
})