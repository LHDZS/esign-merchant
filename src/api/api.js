/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

/* 本地配置 */
var host = 'https://qianbiguo.gongsibao.com'

// var host = 'http://39.107.234.14:3602'
// 赵庆
// var host = 'http://192.168.201.136:3602'
// 孙总统
// var host = 'http://192.168.210.72:3602'

var config = {
  // 修改密码
  resetPassword: `${host}/web/uc/userCtl/resetPassword`,
  // 用户信息查询
  currentUser: `${host}/web/uc/userCtl/currentUser`,
  // 获取oss参数地址
  getOssConfig: `${host}/web/common/metaCtl/getOssConfig`,
  //注册
  register: `${host}/web/uc/userCtl/register`,
  //发送验证码
  sendMobileCode: `${host}/web/uc/userCtl/sendMobileCode`,
  //登录
  login: `${host}/web/uc/userCtl/login`,
  //个人
  fourFactorVerification: `${host}/web/uc/userCtl/fourFactorVerification`,
  //个人认证确定
  verificationOfPersonalIntention: `${host}/web/uc/userCtl/verificationOfPersonalIntention`,
  //个人认证信息
  info: `${host}/web/uc/userCtl/info`,
  //企业信息
  enterpriseCertification: `${host}/web/merchant/merchantauthCtl/enterpriseCertification`,
  //对公打款信息
  organizeQuery: `${host}/web/merchant/merchantauthCtl/organizeQuery`,
  //删除企业id
  delAuthMerchantById: `${host}/web/merchant/merchantauthCtl/delAuthMerchantById`,
  //创建企业名称
  isExistMerchantAuthByName: `${host}/web/merchant/merchantauthCtl/isExistMerchantAuthByName`,
  //企业名称下拉
  getMerchantBelongToUser: `${host}/web/merchant/merchantauthCtl/getMerchantBelongToUser`,
  //直接发起
  tobySigning: `${host}/web/business/businessCtl/tobySigning`,
  //任务抄送人企业下拉
  getMerchantAllByAuthStatus: `${host}/web/merchant/merchantauthCtl/getMerchantAllByAuthStatus`,
  //真实姓名下拉
  mailList: `${host}/web/merchant/merchantauthCtl/mailList`,
  //合同管理
  contractlisttouser: `${host}/web/business/businessCtl/contractlisttouser`,
  //个人中心
  personalCenter: `${host}/web/business/businessCtl/personalCenter`,
  //首页未认证已认证
  firmalCenter: `${host}/web/business/businessCtl/firmalCenter`,
  //首页未认证立即认证
  firmalCenterForAuthing: `${host}/web/business/businessCtl/firmalCenterForAuthing`,
  //我的印章
  queryPersonalSeal: `${host}/web/uc/userCtl/queryPersonalSeal`,
  // 登录获取手机号 参数接口
  findtotaskId: `${host}/web/business/businessCtl/findtotaskId`,
  // iframe 参数接口
  signtocontract: `${host}/web/business/businessCtl/signtocontract`,
  // 账户信息
  accountmanagement: `${host}/web/merchant/merchanttradeCtl/accountmanagement`,
  // 订单管理
  pageEorder: `${host}/web/order/orderCtl/pageEorder`,
  //查看 身份认证
  pageEorderAuthLog: `${host}/web/order/orderauthlogCtl/pageEorderAuthLog`,
  //查看 电子合同
  pageEorderSignLog: `${host}/web/order/ordersignlogCtl/pageEorderSignLog`,
  //商户信息
  merchantOfInfo: `${host}/web/merchant/merchantCtl/merchantOfInfo`,
  //订购产品下拉
  getMerchantLiveAllProducts: `${host}/web/order/orderCtl/getMerchantLiveAllProducts`,
  // 联系人字典
  esignUserAuthList: `${host}/web/uc/userCtl/esignUserAuthList`,
  //催签 拒签 撤回 删除
  signingoperation: `${host}/web/business/businessCtl/signingoperation`,
  //送电子合同
  bestowedOrderExist: `${host}/web/merchant/merchantauthCtl/bestowedOrderExist`,
  //忘记密码
  retrievePasswordForCheckUcname: `${host}/web/uc/userCtl/retrievePasswordForCheckUcname`,
  //忘记密码
  retrievePassword: `${host}/web/uc/userCtl/retrievePassword`,
  //创建企业名称
  queryMerchantAuthByEntName: `${host}/web/merchant/merchantauthCtl/queryMerchantAuthByEntName`,
  //赠送电子合同
  bestowedOrderDisplay: `${host}/web/uc/userCtl/bestowedOrderDisplay`,
  //删除电子合同弹框
  clearBestowedOrderDisplay: `${host}/web/uc/userCtl/clearBestowedOrderDisplay`,
  //待我审批
  contracttasksealList: `${host}/web/business/businessCtl/contracttasksealList`,
  //我已审批
  contracttasksealLists: `${host}/web/business/businessCtl/contracttasksealLists`,
  //批量通过
  applyforturn: `${host}/web/business/businessCtl/applyforturn`,
  // 添加成员
  saveMember: `${host}/web/uc/userCtl/saveMember`,
  // 更新成员
  updateMembersById: `${host}/web/uc/userCtl/updateMembersById`,
  // 成员列表
  queryMembersPage: `${host}/web/uc/userCtl/queryMembersPage`,
  // 删除成员
  removeMembersById: `${host}/web/uc/userCtl/removeMembersById`,
  // 用章审批
  callbackSigned: `${host}/web/business/businessCtl/callbackSigned`,
  // 合同跳转
  examineContract: `${host}/web/business/businessCtl/examineContract`,


}

module.exports = config
