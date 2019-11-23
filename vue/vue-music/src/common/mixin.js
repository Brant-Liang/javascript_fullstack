import {mapActions, mapGetters} from 'vuex'

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
      // this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
      this.selectPlaySong(song)
      this.addPlayList(song)
    },
    ...mapActions([
      'addPlayList',
      'saveSearchHistory',
      'deleteSearchHistory',
      'deleteAll',
      'selectPlaySong'
    ])
  },
}
export const playerMixin = {
  computed: {
    ...mapGetters([
      'currentSong',
      'playList'
    ])
  },
  methods: {
    
  },
}