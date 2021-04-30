<template>
    <div>
        <header>猫眼电影</header>
        <main>
            <nav class="movie-nav">
                <ul>
                    <li>北京
                        <span class="yo-ico">&#xf033;</span>
                    </li>
                    <li>
                        <span class="active">热映</span>
                        <span>待映</span>
                    </li>
                    <li>
                        <b class="movie-icon">&#xe65c;</b>
                    </li>
                </ul>
            </nav>
            <div>
                
            </div>
        </main>
        <nav class="tabbar">
            <ul>
                <li class="active">
                    <b class="movie-icon">&#xe8ae;</b>
                    <span>电影</span>
                </li>
                <li>
                    <b class="movie-icon">&#xe8c0;</b>
                    <span>影院</span>
                </li>
                <li>
                    <b class="movie-icon">&#xe56a;</b>
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
@font-face 
  font-family 'iconfont-nav';
  src url('./assets/icons/iconfont-nav.woff') format('woff'),
      url('./assets/icons/iconfont-nav.ttf') format('truetype')

@font-face 
  font-family 'iconfont-nav';
  src url('./assets/icons/iconfont-search.woff') format('woff'),
      url('./assets/icons/iconfont-search.ttf') format('truetype')

.movie-icon{
    font-family iconfont-nav !important;
    font-style normal;
    -webkit-font-smoothing antialiased;
    -moz-osx-font-smoothing grayscale;
    vertical-align middle;
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
                    flex 100
                    display flex
                    justify-content flex-start
                    align-items center
                    color #666
                    padding-left .15rem
                li:nth-child(2)
                    flex 250
                    display flex
                    justify-content center
                    align-items center
                    span 
                        display inline-block
                        height .44rem
                        line-height .44rem
                        width .6rem
                        text-align center
                        &:first-child 
                            margin-right .3rem
                            margin-left -0.35rem
                        &.active
                            color #cd4c42
                            border-bottom solid 2px #cd4c42
                li:last-child
                    width .44rem
                    border-left solid 1px #eee
                    font-size .2rem
                    line-height .44rem
                    text-align center
                    color #cd4c42

    .tabbar
        height .44rem
        border-top solid 1px #eee
        ul 
            display flex
            li
                flex 1
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