<template>
  <div class="child">
    child1
    <button @click="send">发送</button>
  </div>
</template>

<script>
import Bus from '@/bus/bus'
export default {
  data() {
    return {
      message: '我是child1里面的数据'
    }
  },
  methods: {
    send () {
      Bus.$emit('test', this.message)
      // this.$dispatch('test', this.message)
      this.$broadcast('test', this.message)
    }
  },
}
</script>

<style>

</style>