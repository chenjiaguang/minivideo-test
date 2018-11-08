// pages/topicdetail/topicdetail.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stickyTab: false
  },
  customData: {
    tabRect: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
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
    this.getTabPos()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getTabPos()
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

  getTabPos: function () { // 获取tab的位置
    const query = wx.createSelectorQuery()
    query.select('#tab-wrapper').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(res => {
      // res[0].top       // #the-id节点的上边界坐标
      // res[1].scrollTop // 显示区域的竖直滚动位置
      let {top, right, bottom, left, width, height} = res[0]
      top = top + res[1].scrollTop
      bottom = bottom + res[1].scrollTop
      this.customData.tabRect = { top, right, bottom, left, width, height}
    })
  },

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