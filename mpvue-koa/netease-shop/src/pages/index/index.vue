<template>
  <div class="index">
     <!-- 头部搜搜 -->
     <div class="search">
       <div @click="toMappage">{{cityName}}</div>
       <div @click="toSearch">
         <input type="text" placeholder="搜索商品">
         <span class="icon"></span>
       </div>
     </div>
     <div class="swiper">
       <swiper class="swiper-container" interval="3000" circular="true" duration="500" indicator-dots="true" autoplay="true">
         <block v-for="(item, index) in banner" :key="index">
           <swiper-item class="swiper-item">
             <image class="slide-image" :src="item.image_url"/>
           </swiper-item>
         </block>
       </swiper>
     </div>
     <div class="channel">
       <div v-for="(item, index) in channel" :key="index" @click="categoryList(item.url)">
         <img :src="item.icon_url" alt="">
         <p>{{item.name}}</p>
       </div>
     </div>
     <div class="brand">
       <div class="head" @click="toBrandList">
         品牌制造商直供
       </div>
       <div class="content">
         <div v-for="(item, index) in brandList" :key="index" @click="brandClick(item.id)">
           <div>
             <p>{{item.name}}</p>
             <p>￥{{item.floor_price}}起</p>
           </div>
           <img :src="item.pic_url" alt="">
         </div>
       </div>
     </div>
     <div class="newgoods">
       <div class="newgoods-top" @click="goodsList('new')">
         <div class="top">
           <p>新品首发</p>
           <p>查看全部</p>
         </div>
       </div>
       <div class="list">
         <ul>
           <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in newGoods" :key="index"> 
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>￥{{item.retail_price}}</p>
            </li>
           </scroll-view>
         </ul>
       </div>
     </div>
     <div class="newgoods hotgoods" @click="goodsList('hot')">
       <div class="newgoods-top">
         <div class="top">
           <p>人气推荐
             <span></span>
             好物精选
            </p>
           <p>查看全部</p>
         </div>
       </div>
       <div class="list">
         <ul>
           <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in hotGoods" :key="index"> 
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>￥{{item.retail_price}}</p>
            </li>
           </scroll-view>
         </ul>
       </div>
     </div>
     <div class="topicList">
       <div class="topicList-top">
         专题精选
         <span class="icon"></span>
       </div>
       <div class="list">
         <ul>
           <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item, index) in topicList" @click="topicDetail(item.id)" :key="index">
              <img :src="item.item_pic_url" alt="">
              <div class="bottom">
                <div>
                  <p>{{item.title}}</p>
                  <p>{{item.subtitle}}</p>
                </div>
                <div>{{item.price_info}}元起</div>
              </div>
            </li>
         </scroll-view>
         </ul>
       </div>
     </div>
     <div class="newcategory">
       <div class="list" v-for="(item, index) in newCategoryList" :key="index">
         <div class="head">{{item.name}}好物</div>
         <div class="sublist">
           <div v-for="(subItem, subIndex) in item.goodList" :key="subIndex">
             <img :src="subItem.list_pic_url" alt="">
             <p>{{subItem.name}}</p>
             <p>{{subItem.retail_price}}</p>
           </div>
           <div>
             <div class="last">
               <p>{{item.name}}好物</p>
               <span class="icon"></span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import amapFile from '@/utils/amap-wx'
import { mapState, mapMutations } from 'vuex'
import { get } from '@/utils/index' 
export default {
  data() {
    return {
      banner: [],
      channel: [],
      brandList: [],
      newGoods: [],
      hotGoods: [],
      topicList: [],
      newCategoryList: []
    }
  },
  computed: {
    ...mapState([
      'cityName'
    ])
  },
  mounted() {
    this.getCityName() 
    this.getData()
  },
  methods: {
    ...mapMutations(['choiceAddress']),
    toSearch() {
      wx.navigateTo({
        url: '/pages/search/main'
      })
    },
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
    },
    async getData() {
      const data = await get('/index/index')
      console.log(data);
      this.banner = data.banner
      this.channel = data.channel
      this.brandList = data.brandList
      this.newGoods = data.newGoods
      this.hotGoods = data.hotGoods
      this.topicList = data.topicList
      this.newCategoryList = data.newCategoryList
    },
    categoryList(url) {
      wx.navigateTo({
        url: url
      })
    },
    toBrandList() {
      wx.navigateTo({
        url: '/pages/brandList/main'
      })
    },
    brandClick(id) {
      wx.navigateTo({
        url: '/pages/branddetail/main?id=' + id
      })
    },
    goodsList(info) {
      if(info === 'hot') {
        wx.navigateTo({
          url: '/pages/newgoods/main?isHot=' + 1
        })
      }
      else if(info === 'new') {
        wx.navigateTo({
          url: '/pages/newgoods/main?isNew=' + 1
        })
      }
    },
    topicDetail(id) {
      wx.navigateTo({
        url: 'pages/topicdetail/main?id' + id
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./style";
</style>