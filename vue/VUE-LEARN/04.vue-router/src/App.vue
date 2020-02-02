<template>
  <div id="app">
    <!--     <router-link to='/home' tag="button">首页</router-link>
            <router-link to='/about' tag="button">关于</router-link>
            <button @click="toHome">首页</button>
            <button @click="toAbout">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/username=' + userId">用户</router-link>
    <router-link to="/profile">档案</router-link>
    <router-link :to="{path: '/profile', query: {name: 'lc', age: 18}}">档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
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
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 18
        }
      })
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
