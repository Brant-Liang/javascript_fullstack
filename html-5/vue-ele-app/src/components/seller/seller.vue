<template>
  <div class="seller" ref="sellerContent">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <div class="stars">
            <span class="star-on"></span>
            <span class="star-on"></span>
            <span class="star-on"></span>
            <span class="star-on"></span>
            <span class="star-off"></span>
          </div>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite" :class=" act ? 'active' : ''" @click="actives"></span>
          <span class="text">{{act? "已收藏":"收藏"}}</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p
            class="content"
          >{{seller.bulletin}}</p>
        </div>
        <ul class="supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
            <span class="support-ico icon-4" :class="classMap[item.type]">
              <img :src="item.url" alt="">
            </span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="cube-scroll-wrapper pic-wrapper" ref="cubeScroll" >
          <div
            class="cube-scroll-content" 
          >
            <div class="cube-scroll-list-wrapper" style="min-height: 0px;">
              <ul class="pic-list">
                <li class="pic-item" v-for="(img, index) in seller.pics" :key="index">
                  <img
                    :src="img"
                    width="120"
                    height="90"
                  />
                </li>
              </ul>
            </div>
            <!---->
          </div>
          <!---->
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(infos, index) in seller.infos" :key="index">{{infos}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      seller: [],
      act: false
    }
  },
  methods: {
    actives(){
      this.act = !this.act
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json')
      .then((res) => {
        if (res.data.errno === 0) {
          this.seller = res.data.data
          this.$nextTick(() => {
            if(!this.scroll){
              this.sellerScroll = new BScroll(this.$refs.sellerContent, {
                click: true
              })
                let width = 4 * 140;
                this.$refs.cubeScroll.style.width = width + "px";
                this.cubeScrollWrapper = new BScroll(this.$refs.cubeScroll,{
                click: true,
                startX: 0,
                scrollX: true,
                scrollY: false
              })
            }
            else{
              this.scroll.refresh()
            }
          })
        }
      })
  },
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
@import url("https://at.alicdn.com/t/font_1495810_tz7yh0nquy.css")
.seller
  font-weight 500
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    position relative
    padding 18px
    .title
      margin-bottom 8px
      line-height 14px
      color #07111b
      font-size 14px
    .desc
      padding-bottom 18px
      position relative
      font-size 0
      display flex
      .stars
        font-family 'iconfont'
        font-size 15px
        padding-right 10px
        .star-on::after
          content '\e709'
          color #ffa822
        .star-off::after
          content '\e709'
          color #999999
      .text
        display inline-block
        margin-right 12px
        line-height 18px
        vertical-align top
        font-size 10px
        color #4d555d
    .remark
      display flex
      padding-top 18px
      .block
        flex 1
        border-right 1px solid #d9dde1;
        text-align center
        h2
          color #999
          font-size 10px
          line-height 10px
          margin-bottom 4px
        .content
          color #333
          font-size 10px
          line-height 24px
          .stress
            font-size 24px
    .favorite
      position:absolute
      right 11px
      text-align center
      top 18px
      width 50px
      .icon-favorite
        color #ccc
        display block
        font-size 24px
        line-height 24px
        margin-bottom 4px
        &:before
          content "\e904"
        &.active
          color #f01414
      .text
        color #666
        font-size 10px
        line-height 10px
  .split
    width 100%
    height 16px
    border-top 1px solid rgba(7, 17, 27, 0.1)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    background #f3f5f7
  .bulletin
    padding 18px 18px 0
    white-space normal
    .title
      color #333
      font-size 14px
      line-height 14px
      margin-bottom 8px
    .content-wrapper
      padding 0 12px 16px
      .content
        color red
        font-size 12px
        line-height 24px
    .supports
      .support-item
        align-items center
        display flex
        padding 16px 12px
        .support-ico
          background-repeat: no-repeat;
          display: inline-block;
          &.icon-4
            margin-right 6px
            background-size 16px 16px
            height 16px
            width 16px
            img
              width 16px
              height 16px
        .text
          color #333
          font-size 12px
          line-height 16px
  .pics
    padding 18px
    .cube-scroll-wrapper
      .cube-scroll-content 
        position relative
        z-index 1
        .cube-scroll-list-wrapper
          overflow hidden
    .title
      color #333
      font-size 14px
      line-height 14px
      margin-bottom 12px
    .pic-wrapper
      align-items center
      display flex
      .pic-list 
        .pic-item
          display inline-block
          height 90px
          margin-right 6px
          width 120px
  .info
    color #333
    padding 18px 18px 0
    .title
      font-size 14px
      line-height 14px
      padding-bottom 12px
    .info-item
      font-size 12px
      line-height 16px
      padding 16px 12px
      border-top 1px solid rgba(7,17,27,.1)
</style>
