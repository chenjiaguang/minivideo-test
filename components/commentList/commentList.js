// components/commentList/commentlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentData: {
      type: Object,
      value: {
        comment_num: 0,
        comment_list: [],
        like_num: 0,
        like_list: []
      },
      observer: function (newVal, oldVale, changedPath) {
      }
    }
  },

  ready: function () {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    moreReply: function (event) {
      console.log('moreView')
      let {commentid, pn} = event.currentTarget.dataset
      let passData = {
        commentId: commentid,
        pn: pn
      }
      this.triggerEvent('moreReply', passData)
    }
  }
})
