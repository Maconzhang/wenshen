var plugin = requirePlugin("myPlugin")
const app = getApp()
Page({
  onLoad: function() {
    plugin.getData()
    wx.showLoading({ title: '拼命加载中...' })
    this.setData({ IndexData: app.data.allData })
    wx.hideLoading()
  },
  data: {
    list: {
      height: 500,
      images: [
        { url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522814546.jpg' },
        { url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.jpg' },
        { url: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg' }
      ]
    },
    IndexData: {}
  },
  getMore: function (e) {
    console.log('hello world', e.target.dataset.info)
    var para = JSON.stringify(e.target.dataset.info)
    wx.navigateTo({
      url: `../proDetail/proDetail?info=${para}`
    })
  }
})