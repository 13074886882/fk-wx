//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录，来获取用户信息
//     wx.getUserInfo({
//       success(res) {
//         const userInfo = res.userInfo
//         const nickName = userInfo.nickName
//         const avatarUrl = userInfo.avatarUrl
//         const gender = userInfo.gender // 性别 0：未知、1：男、2：女
//         const province = userInfo.province
//         const city = userInfo.city
//         const country = userInfo.country
//         // console.log(res);
//   }
// })

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    familyId:null,  //给类编号设置一个全局变量
    userInfo: null,
    myurl:"http://127.0.0.1:3000"
  }
})