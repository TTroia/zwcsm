Page({
    data: {
        title: '',
        page: -20,
        foodList: [],
        sort: ''
    },
    lower: function () {
        var page = this;
        wx.showToast({
            title: '正在加载更多',
            icon: 'loading',
            duration: 1000,
            success: function () {
                console.log("get more...");
                page.getFoodData(page.data.sort);
            },
            complete:wx.hideToast()
        })

    },
    onLoad: function (option) {
        var page = this;
        console.log(option);
        page.setData({
            title: option.name,
            sort: option.sort
        })
        page.getFoodData(option.sort);
    },
    getFoodData: function (cx) {
        var pageT = this;
        wx.request({
            url: 'https://apis.juhe.cn/cook/index',
            data: {
                key: '2a32d192350743285f14cea1d9a7de8c',
                cid: cx,
                pn: this.data.page + 20,
                rn: 20,
                format: 1
                // page:3,
                // size:20
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {

                res.data.result.data.forEach(function (e) {
                    var n = Math.random() * 10 + 5;
                    // console.log(13+n)
                    e.imtro = e.imtro.substring(0, 13 + n)
                    // console.log(e.imtro)
                })
                pageT.setData({
                    foodList: pageT.data.foodList.concat(res.data.result.data),
                    page: pageT.data.page + 20
                })
            }
        })
    },

})