// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    showAll: 2,
    imgUrl: [
    ],
    menu: [
    ],
    merchant: [
    ]
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
  showMore(e){
    console.log(e);
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
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/data',
      data: {},
      method: 'GET',
      header: {'content-type':'application/json'},
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        const imgUrl = result.data.imgUrl
        const merchant = result.data.merchant
        const menu = result.data.menu
        this.setData({
          imgUrl,
          merchant,
          menu
        })
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestCart();
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