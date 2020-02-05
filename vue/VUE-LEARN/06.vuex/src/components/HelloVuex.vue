<template>
  <div class="hello">
    <h2>{{$store.state.count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    count: Number
  },
  data () {
    return {
      msg: 'Welcome to Vuex!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
