<template>
  <div id="app">
    <h2>我是组件的标题</h2>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  components: {
    Cpn
  },
  data() {
    return {
      message: "Hello webpack"
    };
  },
  methods: {
    btnClick() {
      console.log(1);
    }
  }
};
</script>

<style>
.title {
  color: green;
}
</style>