<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>我是Profile组件的内容，哈哈哈</p>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>