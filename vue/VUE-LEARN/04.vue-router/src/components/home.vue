<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    console.log('home created');
    console.log(this.$route.path.indexOf('/home'));
  },
  destroyed() {
    console.log('home destroyed');
  }
 /*  mounted() {

  },
  updated() {

  } */
}
</script>

<style>

</style>