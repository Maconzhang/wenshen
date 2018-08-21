//轮播组件
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    attrs: {
      type: Object,
      value: {},
    }
  },
  data: {
    // list: {
    //   height: 480,
    //   images:[
    //     { url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522814546.jpg'},
    //     { url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.jpg'},
    //     { url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg'}
    //   ]
    // }
  },
  attached: function () {
    // 可以在这里发起网络请求获取插件的数据
    // this.setData({
    //   list: [{
    //     name: '电视',
    //     price: 1000
    //   }, {
    //     name: '电脑',
    //     price: 4000
    //   }, {
    //     name: '手机',
    //     price: 3000
    //   }]
    // })
  },
})