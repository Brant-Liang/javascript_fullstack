// pages/catagory/catagory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catagory: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex: 0,
    toView: 'guowei',
    detail: [
      {
        banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1346789120,1908407508&fm=26&gp=0.jpg',
        cate: '果味',
        id: 'guowei',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3240513210,266239592&fm=26&gp=0.jpg',
        cate: '蔬菜',
        id: 'shucai',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://img.zcool.cn/community/0151ec5b9690c0a8012017ee6260c8.jpg@3000w_1l_2o_100sh.jpg',
        cate: '炒货',
        id: 'chaohuo',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2924947080,84071986&fm=26&gp=0.jpg',
        cate: '点心',
        id: 'dianxin',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://hbimg.b0.upaiyun.com/b2fa3298245352428cf93facc85eac0bacd1fc145fff8-LlNo8G',
        cate: '粗茶',
        id: 'cucha',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3521473536,3994351560&fm=26&gp=0.jpg',
        cate: '淡饭',
        id: 'danfan',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      }
    ],
    curDataset: ''
  },
  switchTab(e) {
    console.log(e);

    this.setData({
      curIndex: e.currentTarget.dataset.index,
      toView: e.currentTarget.dataset.id
    })
  },
  scrollingSwitch(e) {
    console.log(e);
    var arr = [];
    for (let i = 0; i < this.data.catagory.length + 1; i++) { 
      arr[i] = i * 624 - 312; //-312 312 936  1560 2184 2808
    }
    var scrollTop = e.detail.scrollTop;  // 624 一页
    arr.forEach((item,index) => {
      if(scrollTop < arr[index + 1] && scrollTop >= arr[index]){
        /* 
        0    -312 - 312
        1     312   936
        2     936   1560
        3     1560  2184 
        4     2184  2808
        5     2808  3432
        */
        this.setData({
          curIndex: index
        })
      }
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