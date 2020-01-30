<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.userid
    }
  },
  methods: {
    btnClick() {
      //所有组件继承Vue类原型
      console.log(this.$router);
      console.log(this.$route);
    }
  }
}
</script>

<style>

</style>