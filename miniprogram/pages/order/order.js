// 获取全局应用程序实例对象
const app = getApp()
Page({
  onLoad: function () {
    this.setData({ orderData: app.data.allData.orderPageInfo })
  },
  data: {
    orderData: {},
    date: null,
    index:0,
    formData: {
      username: '',
      phone: '',
      date: '',
      style: '',
      where: ''
    },
    orderArr:{}
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      orderArr: app.data.allData.orderPageInfo.attrs
    })
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
    // console.log(this.proData)

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

  },
  bindDateChange (e) {
    var form_Date = "formData.date"
    this.setData({
      [form_Date]: e.detail.value
    })
  },
  bindPickerStyle (e) {
    var form_style = "formData.style"
    var form_where = "formData.where"
    if (e.target.dataset.idx == "style") {
      this.setData({
        [form_style]: this.data.orderArr.style[e.detail.value]
      })
    } else {
      this.setData({
        [form_where]: this.data.orderArr.where[e.detail.value]
      })
    }
    var that = this
    setTimeout(function () {
      console.log(that.data.formData)
    },2000)
  },
  bindKeyInput (e) {
    var form_username = "formData.username"
    var form_phone = "formData.phone"
    if (e.target.dataset.name == "username") {
      this.setData({
        [form_username]: e.detail.value
      })
    } else {
      this.setData({
        [form_phone]: e.detail.value
      })
    }
  }
})