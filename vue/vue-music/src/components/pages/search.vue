<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box @query="onQueryChange"></v-search-box>
    </div>
  </div>
</template>

<script>
import searchBox from '../searchBox'
export default {
  components: {
    'v-search-box': searchBox
  },
  methods: {
    onQueryChange () {
      
    }
  }
}
</script>

<style lang="stylus" scope>
@import '../../assets/css/function.styl'
.search
  overflow 
  &-box-wrapper
    margin px2rex(40px)
</style>