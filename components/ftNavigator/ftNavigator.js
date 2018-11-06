// components/navigator/navigator.js
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
    statusBarHeight: 20,
    navigatorBarHeight: 44
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setFtNavigator: function () {
      console.log('setFtNavigator')
      let statusBarHeight = 20
      let navigatorBarHeight = 44
      let that = this
      wx.getSystemInfo({
        success: function (res) {
          if (res.model == 'iPhone X') {
            statusBarHeight = 44
          }
          that.setData({
            statusBarHeight: statusBarHeight,
            navigatorBarHeight: navigatorBarHeight
          })
        }
      })
    }
  },
  created: () => {
    console.log('created')
  },
  attached: function () {
    this.setFtNavigator()
  },
  ready: () => {
    console.log('ready')
  }
})
