// pages/product/product.js
var app = getApp();  //引入全局变量
Page({

  /* 页面的初始数据*/

  data: {
    prolist:[],
    rlist:[], //接收右侧商品栏所请求到的数据
    bg:[],    
    pageIndex:1,
    pageSize:10,
    hasMore:true
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    this.getFname();
    this.getProductFamily(); //这里是页面一加载时就会调用的数据
    // this.getBGImg();     //背景图，监听页面一开始就加载

  },
  /**
   * 左侧导航栏跳转右边对应页面
   * 获取左侧导航栏的类名fid
   * 并且根据点击的fid来获取对应的类的页面
   */
  //商品页点击商品跳转详情页的绑定事件
  godetail:function(e){
    var pid=e.target.dataset.id;  //获取点击的目标Id
    wx.navigateTo({
      url: '/pages/detail/detail?pid='+pid,  //带参数pid跳转到详情页的页面，--详情页再接收
    })
  },
  handle01:function(option){
    //  --先测试点击的时候，打印出来的数据结构中，找id的位置
    var fid = option.target.dataset.id;  //根据结构数据，请求点击的目标id
    app.globalData.familyId =fid;       //将类编号保存的全局变量赋值给fid
    var url = app.globalData.myurl+"/getProduct?fid=" + fid; //fid要跟app里面的fid=req.query.fid
    wx.request({
      url: url,
      success:(res)=>{
        var data = res.data.data; 
        this.setData({ rlist: data, pageIndex:1})  //每点击一次的时候，页数又从1开始
      }
    })
  },
  /**
   * 用户向上滑的时候，加载更多
   * 
   */
  loadMore:function(){
    var pno = this.data.pageIndex+1;
    wx.request({
      url: app.globalData.myurl+'/getProduct?fid='+app.globalData.familyId,  //再调用一次全局变量
      data:{pno},
      success:(res)=>{
        var rows = this.data.rlist.concat(res.data.data);
        // console.log(rows);
        var pc = res.data.pageCount;
        var flag = pno < pc;
        this.setData({
          rlist: rows,
          pageIndex: pno,
          hasMore: flag
        })
      }
    })
  },

  //获取左侧导航栏
  getFname: function () {
    var url = app.globalData.myurl+"/getFname";
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
    var url2 = app.globalData.myurl+"/getProduct";
    wx.request({
      url: url2,
      success:(res)=>{
        var data = res.data.data;
        console.log(data);
        this.setData({rlist:data})
        //  console.log(this.data.rlist.data)
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
    this.loadMore();
  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  }
})