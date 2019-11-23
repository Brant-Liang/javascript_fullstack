<template>
  <div id="header">
    <button class="left">返回</button>
    通信录
    <button class="right">主页</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #header {
    width: 100%;
    height: 40px;
    background-color: #666;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
  }
  #header button {
    height: 100%;
    padding: 0 5px;
  }
  .left {
    float: left;
  }
  .right{
    float: right;
  }
</style>