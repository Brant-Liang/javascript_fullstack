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
import amapFile from '@/utils/amap-wx'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'cityName'
    ])
  },
  mounted() {
    this.getCityName() 
  },
  methods: {
    ...mapMutations(['choiceAddress']),
    toMappage() {
      //通过wx.getSetting先查询用户是否授权 "scoped.record"
      wx.getSetting({
        success: ((res) => {
          //如果没有
          if(!res.authSetting['scope.userLocation']) {
            wx.openSetting({
              success: res => {
                //获取授权位置信息
                this.getCityName()
              }
            })
          }
          else {
            wx.navigateTo({
              url: '/pages/mappage/main'
            })
            // this.getCityName()
          }
        }),
        fail: (err) => {
          console.log(err);
        },
        complete: () => {}
      })
    },
    getCityName() {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'fbcf5878a19e1bf2c09b12b6b4376645'});
      myAmapFun.getRegeo({
        success: function(data) {
          //成功回调
          console.log(data);
          _this.choiceAddress(data[0].regeocodeData.addressComponent.city)
        },
        fail: function(info) {
          console.log(info);
          _this.choiceAddress('北京')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./style";
</style>