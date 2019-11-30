Page({
  data: {
    // json server
    navData: [],
    currentTab: 0,
    navScrollLeft: 0,
    address: '范家新村',
    destination: '江西科技师范大学红角州校区',
    isLoading: true
  },
  switchNav(e) {
    const cart = e.currentTarget.dataset.name
    let text = this.data.navData;
    const current = e.currentTarget.dataset.current
    var singleNavWidth = 
    this.data.windowWidth / 6;
    this.setData({
      cart,
      currentTab: current,
      navScrollLeft: (current - 1) * singleNavWidth
    })
  },
  onLoad () {
    var w = 
    wx.getSystemInfoSync().windowWidth;
    this.setData({
      windowWidth: w
    })
    this.requestCart();
  },
  // 一个请求函数
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
        // console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        this.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })

  }
})
