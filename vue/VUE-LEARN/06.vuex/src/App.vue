<template>
  <div id="app">
    <h2>--------moduleA的内容-------</h2>
    <p>{{$store.state.a.name}}</p>
    <button @click="updateModuleA">更新</button>
    <h2>info中的内容</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updataInfo">更新</button>
    <h2>--------app内容--------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">+学生</button>
    <h2>-------getters--------</h2>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.getters.more20stds}}</h2>
    <h2>{{$store.getters.moreAgeStds(15)}}</h2>
    <h2>年龄大于20的人数{{$store.getters.more20sLength}}</h2>
    <h2>年龄大于20的名字{{$store.getters.more20Name}}</h2>
    <h2>-------helloVuex内容--------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { mapMutations, mapActions } from "vuex";
import * as types from "./store/mutations-types";
export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "你好啊！！！"
    };
  },
  methods: {
    // add() {
    //   this.$store.commit(types.INCREMENT);
    // },
    ...mapMutations({
      add: types.INCREMENT,
      minus: "decrement",
      updateModuleA: "changeA"
    }),
    // minus() {
    //   this.$store.commit("decrement");
    // },
    addCount(count) {
      // 普通提交风格
      // this.$store.commit('incrementCount', count)
      // 特殊提交风格
      this.$store.commit({
        type: "incrementCount",
        count
      });
    },
    addStudent() {
      const std = { id: 114, name: "Ariel", age: 21 };
      this.$store.commit("addStudent", std);
    },
    updataInfo() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo',{
      //   message: '我是携带的信息',
      //   success: () =>{
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res => {
        console.log("里面完成了提交");
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>
