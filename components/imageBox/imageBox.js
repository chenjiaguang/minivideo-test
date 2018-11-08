// components/imageBox/imageBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    images: {
      type: Array,
      value: [
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/AC/66/67/67/AC66676725D12B394BBFC15352C12E5B.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "640",
          id: "576176",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/AC/66/67/67/AC66676725D12B394BBFC15352C12E5B.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/AC/66/67/67/AC66676725D12B394BBFC15352C12E5B.jpg?x-oss-process=image/format,jpg",
          width: "800"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "640",
          id: "576177",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/format,jpg",
          width: "1024"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/05/46/1C/E4/05461CE4A639EB39CEF08BEFB1B8FCA2.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "800",
          id: "576178",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/05/46/1C/E4/05461CE4A639EB39CEF08BEFB1B8FCA2.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/05/46/1C/E4/05461CE4A639EB39CEF08BEFB1B8FCA2.jpg?x-oss-process=image/format,jpg",
          width: "800"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "600",
          id: "576179",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/format,jpg",
          width: "960"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "600",
          id: "576179",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/format,jpg",
          width: "960"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "640",
          id: "576177",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/format,jpg",
          width: "1024"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "600",
          id: "576179",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/format,jpg",
          width: "960"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "600",
          id: "576179",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/1F/C6/F4/0A/1FC6F40AF23311F72949A61E4623BD88.jpg?x-oss-process=image/format,jpg",
          width: "960"
        },
        {
          compress: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          gif: false,
          height: "640",
          id: "576177",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/ED/0A/06/A6/ED0A06A6C0E053AD6A2A0758E5923489.jpg?x-oss-process=image/format,jpg",
          width: "1024"
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    direction: '',
    wrapperStyle: '',
    imageStyle: []
  },

  ready: function () {
    wx.createSelectorQuery().in(this).selectAll('.box-warpper').boundingClientRect(rects => {
      rects.forEach(rect => {
        console.log('rect', rect)
        const maxWidth = rect.width
        let images = JSON.parse(JSON.stringify(this.properties.images))
        let direction = ''
        let wrapperStyle = ''
        let imageStyle = []
        if (images.length === 1) { // 单图-------------
          let { width, height, longCover, gif } = images[0]
          width = parseInt(width)
          height = parseInt(height)
          if (width === height) { // 方图
            imageStyle[0] = 'width:' + maxWidth + 'px;height:' + maxWidth + 'px'
          } else if (width > height) { // 横图
            imageStyle[0] = 'width:' + maxWidth + 'px;height:' + parseInt(maxWidth * 0.63) + 'px'
          } else if (longCover) { // 长图
            imageStyle[0] = 'width:' + parseInt(maxWidth * 0.61) + 'px;height:' + maxWidth + 'px'
          } else if (width < height) { // 竖图
            imageStyle[0] = 'width:' + parseInt(maxWidth * 0.69) + 'px;height:' + maxWidth + 'px'
          }
        } else if (images.length === 2) { // 二图-------------
          images.forEach(item => {
            let { longCover, gif } = item
            const _style = 'width:' + parseInt(maxWidth * 0.495) + 'px;height:' + parseInt(maxWidth * 0.495) + 'px'
            imageStyle.push(_style)
          })
        } else if (images.length === 3) { // 三图
          direction = 'column'
          wrapperStyle = 'height:' + parseInt(maxWidth * 0.6637) + 'px'
          images.forEach((item, idx) => {
            if (idx === 0) {
              const _style = 'width:' + parseInt(maxWidth * 0.6637) + 'px;height:' + parseInt(maxWidth * 0.6637) + 'px'
              imageStyle.push(_style)
            } else {
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px'
              imageStyle.push(_style)
            }
          })
        } else if (images.length === 4) { // 四图
          wrapperStyle = 'height:' + maxWidth + 'px'
          images.forEach((item, idx) => {
            if (idx === 0 && parseInt(item.width) >= parseInt(item.height)) { // 第一张横图
              const _style = 'width:' + maxWidth + 'px;height:' + parseInt(maxWidth * 0.6637) + 'px'
              imageStyle.push(_style)
            } else if (idx === 0 && parseInt(item.width) < parseInt(item.height)) { // 第一张竖图
              direction = 'column'
              const _style = 'width:' + parseInt(maxWidth * 0.6637) + 'px;height:' + maxWidth + 'px'
              imageStyle.push(_style)
            } else {
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px'
              imageStyle.push(_style)
            }
          })
        } else if (images.length === 5) { // 五图
          images.forEach((item, idx) => {
            if (idx === 0 || idx === 1) { // 第一张\第二张图
              const _style = 'width:' + parseInt(maxWidth * 0.4956) + 'px;height:' + parseInt(maxWidth * 0.4956) + 'px'
              imageStyle.push(_style)
            } else {
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px;margin-top:' + (maxWidth - parseInt(maxWidth * 0.4956) * 2) + 'px'
              imageStyle.push(_style)
            }
          })
        } else if (images.length === 6) { // 六图
          images.forEach((item, idx) => {
            if (idx < 3) { // 前三张图
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px'
              imageStyle.push(_style)
            } else {
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px;margin-top:' + parseInt((maxWidth - parseInt(maxWidth * 0.3275) * 3) / 2) + 'px'
              imageStyle.push(_style)
            }
          })
        } else if (images.length === 9) { // 九图
          images.forEach((item, idx) => {
            if (idx < 3) { // 前三张图
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px'
              imageStyle.push(_style)
            } else {
              const _style = 'width:' + parseInt(maxWidth * 0.3275) + 'px;height:' + parseInt(maxWidth * 0.3275) + 'px;margin-top:' + parseInt((maxWidth - parseInt(maxWidth * 0.3275) * 3) / 2) + 'px'
              imageStyle.push(_style)
            }
          })
        }
        this.setData({ direction, wrapperStyle, imageStyle })
      })
    }).exec()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initSize: function () {
      let images = JSON.parse(JSON.stringify(this.properties.images))
    }
  }
})