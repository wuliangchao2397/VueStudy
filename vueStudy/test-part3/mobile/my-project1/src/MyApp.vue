<template>
    <div>
        <header>猫眼电影</header>
        <main>
            <nav class="movie-nav">
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
            </nav>
        </main>
        <nav class="tabbar">
            <ul>
                <li class="active">
                    <b>&#xe8ae;</b>
                    <span>电影</span>
                </li>
                <li>
                    <b>&#xe8c0;</b>
                    <span>影院</span>
                </li>
                <li>
                    <b>&#xe56a;</b>
                    <span>我的</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'hello'
        }
    }
}
</script>

<style lang="stylus" scoped>
@font-face {
  font-family 'iconfont-nav';
  src url('./assets/icons/iconfont-nav.woff') format('woff'),
      url('./assets/icons/iconfont-nav.ttf') format('truetype')
}

div
    display flex
    flex-direction column
    height 100%
    header 
        background-color #cd4c42
        color #fff
        height .44rem
        font-size .16rem
        font-weight bold 
        text-align center
        line-height .44rem
        &::before
            content '\e8ae'
            font-family iconfont-nav
        &::after
            content '\e8ae'
            font-family iconfont-nav
    main
        flex 1
        .movie-nav
            ul 
                border-bottom solid 1px #eee
                display flex 
                height .44rem
                li:first-child
                    width .7rem
                li:nth-child(2)
                    flex 1
                li:last-child
                    width .44rem
                    border-left solid 1px #eee

    .tabbar
        height .44rem
        border-top solid 1px #eee
        ul 
            display flex
            li
                flex 1
                font-family iconfont-nav
                display flex
                flex-direction column
                justify-content center
                align-items center
                padding-top .05rem
                color #999
                b
                    font-size .26rem
                    font-weight normal
                    line-height .2rem
                span 
                    font-size .12rem
                    transform scale(0.9)
                &.active 
                    color #cd4c42
                    
</style>