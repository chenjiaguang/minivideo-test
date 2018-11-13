// pages/topiclist/topiclist.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex: 0,
    dataList:[],
  },
  onLoad: function(options) {
    let rData = {}
    util.request('/jv/qz/topic/getall', rData, {
      token: "lcaKiq5GIC_FHqubOBcI6FUKaL8N171U"
    }).then(res => {
      this.setData({
        dataList: res.data
      })
    }).catch(err => {
      console.log('err', err)
    })
  },
  selectTopicCategory: function(e) {
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    })
  },
  selectTopic: function(e) {
    wx.showToast({
      title: "点击了id" + e.currentTarget.dataset.item.id
    })
  }
})