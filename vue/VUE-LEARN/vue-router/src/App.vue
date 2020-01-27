<template>
  <div id="app">
    <!--     <router-link to='/home' tag="button">首页</router-link>
            <router-link to='/about' tag="button">关于</router-link>
            <button @click="toHome">首页</button>
            <button @click="toAbout">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/username=' + userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'LiSi'
    }
  },
  methods: {
    toHome() {
      // this.$router.push('/home')
      this.$router.replace("/home");
      console.log("homeClick");
    },
    toAbout() {
      this.$router.replace("/about");
      console.log("aboutClick");
    }
  }
};
</script>

<style>
/* .router-link-active {
    color: #f00;
  } */
.active {
  color: #f00;
}
</style>
