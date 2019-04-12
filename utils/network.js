/*
 * All rights Reserved, Designed By www.lawyee.com
 * @Title:        network.js
 * @author:       陈沈明
 * @date:         2019/02/20
 * @version       1.0
 * @Description:  请求工具类
 * @verdescript   版本号 修改时间  修改人 修改的概要说明
 * @Copyright:    2019 www.lawyee.com Inc. All rights reserved.
 * 注意：本内容仅限于北京法意科技有限公司内部传阅，禁止外泄以及用于其他的商业目
 */

/**  ------------------------首页相关接口----------------------------  **/

/**
 * 获取首页banners列表数据
 * 
 * @param {Object}   params           请求参数(包含以下参数)
 * @param {Function} success          请求成功回调
 * @param {Function} fail             请求失败回调
 * 
 */
function getBanners({ success, fail}) {
  wx.request({
    url: 'https://easy-mock.com/mock/5c30d23afe70182de6909285/example/banners',
    method: 'GET',
    header: 'application/json',
    success: res => {
      success(res.data.data);
    },
    fail: res => {
      fail(res)
    }
  })
}


/**  ------------------------------接口导出-----------------------------  **/
module.exports = {
  getBanners
}
