// components/dynamicHead/dynamicHead.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerData: {
      type: Object,
      value: {
        avatar: "http://img.zcool.cn/community/0128be58d20fc3a801219c77e6ff8e.jpg@900w_1l_2o_100sh.jpg",
        username: "杰西卡",
        time: "刚刚",
        range: 0
      }
    }
  },

  /**
   * 组件的初始数据
   */

  data: {
    rangeClass: {
      0: 'icon-dysign1',
      1: 'icon-dysign3',
      2: 'icon-dysign2',
      show_allways: 'icon-dysign4'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})