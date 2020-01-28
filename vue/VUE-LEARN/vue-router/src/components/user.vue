<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息</p>
    <h2>{{userId}}</h2>
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userid
    }
  }
}
</script>

<style>

</style>