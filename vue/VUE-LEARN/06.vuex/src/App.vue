<template>
  <div id="app">
    <h2>--------app内容--------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <h2>-------helloVuex内容--------</h2>
    <hello-vuex :count="count"/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '你好啊！！！',
    }
  },
}
</script>

<style>
</style>
