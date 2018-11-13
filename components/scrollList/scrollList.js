// components/scrollList/scrollList.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    initialTab: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    headerHeight: null,
    bannerHeight: null,
    transY: null,
    currentTab: null,
    upperThreshold: 0,
    showRefresh: true,
    scrollElements:null
  },

  ready: function() {
    console.log('tabs', this.properties.tabs)
    // 设置窗口信息
    const query = wx.createSelectorQuery()
    let headerHeight = null
    let bannerHeight = null
    query.in(this).select('#ft-scroll-header').boundingClientRect(res => {
      headerHeight = res.height + 'px'
      this.setData({
        headerHeight
      })
    }).exec()
    query.in(this).select('#banner-header').boundingClientRect(res => {
      bannerHeight = res.height + 'px'
      this.setData({
        bannerHeight
      })
    }).exec()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onScroll: function(event) {
      // 显示隐藏header
      if (!(this.data.headerHeight && this.data.bannerHeight)) { // 未读取到高度则返回
        return false
      }
      let idx = event.currentTarget.dataset.idx
      let {
        scrollTop
      } = event.detail
      let transY = scrollTop > (parseInt(this.data.bannerHeight) * 1) ? ('-' + this.data.bannerHeight) : 0
      let fixed = scrollTop > (parseInt(this.data.bannerHeight) * 1) ? true : false
      if (transY !== this.data.transY) { // 当前状态跟预期不一致时调用setData
        this.setData({
          transY,
          fixed,
          showRefresh: parseInt(transY) === 0
        })
      }
    },
    onScrolltoupper: function(event) {
      this.setData({ showRefresh: true })
    },
    headerTouchmove: function(event) {
      console.log('headerTouchmove', event)
    },
    swiperChange: function(event) {
      console.log('changeTab', event)
      if (event.detail.source === 'touch') { // 用户触摸swiper导致改变，而不是通过current值来改变
        this.setData({
          currentTab: event.detail.current
        })
      }
    },
    changeTab: function(event) {
      let idx = event.currentTarget.dataset.idx
      if (idx !== this.data.currentTab) {
        this.setData({
          currentTab: idx
        })
      }
    },
    refreshData: function(event) {
      console.log('refreshData', this.data.scrollElements)
      this.setData({
        ['scrollElements[' + (this.data.currentTab || this.data.initialTab) + ']']: 'scroll-ele' + (this.data.currentTab || this.data.initialTab)
      }, () => { // 执行刷新操作

      })
    }
  }
})