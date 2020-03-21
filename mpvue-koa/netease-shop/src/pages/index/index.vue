 <template>
   <div class="index">
     <!-- 头部搜搜 -->
     <div class="search">
       <div @click="toMappage">{{cityName}}</div>
       <div>
         <input type="text" placeholder="搜索商品">
         <span class="icon"></span>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       cityName: '南昌'
     }
   },
   methods: {
     toMappage() {
       
     }
   }
 }
 </script>
 
<style lang="less" scoped>
 @import './style';
</style>"
 