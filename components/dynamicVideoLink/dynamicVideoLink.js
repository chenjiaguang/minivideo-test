// components/dynamicVideoLink/dynamicVideoLink.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '朱一龙拍摄杂志高清视频花絮来了~哈哈哈哈朱一龙拍摄杂志高清视频花絮来了~哈哈哈哈',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cover: "http://img.zcool.cn/community/014e1a58d20fb3a801219c77c11325.jpg@3000w_1l_2o_100sh.jpg",
    title: "朱一龙拍摄杂志高清视频花絮来了~哈哈哈哈朱一龙拍摄杂志高清视频花絮来了~哈哈哈哈",
    "from": "来自bilibili.com",
    duration: "04:59"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})