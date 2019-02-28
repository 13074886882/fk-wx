// pages/member/member.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    motto:'Hello',  //未定义
    //orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '/pages/img/icons/daifukuan.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '/pages/img/icons/daifahuo.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '/pages/img/icons/daishouhuo.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '/pages/img/icons/daipingjia.png'
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户头像信息，查看是否授权
      },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    // console.log(1)
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              // console.log(res.userInfo)
              const userInfo = res.userInfo
              const nickName = userInfo.nickName
              const avatarUrl = userInfo.avatarUrl
              const gender = userInfo.gender // 性别 0：未知、1：男、2：女
              const province = userInfo.province
              const city = userInfo.city
              const country = userInfo.country
            }
          })
        }  
     }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})