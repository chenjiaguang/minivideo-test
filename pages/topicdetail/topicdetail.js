// pages/topicdetail/topicdetail.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stickyTab: false,
    images: [],
    tabs: [{
      title: 'zuixin',
      data: [],
      paging: {},
      fetching: false,
      refreshing: false
    },
    {
      title: 'zuire',
      data: [],
      paging: {},
      fetching: false,
      refreshing: false
    }]
  },
  customData: {
    tabRect: {},
    images: [
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=444363870,3669186860&fm=200&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=500808421,1575925585&fm=200&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1341566140,1165602950&fm=200&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1810050752,207505815&fm=200&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2178785329,3164828238&fm=200&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1439351280,466388967&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=509872140,103806935&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3084817314,1112840538&fm=26&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2422677321,1320464292&fm=26&gp=0.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload', getCurrentPages())
    let rData = {
      limit: 20,
      pn: 1,
      snapshot: "",
      topicId: "20",
      type: 0,
      token: "c79f001778cf4c1c85571ad6611e134d"
    }
    util.request('/jv/qz/topic/find', rData, { token: "c79f001778cf4c1c85571ad6611e134d"}).then(res => {
      console.log('res', res)
    }).catch(err => {
      console.log('err', err)
    })
  },
  touchend: function () {
    // this.getTabPos()
  },
  deleteImage: function () {
    console.log('deleteImage')
    let images = JSON.parse(JSON.stringify(this.data.images))
    images.pop()
    this.setData({ images })
  },
  addImage: function () {
    console.log('addImage')
    let images = JSON.parse(JSON.stringify(this.data.images))
    images.push({
      compress: this.customData.images[this.data.images.length],
      gif: false,
      height: "600",
      id: "576176",
      longCover: false,
      staticImage: "http://staticcdntest.fantuanlife.com/uimage/AC/66/67/67/AC66676725D12B394BBFC15352C12E5B.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
      url: this.customData.images[this.data.images.length],
      width: "1920"
    })
    this.setData({images})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.getTabPos()
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

  // getTabPos: function () { // 获取tab的位置
  //   const query = wx.createSelectorQuery()
  //   query.select('#tab-wrapper').boundingClientRect()
  //   query.selectViewport().scrollOffset()
  //   query.exec(res => {
  //     // res[0].top       // #the-id节点的上边界坐标
  //     // res[1].scrollTop // 显示区域的竖直滚动位置
  //     let {top, right, bottom, left, width, height} = res[0]
  //     top = top + res[1].scrollTop
  //     bottom = bottom + res[1].scrollTop
  //     this.customData.tabRect = { top, right, bottom, left, width, height}
  //   })
  // },

  pageScroll: function (event) {
    console.log('stickyTab', this.data.stickyTab)
    // if (event.scrollTop >= this.customData.tabRect.top && !this.data.stickyTab) {
    //   this.setData({
    //     stickyTab: true
    //   })
    // } else if (event.scrollTop < this.customData.tabRect.top && this.data.stickyTab) {
    //   this.setData({
    //     stickyTab: false
    //   })
    // }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})