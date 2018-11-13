// components/imageBox/imageBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    images: {
      type: Array,
      value: []
    },
    swiper: {
      type: Boolean,
      value: false
    },
    actived: {
      type: Number,
      value: 0
    },
    outDot: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barActivated: 0
  },

  attached: function () {
    if (this.properties.actived) {
      this.setData({
        barActivated: this.properties.actived
      })
    }
  },

  ready: function () {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImage: function (event) {
      let current = event.currentTarget.dataset.url
      let urls = this.properties.images.map(item => item.url)
      wx.previewImage({urls, current})
    },
    swiperChange: function (event) {
      console.log('event', event)
      this.setData({
        barActivated: event.detail.current
      })
    }
  }
})