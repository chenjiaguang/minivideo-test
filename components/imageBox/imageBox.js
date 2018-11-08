// components/imageBox/imageBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    images: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  ready: function () {
    console.log('properties', this.properties)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImage: function (event) {
      console.log('previewImage', event)
      let current = event.currentTarget.dataset.url
      let urls = this.properties.images.map(item => item.url)
      wx.previewImage({urls, current})
    }
  }
})