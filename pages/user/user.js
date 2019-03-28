Page({

  /**
  * 页面的初始数据
  */
  data: {
      users:[
        {
          name:'简书会员'
        },
        {
          name:'简书活动'
        },
        {
          name:'简东西'
        },
        {
          name:'我的钱包'
        },
        {
          name:'我的专题/文集'
        },
        {
          name:'浏览历史'
        }
      ]
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  },

  /**
  * 修改个人信息
  */
  choseImage: function () {
    //修改头像需用到wx.uploadfile()上传至服务器
    //这里不开放图片上传的接口，有需要可学习后台相关自行搭建服务器
    wx.showToast({
      title: '头像暂不支持修改',
      icon: 'none'
    })
  },
  bindName: function () {
    wx.navigateTo({
      url: './change?changeWhat=name',
    })
  },
  bindTel: function () {
    wx.navigateTo({
      url: './change?changeWhat=tel',
    })
  },
  bindSex: function () {
    wx.navigateTo({
      url: './change?changeWhat=sex',
    })
  },
  bindSchool: function () {
    wx.navigateTo({
      url: './change?changeWhat=school',
    })
  },
  bindNumber: function () {
    wx.navigateTo({
      url: './change?changeWhat=number',
    })
  },
  bindYear: function () {
    wx.navigateTo({
      url: './change?changeWhat=enter_year',
    })
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
  }
})

    