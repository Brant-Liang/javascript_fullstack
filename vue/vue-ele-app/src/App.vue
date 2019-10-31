<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue' //引入组件
export default {
  name: 'App',
  //声明组件
  components: {
    'v-header': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
