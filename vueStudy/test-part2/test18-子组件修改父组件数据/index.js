const app = new Vue({
    el:"#app",
    data:{
        num1:1,
        num2:2
    },
    components:{
        cpn:{
            template:"#cpn",
            props:{
                number1:Number,
                number2:Number
            },
            data(){
                return{
                    // dnumber1:this.number1,
                    // dnumber2:this.number2
                    number1:this.number1,
                    number2:this.number2
                }
            },
            // methods:{
            //     num1Input(event){
            //         this.dnumber1 = event.target.value
            //     },
            //     num2Input(event){
            //         this.dnumber2 = event.target.value
            //     }
            // }
        }
    }
})