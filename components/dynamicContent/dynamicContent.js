// components/dynamicContent/dynamicContent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String,
      value: ''
    },
    margin: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOpen: true,
    boxHeight: 192,
    contentHeight: null
  },
  ready: function(e) {
    let _this = this
    this.createSelectorQuery().select('#content').boundingClientRect(function(res) {
      if (res.height > (_this.data.boxHeight / getApp().globalData.systemInfo.pixelRatio)) {
        _this.setData({
          isOpen: false,
          contentHeight: res.height + 'px'
        })
      }
    }).exec()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open() {
      this.setData({
        isOpen: true
      })
    }
  }
})