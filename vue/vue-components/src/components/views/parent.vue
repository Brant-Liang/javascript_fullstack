<template>
  <div class="parent">
    <child1></child1>
    parent
    <child2></child2>
  </div>
</template>

<script>
import Child from './child'
import Child2 from './child2'
export default {
  data() {
    return {
      msg: ''
    }
  },
  components : {
    child1: Child,
    child2: Child2
  },
  mounted() {
    this.$on('test', (text) => {
      console.log(text);
      
    }) 
  }
}
</script>

<style>

</style>