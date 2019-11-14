<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div class="red">
      string：<span>{{sendMsg}}</span>
    </div>
    <div class="red">
      string：<span>{{sendNum}}</span>
    </div>
    <div>
      <ul class="red">
        <li v-for="item in sendObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: false
    },
    sendObj:{
      //声明验证类型
      //子组件要求父组件传过来的参数为 。。。
      validator (val) {
        if (Object.prototype.toString.call(val) === "[obeject Array]"
          || Object.prototype.toString.call(val) === "[obeject object]"
        ) {
          return true
        }
      }
    }
  }
}
</script>

<style>
.red{
  color: red;
}
</style>