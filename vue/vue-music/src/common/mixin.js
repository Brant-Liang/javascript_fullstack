import {mapActions} from 'vuex'

export const searchMixin = {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange (query) {
      //trim()删除空格
      this.query = query.trim()
      // 看效果用的
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'deleteAll'
    ])
  },
}