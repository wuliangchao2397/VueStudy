Vue.component('button-counter',{
    props:['title'],
    data:function(){
        return {
            count:0
        }
    },
    template:'<div><h1>hi...</h1><button v-on:click="click_func">{{title}} You clicked me {{count}} times.</button></div>',
    methods:{
        click_func:function(){
            this.count++;
            this.$emit('click_now',this.count);
        }
    }
})
var vm = new Vue({
    el:"#app",
    data:{

    },
    methods:{
        click_now:function(e){
            console.log(e);
        }
    }
})