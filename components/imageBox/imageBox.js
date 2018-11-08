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
          compress: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541693033167&di=0d32b0a7cac8188c353deb9fc6202c59&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F04%2F16%2Fd3f5c7f6fdf57b2cfacff323426893b6.jpg",
          gif: false,
          height: "600",
          id: "576176",
          longCover: false,
          staticImage: "http://staticcdntest.fantuanlife.com/uimage/AC/66/67/67/AC66676725D12B394BBFC15352C12E5B.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,Q_70/interlace,1/format,jpg",
          url: "http://staticcdntest.fantuanlife.com/uimage/AC/66/67/67/AC66676725D12B394BBFC15352C12E5B.jpg?x-oss-process=image/format,jpg",
          width: "1920"
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
    
  },

  ready: function () {

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