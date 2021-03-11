var vm = new Vue({
    el:"#app",
    data:{
        message:'',
        message2:'',
        checkedNames:[],
        picked:''
    },
    methods:{
        submit:function(){
            console.log(this.message);
        }
    }
})