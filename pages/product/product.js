// pages/product/product.js
Page({

  /* 页面的初始数据*/
  data: {
    prolist:[],
    rlist:[],
    bg:[],
    pageIndex:1,
    pageSize:10,
    hasMore:true
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    this.getFname();
    this.getProductFamily(); //这里是页面一加载时就会调用的数据
    this.getBGImg();     //背景图，监听页面一开始就加载

  },
  /**
   * 左侧导航栏跳转右边对应页面
   * 获取左侧导航栏的类名fid
   * 并且根据点击的fid来获取对应的类的页面
   */
  handle01:function(option){
    // console.log(option)--先测试点击的时候，打印出来的数据结构中，找id的位置
    var fid = option.target.dataset.id;  //根据结构数据，请求点击的目标id
    // console.log(fid)
    var url = "http://127.0.0.1:3000/getProduct?fid=" + fid; //fid要跟app里面的fid=req.query.fid
    wx.request({
      url: url,
      success:(res)=>{
        // console.log(res);
        var data = res.data.data; //获取到数据后，截取10张
        this.setData({rlist:data})
      }
    })
  },
  /**
   * 用户向上滑的时候，加载更多
   * 
   */
  loadMore:function(){
    console.log(111)
    var pno = this.data.pageIndex+1;
    console.log(pno)
    // var ps = this.data.pageSize;
    wx.request({
      url:'http://127.0.0.1:3000/getProduct',
      data:{pno},
      success:(res)=>{
        // console.log(res);
        var rows = this.data.rlist.concat(res.data.data);
        console.log(rows);
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
        var data = res.data.data;
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
        // console.log(res.data)
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