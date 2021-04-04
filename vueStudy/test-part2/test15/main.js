import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
//配置项
Vue.use(VueLazyload,{
    preload:1.3,
    error:'../../img/error.jpg',
    loading:'../../img/loading.jpg',
    attempt:1
})