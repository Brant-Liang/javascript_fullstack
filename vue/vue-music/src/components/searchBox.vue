<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe638;</i>
    <input ref="query" type="text" class="box" v-model="query" :placeholder="placeholder">
    <i class="icon icon-dismiss" v-show="query" @click="clear">&#xe656;</i>
  </div>
</template>

<script>
import { debounce } from '@/common/util'
export default {
  data() {
    return {
      query: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 300)) 
  },
  methods: {
    blur () {
      this.$refs.query.blur()
    },
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../assets/css/function'
.search-box 
  display flex
  align-items center
  box-sizing border-box
  width 100%
  padding 0 px2rem(8px)
  height px2rem(74px)
  background #eeeeff
  border-radius 6px
  .icon-search 
    font-size 24px
    color #33A6FF
  .box
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #eeeeff
    color #aaaaaa
    font-size 15px
    outline 0
    &::placeholder
      color #aaaaaa
  .icon-dismiss 
    font-size 20px
    margin-right px2rem(10px)
    color #33A6FF
</style>
