Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    picArr: {
      type: Object,
      value: {},
    }
  },
  data: {
    // picArr: {
    //   name: '传统',
    //   des: '新传统在其画风改变和创新极大，把传统刺青的精髓发挥的更为突出',
    //   images: [
    //     'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522814546.jpg',
    //     'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.jpg',
    //     'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522814546.jpg',
    //     'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.jpg',
    //     'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522814546.jpg',
    //     'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.jpg'
    //   ]
    // },
    index:0
  },
  methods: {
    clickOne: function (e) {
      this.setData({ index: e.currentTarget.dataset.idx })
    }
  }
  // bindChange: function (e) {
  //   const val = e.detail.value
  //   this.setData({
  //     year: this.data.years[val[0]],
  //     month: this.data.months[val[1]],
  //     day: this.data.days[val[2]]
  //   })
  // },
  // attached: function () {
  //   // 可以在这里发起网络请求获取插件的数据
  //   this.setData({
  //     list: [{
  //       name: '电视',
  //       price: 1000
  //     }, {
  //       name: '电脑',
  //       price: 4000
  //     }, {
  //       name: '手机',
  //       price: 3000
  //     }]
  //   })
  // },
})