// pages/product/product.js
Page({

  /* 页面的初始数据*/
  data: {
    prolist:[],
    rlist:[],
    bg:[]
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    this.getFname();
    this.getProductFamily();
    this.getBGImg();
  },
  // 1.获取左侧导航栏的类名
  getFname: function () {
    var url = "http://127.0.0.1:3000/getFname";
    wx.request({
      url: url,
      success: (res) => {
        var data = res.data;
        this.setData({ prolist: data })
        // console.log(res.data)
      }
    });
   },
   //2.获取右侧商品栏的图片和标题（subname）
  getProductFamily:function(){
    var url2 = "http://127.0.0.1:3000/getProduct";
    wx.request({
      url: url2,
      success:(res)=>{
        var data = res.data;
        this.setData({rlist:data})
        // console.log(this.data.rlist.data)
      }
    })
  },
  //3.获取背景图
  getBGImg:function(){
    var url3 = "http://127.0.0.1:3000/getImage?id=1";
    wx.request({
      url: url3,
      success:(res)=>{
        var data = res.data;
        this.setData({bg:data})
        console.log(res.data)
      }
    })
  },
  /*生命周期函数--监听页面初次渲染完成 */
  onReady: function () {

  },

  /*生命周期函数--监听页面显示*/
  onShow: function () {

  },

  /*生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /*生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {

  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  }
})