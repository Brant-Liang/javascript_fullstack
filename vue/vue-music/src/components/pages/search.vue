<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box @query="onQueryChange"></v-search-box>
    </div>
    <!-- 热门搜索 和 搜索历史 -->
    <div class="shortcut-wrapper">
      <v-scroll class="shortcut" :data="shortcut" ref="shortcut">
        <div>
            <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
            <!-- 搜索历史 -->
          <div class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear">
                <i class="icon">&#xe612;</i>
              </span>
            </h1>
            <!-- 搜索历史 列表-->
            <v-search-list :searches="searchHistory"></v-search-list>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
import api from '@/api/index.js'
import searchList from '@/components/searchList'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      shortcut: [],
      hotKey: []
    }
  },
  components: {
    'v-search-box': searchBox,
    'v-scroll': scroll,
    'v-search-list': searchList
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange (e) {
      console.log(e)
    },
    _getHotKey() {
      api.HotSearchKey().then((res) => {
        if(res.code === 200) {
          this.hotKey = res.result.hots.slice(0, 10)
        }
      })
    }
  },
  created() {
    this._getHotKey()
  }
}
</script>

<style lang="stylus" scope>
@import '../../assets/css/function.styl'
.search
  overflow 
  &-box-wrapper
    margin px2rex(40px)
  .shortcut-wrapper
    position fixed
    top px2rem(280px)
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 14px
          color #000
        .item
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          font-size 14px
          color #fff
          background #0196E6
      .search-history
        position relative
        margin 0 px2rem(40px)
        .title
          color #000
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          .text
            flex 1
          .clear
            .icon
              font-size 18px
              color #000


</style>