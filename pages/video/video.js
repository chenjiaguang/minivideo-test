// pages/video/video.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFullScreen: true,
    isFullScreen: false,
    duration: 0,
    current: 0,
    currentTime: 0,
    currentTimeText: '00:00',
    maxTime: 0,
    maxTimeText: '00:00',
    percent: 0.0,
    buffered: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad')
    setTimeout(() => {
      let rData = {
        limit: 20,
        origin: "H5",
        pn: 1,
        snapshot: "",
        token: "4baf1a75290740c4b8400a8a01bbaeca",
        topicId: "20",
        type: 0,
      }
      util.request('/jv/anonymous/qz/topic/find', rData).then(res => {
        console.log('res', res)
      }).catch(err => {
        console.log('err', err)
      })
    }, 5000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.videoContext = wx.createVideoContext('video-player')
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  touchmove: function() {
    console.log('touchmove')
  },
  changeFullScreen: function () {
    let {isFullScreen} = this.data
    console.log('changeFullScreen', isFullScreen)
    if (isFullScreen) {
      this.videoContext.exitFullScreen()
    } else {
      this.videoContext.requestFullScreen()
    }
  },
  onFullScreenChange: function (event) {
    this.setData({
      isFullScreen: event.detail.fullscreen
    })
  }
})