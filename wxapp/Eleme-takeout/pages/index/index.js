// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  },
  goToDetail() {
    wx.navigateTo({
      url: '../merchant-detail/merchant-detail'
    })
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