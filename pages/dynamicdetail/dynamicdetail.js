// pages/dynamicdetail/dynamicdetail.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentData: {
      comment_num: 0,
      comment_list: [],
      like_num: 0,
      like_list: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let rData = {
      id: "11708",
      showAll: false
    }
    util.request('/jv/qz/dynamic', rData, {
      token: "c79f001778cf4c1c85571ad6611e134d"
    }).then(res => {
      console.log('res', res)
      let {
        comment_num,
        comment_list,
        like_num,
        like_list
      } = res.data
      this.setData({
        commentData: {
          comment_num,
          comment_list,
          like_num,
          like_list
        }
      })
    }).catch(err => {
      console.log('err', err)
    })
  },

  deleteLike: function () {
    let {
      like_num,
      like_list
    } = this.data.commentData
    let newList = JSON.parse(JSON.stringify(like_list))
    newList.shift()
    this.setData({
      'commentData.like_num': parseInt(like_num) - 1,
      'commentData.like_list': newList
    })
  },

  addLike: function() {
    let {
      like_num,
      like_list
    } = this.data.commentData
    let newList = JSON.parse(JSON.stringify(like_list))
    newList.unshift({
      avatar: "http://staticcdntest.fantuanlife.com/uimage/37/4e/4c/ea/374e4cea66154aa1b43a75240e42109b.jpg?x-oss-process=image/resize,m_fill,w_304,h_304/circle,r_152/format,jpg/interlace,1/format,jpg",
      fans_num: 9,
      follow_num: 9,
      initials: "C",
      intro: "",
      isNews: false,
      jguid: "TEST_JGIM20181025000130",
      level: 3,
      truly_username: "陈家光",
      uid: "23",
      user_cover: "http://staticcdntest.fantuanlife.com/uimage/a8/c9/45/da/a8c945da508e22bb2243e2f3772e69a0.jpg?x-oss-process=image/format,jpg",
      username: "陈家光",
      vipUser: false
    })
    this.setData({
      'commentData.like_num': parseInt(like_num) + 1,
      'commentData.like_list': newList
    })
  },

  viewMoreReply: function (event) { // 查看更多回复
    console.log('viewMoreReply', event)
    let { commentId, pn} = event.detail // 组件传递过来的参数
    let rData = {
      commentId,
      pn: parseInt(pn) + 1,
      limit: 10
    }
    let idx = null
    this.data.commentData.comment_list.forEach((item, index) => {
      if (item.id.toString() === commentId.toString()) {
        idx = index
      }
    })
    if (this.data.commentData.comment_list[idx].fetching) { // 如果这条评论正在加载更多回复，则不做任何操作
      return false
    }
    this.setData({
      ['commentData.comment_list[' + idx + '].fetching']: true
    })
    util.request('/jv/qz/replays', rData, {
      token: "c79f001778cf4c1c85571ad6611e134d"
    }).then(res => {
      let comment = this.data.commentData.comment_list.filter((item, index) => {
        if (item.id.toString() === commentId.toString()) {
          idx = index
        }
        return item.id.toString() === commentId
      })[0]
      if (res && res.data && !res.error) { // 获取成功
        comment.replys.list = comment.replys.list.concat(res.data.list)
        comment.replys.paging = res.data.paging
        comment.fetching = false
      } else { // 获取失败
        comment.fetching = false
      }
      console.log('获取成功', idx, comment)
      this.setData({
        ['commentData.comment_list[' + idx + ']']: comment
      })
    }).catch(err => {
      console.log('err', err)
      this.data.commentData.comment_list.forEach((item, index) => {
        if (item.id.toString() === commentId.toString()) {
          idx = index
        }
      })
      this.setData({
        ['commentData.comment_list[' + idx + '].fetching']: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  }
})