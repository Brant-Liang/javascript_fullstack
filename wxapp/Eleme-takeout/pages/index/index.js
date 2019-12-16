// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    showAll: 2,
    imgUrl: [
      '../../images/image1.jpg',
      '../../images/image2.jpg',
      '../../images/image3.jpg'
    ],
    menu: [
      {
        id: 'first',
        list: [
          { name: '美食', iconUrl: '../../images/meishi.png' },
          { name: '商超便利', iconUrl: '../../images/chaoshi.png' },
          { name: '水果', iconUrl: '../../images/shuiguo.png' },
          { name: '全球美食', iconUrl: '../../images/quanqiumeishi.png' },
          { name: '地方小吃', iconUrl: '../../images/difangxiaochi.png' },
          { name: '速食简餐', iconUrl: '../../images/sushijiancan.png' },
          { name: '大牌惠吃', iconUrl: '../../images/dapaihuichi.png' },
          { name: '汉堡披萨', iconUrl: '../../images/hanbaopisha.png' }
        ]
      },
      {
        id: 'second',
        list: [
          { name: '包子粥店', iconUrl: '../../images/baozizhoudian.png' },
          { name: '米粉面馆', iconUrl: '../../images/mifenmianguan.png' }
        ]
      }
    ],
    merchant: [
      {
        nums: 4,
        headImg: './images/KFC.jpeg',
        name: '肯德基宅急送(经开店)',
        star: 4.6,
        mouthSale: 684,
        upToSend: 15,
        shippingFee: 9,
        distance: 2.4,
        time: 30,
        actList:[
          {
            id: 1,
            url: '../../images/decrease_3@2x.png',
            decList:[
              {money: 59, dec:8},
              {money: 85, dec:15}
            ]
          },
          {
            id: 2,
            url:'../../images/special_3@2x.png',
            money: 8
          },
          {
            id: 3,
            url: '../../images/guarantee_3@2x.png',
            firstBuy: 17
          },
          {
            id: 4,
            url: '../../images/invoice_3@2x.png',
            full: 10,
            disc: 2
          }
        ],
        foodList:[
          {
            title:'香辣鸡腿堡(汉堡)ST',
            foodImg: './images/hanbao.jepg.jpeg',
            price: 19,
            prePrice: 24
          },
          {
            title: '二块新奥尔良烤翅T',
            foodImg: './images/jichi.jpeg',
            price: 12.5,
            prePrice: 16
          },
          {
            title: '双味双杯热拿铁T',
            foodImg: './images/coffee.jpeg',
            price: 33,
            prePrice: 38
          }
        ]
      }
    ],
  },
  goToDetail() {
    wx.navigateTo({
      url: '../merchant-detail/merchant-detail'
    })
  },
  toChooseAddress() {
    wx.navigateTo({
      url: '../chooseAdress/chooseAdress'
    })
  },
  showMore(){
    this.setData({
      show: !this.data.show
    })
    if(this.data.show === false) {
      this.setData({
        showAll: 2
      })
    }else {
      this.setData({
        showAll: this.data.merchant[0].nums
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})