/*
 * All rights Reserved, Designed By www.lawyee.com
 * @Title:        index.js
 * @author:       陈沈明
 * @date:         2019/03/25
 * @version       1.0
 * @Description:  律所详情页面
 * @verdescript   版本号 修改时间  修改人 修改的概要说明
 * @Copyright:    2019 www.lawyee.com Inc. All rights reserved.
 * 注意：本内容仅限于北京法意科技有限公司内部传阅，禁止外泄以及用于其他的商业目
 */

const util = require('../../utils/util.js')

Page({
  data: {
    // 轮播图图片数据
    banners: [ 
      "/images/banner/banner1.jpg",
      "/images/banner/banner2.jpg",
      "/images/banner/banner3.jpg",
      "/images/banner/banner4.jpg"
    ],
    // 列表数据
    list: [ 
      {
        "image": "https://pic4.zhimg.com/v2-eb417877dc3ed82a18d3ecab4420b673.jpg",
        "title": "古代的人真的和现在流传的古人画像长得差不多吗？"
      },
      {
        "image": "https://pic4.zhimg.com/v2-9ed31149a9cc68792cfac1065f51a9b3.jpg",
        "title": "香港八卦杂志，一部全民吃瓜实录"
      },
      {
        "image": "https://pic1.zhimg.com/v2-f7c18765efe6fdd50a5a7c41c667b114.jpg",
        "title": "游戏对战平台为什么逐渐消亡了？"
      },
      {
        "image": "https://pic4.zhimg.com/v2-48924e39b43a6888e743b9862d7abdc7.jpg",
        "title": "想象一个瞬间，一个人全身的 DNA 突然全部断裂……"
      },
      {
        "image": "https://pic1.zhimg.com/v2-35c5c5693f2c5b2626dd403cc58782b4.jpg",
        "title": "乱七八糟的 Wi-Fi 背后，是隐藏在你身边的探针盒子"
      },
      {
        "image": "https://pic2.zhimg.com/v2-ce23051ffc715a8e83f9883dfb192019.jpg",
        "title": "小事 · 人在什么时候最舒服"
      },
      {
        "title": "为什么数码宝贝越进化越像人？",
        "image": "https://pic1.zhimg.com/v2-63c4c51bd6aba2e28a0428d31d005938.jpg"
      },
      {
        "image": "https://pic1.zhimg.com/v2-b9f78c65933925dd74d4a38b0c41845c.jpg",
        "title": "游戏对战平台为什么逐渐消亡了？"
      },
      {
        "image": "https://pic3.zhimg.com/v2-a46d7fb35247596327e57c2dbe8172f6.jpg",
        "title": "想象一个瞬间，一个人全身的 DNA 突然全部断裂……"
      },
      {
        "image": "https://pic3.zhimg.com/v2-ccee8cac79c40ee36509368efed6126a.jpg",
        "title": "不卫生的辣条，对身体可能有哪些危害？"
      },
      {
        "image": "https://pic2.zhimg.com/v2-0089f1dd57a76b00ed261e51d6153eb9.jpg",
        "title": "乱七八糟的 Wi-Fi 背后，是隐藏在你身边的探针盒子"
      },
      {
        "image": "https://pic3.zhimg.com/v2-34cd996aa277d6b2c4222d76c41914d2.jpg",
        "title": "瞎扯 · 如何正确地吐槽"
      }
    ]
  },

  /**
   * 页面首次加载
   */
  onLoad() {
    let dateString = util.formatTime(new Date());
    console.log(dateString);
  },

  /**
   * 监听列表点击
   */
  cellClick(e) {
    // 新闻标题
    let title = e.currentTarget.dataset.title;
    
    wx.showToast({
      title: title,
      icon: 'none'
    })
  }

})