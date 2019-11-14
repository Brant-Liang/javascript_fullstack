<template>
  <div class="container">
   <!--  <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div> -->
    <child :sendMsg="myMsg" :sendNum="myNum" :sendObj="myObj"/>
  </div>

</template>

<script>
import child from './child'
export default {
 data() {
    return {
      myMsg: '我是父组件的信息',
      myNum: 123,
      myObj: [
        {
          id: 1,
          name: 'Brant'
        },
        {
          id: 2,
          name: 'Ariel'
        }
      ]
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>