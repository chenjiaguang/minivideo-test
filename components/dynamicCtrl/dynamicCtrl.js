// components/dynamicCtrl/dynamicCtrl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    likenum: 123,
    commnetnum: 456,
    islike: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindLike: function () {
      this.setData({
        islike: !this.data.islike,
        likenum: this.data.likenum + (this.data.islike ? -1 : 1)
      })
    },
  }
})