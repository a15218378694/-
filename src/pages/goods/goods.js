var carArray1 = []
var name = ''
var nameArr = []
Page({
    data: {
        goods: [
            {
                "name": "热销榜",
                "type": -1,
                "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "price": 10,
                        "oldPrice": "",
                        "description": "咸粥",
                        "sellCount": 229,
                        "Count": 0,
                        "rating": 100,
                        "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "很喜欢的粥",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "扁豆焖面",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 188,
                        "Count": 0,
                        "rating": 96,
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "info": "",
                        "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "葱花饼",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 124,
                        "Count": 0,
                        "rating": 85,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "没啥味道",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 1,
                                "text": "很一般啊",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "牛肉馅饼",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 114,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "难吃不推荐",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "招牌猪肉白菜锅贴/10个",
                        "price": 17,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 101,
                        "Count": 0,
                        "rating": 78,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "不脆,不好吃",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "南瓜粥",
                        "price": 9,
                        "oldPrice": "",
                        "description": "甜粥",
                        "sellCount": 91,
                        "Count": 0,
                        "rating": 100,
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红豆薏米美肤粥",
                        "price": 12,
                        "oldPrice": "",
                        "description": "甜粥",
                        "sellCount": 86,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "八宝酱菜",
                        "price": 4,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 84,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红枣山药糙米粥",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 81,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "糊塌子",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 80,
                        "Count": 0,
                        "rating": 93,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "单人精彩套餐",
                "type": 2,
                "foods": [
                    {
                        "name": "红枣山药粥套餐",
                        "price": 29,
                        "oldPrice": 36,
                        "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                        "sellCount": 17,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "冰爽饮品限时特惠",
                "type": 1,
                "foods": [
                    {
                        "name": "VC无限橙果汁",
                        "price": 8,
                        "oldPrice": 10,
                        "description": "",
                        "sellCount": 15,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "还可以",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            }
        ],
        toView: '0',
        scrollTop: 100,
        foodCounts: 0,
        totalPrice: 0,// 总价格
        totalCount: 0, // 总商品数
        carArray: [],
        minPrice: 20,//起送價格
        payDesc: '',
        deliveryPrice: 4,//配送費
        fold: true,
        selectFoods: [{ price: 20, count: 2 }],
        cartShow: 'none',
        status: 0,
    },
    selectMenu: function (e) {
        var index = e.currentTarget.dataset.itemIndex;
        this.setData({
            toView: 'order' + index.toString()
        })
        console.log(this.data.toView);
    },
    //列表的加减
    changeList(e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        var changeType = e.currentTarget.dataset.changetype;
        var selectStatu = this.data.goods[parentIndex].foods[index].selected;
        name = this.data.goods[parentIndex].foods[index].name;
        var mark = 'a' + index + 'b' + parentIndex;
        var icon = this.data.goods[parentIndex].foods[index].icon;
        if (changeType == "jia") {
            this.data.goods[parentIndex].foods[index].Count++
        } else if (changeType == "jian") {
            this.data.goods[parentIndex].foods[index].Count--
        }
        var num = this.data.goods[parentIndex].foods[index].Count;
        //每类的商品选择总数 这里没有是否选择判断的
        this.data.goods.forEach((v, i) => {
            v.leftTolNum = 0;
            v.foods.forEach((v1, i1) => {
                v.leftTolNum += v1.Count
            })
        })
        var mark = 'a' + index + 'b' + parentIndex
        var price = this.data.goods[parentIndex].foods[index].price;
        if (num == 1 && changeType == "jia") {
            var obj = { price: price, icon: icon, num: num, mark: mark, name: name, index: index, selectStatu: selectStatu, parentIndex: parentIndex };
            carArray1.push(obj);
        } else if (num > 0) {
            carArray1.forEach((v, i) => {
                if (v.mark == mark) {
                    v.num = num
                }
            })
        } else if (num == 0 && changeType == "jian") {
            carArray1.forEach((v, i) => {
                if (v.mark == mark) {
                    carArray1.splice(i, 1)
                }
            })
        }
        this.setData({
            carArray: carArray1,
            goods: this.data.goods
        })
        this.calTotalPrice()
    },

    //操作列表的数据
    opeLisArray() {

    },
    //操作购物车的数据
    opeCarArray(that, parentIndex, itemIndex, changeType) {
        console.log(itemIndex, changeType);

        that.data.carArray.forEach((v, i) => {

            if (parentIndex == v.parentIndex && itemIndex == v.index && changeType == "jia") {
                ++v.num
            } else if (parentIndex == v.parentIndex && itemIndex == v.index && changeType == "jian") {
                --v.num
                if (v.num == 0) {
                    that.data.carArray.splice(i, 1)
                    carArray1.splice(i, 1)
                }
            }
        })
    },


    // 购物车的加减
    changeCart(e) {
        var that = this;
        var changeType = e.currentTarget.dataset.changetype
        var parentIndex = e.currentTarget.dataset.parentindex;
        var itemIndex = e.currentTarget.dataset.itemindex;
        var shopName = e.currentTarget.dataset.shopname;
        console.log('------------------------------------');
        console.log(shopName);
        if (changeType == "jia") {
            for (var i2 = 0; i2 < that.data.goods.length; i2++) {
                for (var i3 = 0; i3 < that.data.goods[i2].foods.length; i3++) {
                    if (that.data.goods[i2].foods[i3].name.indexOf(shopName) > -1) {
                        console.log(that.data.goods[i2].foods[i3].name);
                        that.data.goods[i2].foods[i3].Count++
                        break;
                    }
                }
            }
        } else if (changeType == "jian") {
            for (var i2 = 0; i2 < that.data.goods.length; i2++) {
                for (var i3 = 0; i3 < that.data.goods[i2].foods.length; i3++) {
                    if (that.data.goods[i2].foods[i3].name.indexOf(shopName) > -1) {
                        console.log(that.data.goods[i2].foods[i3].name,i2,i3);
                        that.data.goods[i2].foods[i3].Count--
                        break;
                    }
                }
            }
        }

        that.opeCarArray(that, parentIndex, itemIndex, changeType)
        that.setData({
            carArray: that.data.carArray,
            goods: that.data.goods
        })
        that.calTotalPrice()
    },

    //改变选择按钮的状态
    isSelected(e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        var selectStatu = !this.data.goods[parentIndex].foods[index].selected;
        this.data.goods[parentIndex].foods[index].selected = selectStatu;
        var mark = 'a' + index + 'b' + parentIndex
        carArray1.forEach((v, i) => {
            if (v.mark == mark) {
                v.selectStatu = selectStatu
            }
        })
        this.setData({
            carArray: carArray1,
            goods: this.data.goods
        })
        this.calTotalPrice()
    },

    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数

    },
    //下订单
    payOrder() {
        var that = this;
        var selectShopArr = []
        if (that.data.totalPrice <= 0) {
            wx.showModal({
                title: '请先添加并且选择了商品'
            })
            return
        }
        that.data.carArray.forEach((v, i) => {
            if (v.selectStatu) {
                selectShopArr[i] = v
            }
        })
        wx.setStorageSync("shopArr", selectShopArr)
        wx.navigateTo({
            url: `../queren_dd/queren_dd?shopArr=true`,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    },
    //计算总价
    calTotalPrice: function () {
        var carArray = this.data.carArray;
        var totalPrice = 0;
        var totalCount = 0;
        for (var i = 0; i < carArray.length; i++) {
            totalPrice += carArray[i].price * carArray[i].num;
            totalCount += carArray[i].num
        }
        this.setData({
            totalPrice: totalPrice,
            totalCount: totalCount,
        });
        if (totalCount == 0) {
            this.cartShow(true)
        }
        var payDesc = this.payDesc()
        this.setData({
            payDesc
        })
    },
    //差几元起送
    payDesc() {
        if (this.data.totalPrice === 0) {
            return `￥${this.data.minPrice}元起送`;
        } else if (this.data.totalPrice < this.data.minPrice) {
            let diff = this.data.minPrice - this.data.totalPrice;
            return '还差' + diff + '元起送';
        } else {
            return '去结算';
        }
    },
    //結算
    pay() {
        if (this.data.totalPrice < this.data.minPrice) {
            return;
        }
        // window.alert('支付' + this.totalPrice + '元');
        //确认支付逻辑
        var resultType = "success";
        wx.redirectTo({
            url: '../goods/pay/pay?resultType=' + resultType
        })
    },
    //彈起購物車
    toggleList: function () {
        if (!this.data.totalCount) {
            return;
        }
        this.setData({
            fold: !this.data.fold,
        })
        var fold = this.data.fold
        //console.log(this.data.fold);
        this.cartShow(fold)
    },
    cartShow: function (fold) {
        console.log(fold);
        if (fold == false) {
            this.setData({
                cartShow: 'block',
            })
        } else {
            this.setData({
                cartShow: 'none',
            })
        }
        console.log(this.data.cartShow);
    },
    tabChange: function (e) {
        var showtype = e.target.dataset.type;
        this.setData({
            status: showtype,
        });
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.setData({
            payDesc: this.payDesc()
        });
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
})
