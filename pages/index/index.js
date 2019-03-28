//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabList: ['推荐', '专题', '连载'],
    current: 0,//当前选中的Tab项
  },

  onLoad: function () {

  },
  /**
    * 内容区域swiper的切换事件
    */
  contentChange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },

  /**
   * Tab的点击切换事件
   */
  tabItemClick: function (e) {
    this.setData({
      current: e.currentTarget.dataset.pos
    })
  },
})
