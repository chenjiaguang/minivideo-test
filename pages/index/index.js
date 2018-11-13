//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/util.js'
Page({
  data: {
    motto: 'Hello World111',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recommendTopics: [],
    dynamics: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.refreshData()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  refreshData: function () {
    let rData = {
      pn: 1,
      limit: 20,
      snapshot: 0
    }
    util.request('/jv/qz/dynamics', rData, { token: "cb7bc5abd67346e5809338a5e9ba1b23" }).then(res => {
      console.log('res', res)
      if (res && res.data && !res.error) { // 成功获取数据
        let { recommendTopics, list: dynamics } = res.data
        this.setData({ recommendTopics, dynamics})
      }
    }).catch(err => {
      console.log('err', err)
    })
  },
  moreTopic: function () {
    console.log('查看更多话题')
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
