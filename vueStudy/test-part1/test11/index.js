Vue.component("tab-home",{
    template:"<div>Home component</div>"
});
Vue.component("tab-post",{
    template:"<div>Post component</div>"
});
Vue.component("tab-active",{
    template:"<div>Active component</div>"
});

new Vue({
    el:"#example",
    data:{
        currentTab:"Home",
        tabs:["Home","Post","Active"]
    },
    computed:{
        currentTabComponent:function(){
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
});
