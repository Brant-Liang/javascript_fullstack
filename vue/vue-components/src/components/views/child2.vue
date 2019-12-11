<template>
  <div class="child2">
    child2{{mess}}
  </div>
</template>

<script>
import Bus from '@/bus/bus'
export default {
  data () {
    return {
      mess: ''
    }
  },
  mounted() {
    Bus.$on('test', (test) => {
      console.log(test)
      this.mess = test
    })
  },
}
</script>

<style>

</style>