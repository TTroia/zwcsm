//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular: false,
    current: 0,
    title_btn_0:"box-shadow: 0px 0px 10px #888888;",
    title_btn_1:{},
    title_btn_2:{},
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  //上面三个按钮的点击事件，点击的时候换页
  changeTap: function (event) {
    this.switchTapStyle(event.target.dataset.index)
  },
  swiperChange:function(event){
    console.log(event.detail.current);
    this.switchTapStyle(event.detail.current )
  },
  switchTapStyle:function(currentTap){
    this.setData({
      current: currentTap,
      title_btn_0:{},
      title_btn_1:{},
      title_btn_2:{},
    });
    if(currentTap == 0){
      this.setData({
        title_btn_0:"box-shadow: 0px 0px 10px #888888;"
      })
    }else if(currentTap == 1){
        this.setData({
        title_btn_1:"box-shadow: 0px 0px 10px #888888;"
      })
    }else{
        this.setData({
        title_btn_2:"box-shadow: 0px 0px 10px #888888;"
      })
    }
  },
  toList:function(event){
    wx.navigateTo({
      url: '/pages/list/list?sort='+event.target.dataset.sort+"&name="+event.target.dataset.name,
    })
  }
})
