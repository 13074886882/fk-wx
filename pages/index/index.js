var app = getApp() //获取全局变量
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    navlist:[],
    hotlist:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImages();
    this.getNavImages();
    this.getHotImages();
  },
  //首页跳转到taBar的页面
  click_swiper:function(e){
    //当点击图片上的事件时，触发这个函数
    wx.switchTab({ //因为是跳转到tab页面，所以用switchTab属性
      url: '/pages/product/product', //跳转的指定路径 
    })
  },
  getImages:function(){
    var url1 = app.globalData.myurl+"/getImages";
    wx.request({
      url:url1,
      success:(res)=>{
        var data = res.data;
        this.setData({list:data})
      }
    });
  },
  getNavImages: function () {
    //获取九宫格信息
    var url = app.globalData.myurl+"/getNavImages";
    wx.request({
      url: url,
      success: (res) => {
        this.setData({
          navlist: res.data
        });
      },
    })
  },
  //获取热销商品信息
  getHotImages:function(){
    var url2 = app.globalData.myurl+"/getHotImages";
    wx.request({
      url:url2,
      success:(res)=>{
        var data = res.data;
        this.setData({
          hotlist:res.data
        })
      }
    });
  },
  //点击跳转到分类页面
 
  
  
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