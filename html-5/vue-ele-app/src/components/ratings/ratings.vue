<template>
  <div class="ratings" ref="ratingsContent">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h2>4.2</h2>
          <div class="title">综合评分</div>
          <div class="rank">公寓周边商家69.2%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="stars">
              <span class="star-on"></span>
              <span class="star-on"></span>
              <span class="star-on"></span>
              <span class="star-on"></span>
              <span class="star-off"></span>
            </div>
            <span class="score">4.1</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="stars">
              <span class="star-on"></span>
              <span class="star-on"></span>
              <span class="star-on"></span>
              <span class="star-on"></span>
              <span class="star-off"></span>
            </div>
            <span class="score">4.3</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">38分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive" @click="acts1" :class="act1 ? 'active': ''">
            全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" @click="acts2" :class="act2 ? 'active': ''">
            满意
            <span class="count">{{goodNum}}</span>
          </span>
          <span class="block negative" @click="acts3" :class="act3 ? 'active': ''">
            不满意
            <span class="count">{{ratings.length - goodNum}}</span>
          </span>
        </div>
        <div class="switch">
          <span class="icon-check_circle" @click="acts4" :class="act4 ? 'on':''"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item, index) in SelectedRating" :key="index" >
            <div class="avatar">
              <img :src="item.avatar" />
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <div class="star-wrapper">
                <span class="star-on"></span>
                <span class="star-on"></span>
                <span class="star-on"></span>
                <span class="star-on"></span>
                <span class="star-off"></span>
                <span class="delivery" v-if="item.deliveryTime">{{item.deliveryTime}}</span>
              </div>
              <p class="text">{{item.text}}</p>
              <div class="recommend" v-if="item.recommend.length>0">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(item2, index) in item.recommend" :key="index">
                  {{item2}}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      ratings: [],
      act1: true,
      act2: false,
      act3: false,
      act4: true,
      selected: true,
    }
  },
  methods: {
    acts1 () {
      this.act1 = true
      this.act2 = false
      this.act3 = false
    },
    acts2 () {
      this.act1 = false
      this.act2 = true
      this.act3 = false
    },
    acts3 () {
      this.act1 = false
      this.act2 = false
      this.act3 = true
    },
    acts4 () {
      this.act4 = !this.act4
      this.selected = !this.selected
    }
  },
  computed: {
    goodNum () {
      let total = 0
      for(let i = 0; i < this.ratings.length; i++){
        if(this.ratings[i].rateType === 0){
          total++
        }
      }
      return total
    },
    SelectedRating () {
      let selectedTextRating = []
      let selectedGoodRating = []
      let selectedBadRating = []
      for(let i = 0;  i < this.ratings.length; i++){
        if(this.ratings[i].text != ""){
          selectedTextRating.push(this.ratings[i])
        }
        if(this.ratings[i].rateType === 0){
          selectedGoodRating.push(this.ratings[i])
        }
        if(this.ratings[i].rateType === 1){
          selectedBadRating.push(this.ratings[i])
        }
      }
      if(this.selected && this.act1){
        return selectedTextRating
      }
      else if(this.selected && this.act2){
        let goodSelectRatings = [];
        for(let i = 0;  i < selectedGoodRating.length; i++){
          if(selectedGoodRating[i].text != ""){
            goodSelectRatings.push(selectedGoodRating[i])
          }
        }
        return goodSelectRatings
      }
      else if(this.selected && this.act3){
        let badSelectRatings = [];
        for(let i = 0;  i < selectedBadRating.length; i++){
          if(selectedBadRating[i].text != ""){
            badSelectRatings.push(selectedBadRating[i])
          }
        }
        return badSelectRatings
      }
      else if(this.act2){
        return selectedGoodRating
      }
      else if(this.act3){
        return selectedBadRating
      }
      return this.ratings
      }
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
      .then((res) => {
        if (res.data.errno === 0) {
          this.ratings = res.data.data
          this.$nextTick(() => {
            this.ratingsScroll = new BScroll(this.$refs.ratingsContent, {
              click: true
            })
          })
        }
      })
  }
}
</script>

<style lang="stylus" scope>
@import '../../common/stylus/mixin.styl'
@import url("https://at.alicdn.com/t/font_1495810_tz7yh0nquy.css")
.ratings
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .ratings-content
    font-size 0
    .overview
      font-family PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif
      display flex
      width 100%
      text-align center
      padding 15px 0
      .overview-left
        border-right 1px solid #d9dde1
        width 36%
        h2
          font-size 24px
          color #ff9f0f
          padding-bottom 8px
        .title
          font-size 12px
          color #000
          padding-bottom 8px
        .rank
          font-size 12px
          color #000000
      .overview-right
        flex 1
        padding 6px 0 6px 24px
        text-align left
        .score-wrapper
          display flex
          margin-bottom 8px
          font-size 0
          .title
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #07111b
          .stars
            margin-left 20px
            font-family 'iconfont'
            font-size 15px
            padding-right 10px
            .star-on::after
              content '\e709'
              color #ffa822
            .star-off::after
              content '\e709'
              color #999999
          .score
            font-size 12px
            color #ff9f0f
        .delivery-wrapper
          font-size: 0;
          .title
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #07111b
          .delivery
            flex 1
            margin-left 12px
            font-size 12px
            color #93999f
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .rating-type
      padding 18px 0
      margin 0 18px
      position relative
      font-size 0
      border-bottom 1px solid rgba(7,17,27,.1)
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        line-height 16px
        border-radius 1px
        font-size 12px
        color #4d555d
        &.positive
          background rgba(0,160,220,.2)
          &.active
            color #ffffff
            background #00a0dc
        &.negative
          background rgba(77,85,93,.2)
          &.active
            color #ffffff
            background #4d555d
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7,17,27,.1)
      color #93999f
      font-size: 0
      .icon-check_circle
        font-family 'iconfont'
        font-size 24px
        margin-right 4px
        &.on
          color #00C850
        &:before
          content "\E905"
      .text
        display inline-block
        vertical-align top
        font-size 12px
    .rating-wrapper
      padding 0 18px
      .rating-item
        display flex
        padding 18px 0
        position relative
        .avatar
          flex 0 0 28px
          width 28px
          margin-right 12px
          img
            border-radius 50%
            width 25px
            height 25px
        .content
          flex 1
          .name
            margin-bottom 4px
            line-height 12px
            font-size 10px
            color #07111b
          .star-wrapper
            font-size 15px
            display flex
            align-items center
            margin-bottom 6px
            .delivery
              font-size 10px
              color #999
          .text
            color: #333;
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 8px;
          .recommend
            align-items center
            display flex
            flex-wrap wrap
            line-height 16px
            font-size 10px
            .item
              background-color #fff
              border 1px solid rgba(7, 17, 27, .1)
              color #999
              padding 0 6px
            .icon-thumb_up
              font-family 'iconfont'
              &::before
                content '\E901'
                color #00a0dc
</style>
