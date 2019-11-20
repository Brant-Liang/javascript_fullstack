<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="tab-item">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tab-item">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link to="/rink" tag="div" class="tab-item">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link to="/search" tag="div" class="tab-item">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl'
.tab
  display flex
  
  height px2rem(88px)
  line-height px2rem(88px)
  font-size 14px
  font-family KaiTi
  &-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color #aaaaaa
    &.router-link-active
      .tab-link
        color #0196E6
        border-bottom 2px solid #0196E6
</style>