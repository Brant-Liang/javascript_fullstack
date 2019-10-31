// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '优惠', id: 'youhui' },
      { name: '新品上市', id: 'xinping' },
      { name: '美味汉堡/卷', id: 'hanbao' },
      { name: 'K记饭桶', id: 'KJ' },
      { name: '鸡翅/鸡排', id: 'jichi' },
      { name: '炸鸡啤酒', id: 'xiaoshi' },
      { name: '甜品/冰淇淋', id: 'xiaoshi' },
      { name: '缤纷饮料', id: 'xiaoshi' },
    ],
    merchant: [
      {
        headImg: '',
        name: '肯德基宅急送(经开店)',
        star: 4.6,
        mouthSale: 684,
        upToSend: 0,
        shippingFee: 9,
        foodList:[
          {
            title:'',
            foodImg: '',
            price: ''
          },
          {
            title: '',
            foodImg: '',
            price: ''
          },
          {
            title: '',
            foodImg: '',
            price: ''
          }
        ]
      }
    ],
    curIndex: 0
  },
  switchTab(e){
    console.log(e);
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },
  goToIndex(){
    wx.reLaunch({
      url: '../index/index'
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