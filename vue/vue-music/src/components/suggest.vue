<template>
  <v-scroll class="suggest" ref="suggest" :pullup="pullup"
  :data="result" :beforeScroll="beforeScroll" @scrollToEnd="searchMore"
  @beforeScroll="listScroll"
  >
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index" 
      @click="selectItem(item)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div> 
      </li>
      <!-- loading -->
      <v-load class="loading-wraper" v-show="hasMore"></v-load>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length">
      <span>抱歉，暂无搜索结果</span>
    </div>
    <div class="no-result-wrapper" v-show="!hasMore">
      <span>我可是有底线的哦！</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'
import api from '@/api'
import load from '@/components/load'
const limit = 20
export default {
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      page: 1,
      result: [],
      hasMore: true,
      pullup: true,
      beforeScroll: true
    }
  },
  components: {
    'v-scroll': scroll,
    'v-load': load
  },
  methods: {
    fetchResult () {
      const params = {
        limit,
        offset: this.page - 1,
        keywords: this.query
      }
      api.MusicSearch(params).then(res => {
        console.log(res);
        if(res.code === 200) {
          this.result = [...this.result, ...res.result.songs]
          this._checkMore(res.result)
        }
      })
    },
    getDisplayName (item) {
      return `${item.name}-${item.artists[0] && item.artists[0].name}`
    },
    search () {
      this.page = 1
      this.hasMore = true
      this.$refs.suggest.scrollTo(0, 0)
      this.result = []
      this.fetchResult()
    },
    searchMore () {
      this.page++
      this.fetchResult()
    },
    listScroll () {
      this.$emit('listScroll')
    },
    _checkMore (data) {
      if (data.songs.length < 12 || ((this.page - 1) * limit) >= data.songCount) {
        this.hasMore = false
      }
    },
    selectItem (item) {
      this.$emit('select', item)
    }
  },
  watch: {
    query (newQuery) {
      if (!newQuery) {
        return
      }
      this.search(newQuery)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/function.styl"
.suggest 
  height 100%
  overflow hidden
  background-color #eeeeff
  .suggest-list 
    padding 0 px2rem(60px)
    .suggest-item 
      display flex
      align-items center
      line-height px2rem(80px)
      border-bottom 1px solid #eeaaaa
      .icon 
        flex 0 0 px2rem(60px)
        width px2rem(60px)
        font-size 14px
        color #000
      .name 
        flex 1
        font-size 14px
        color #000
        overflow hidden
        .text 
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
    .loading-wraper 
      height px2rem(80px)
  .no-result-wrapper 
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    text-align center
    span 
      font-size 14px
      color #000
</style>
