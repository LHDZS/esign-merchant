import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/pages/login/login'
import Register from '@/pages/register/register'
import Home from '@/pages/pc/home/home'

// 企业认证
import enterprise from '@/pages/pc/enterprisecertification/enterprise'//创建企业名称
import enterprise2 from '@/pages/pc/enterprisecertification/enterprise2' //企业授权
import yiyuanRen from '@/pages/pc/enterprisecertification/yiyuanRen'//个人/企业 意愿认证
import authentication from '@/pages/pc/enterprisecertification/authentication' //企业四要素认证流程指引
import enterpriseKai from '@/pages/pc/enterprisecertification/enterpriseKai' //银行卡认证开始
import enterpriseYin from '@/pages/pc/enterprisecertification/enterpriseYin' //银行卡认证
import enterpriseWan from '@/pages/pc/enterprisecertification/enterpriseWan' //银行卡认证完成
import corporatePayment from '@/pages/pc/enterprisecertification/corporatePayment' //对公打款

// 个人认证
import personal from '@/pages/pc/personalauthentication/personal' //银行卡认证
import personal2 from '@/pages/pc/personalauthentication/personal2'//认证完成
import personalShou from '@/pages/pc/personalauthentication/personalShou'//用户授权

//合同管理
import contractManagement from '@/pages/pc/contractManagement/contractManagement' 
//审批管理
import shenpiManagement from '@/pages/pc/shenpiManagement/shenpiManagement' 
//直接发起
import Sign from '@/pages/pc/Sign/sign'
//用章审批
import Usageseal from '@/pages/Usageseal/usageseal'
//企业控制台
import enterpriseConsole from '@/pages/pc/enterpriseConsole/enterpriseConsole'
//签约页面
import nestedContract from '@/pages/nestedContract/nestedContract' 
//合同之文本为空
import emptyvuedraggable from '@/pages/pc/emptyVueDraggable/emptyvuedraggable' 

// 账户
import account from '@/pages/pc/account/account'
// 订单
import order from '@/pages/pc/order/order'
// 商户
import merchants from '@/pages/pc/merchants/merchants'

//h5 个人
import h5PersonalYiyuan from '@/pages/h5/personal/h5PersonalYiyuan'//个人 意愿认证
import h5personalShou from '@/pages/h5/personal/h5personalShou'//创建个人授权
import h5personalYin from '@/pages/h5/personal/h5personalYin'//创建个人银行卡认证
import h5personalWan from '@/pages/h5/personal/h5personalWan'//创建个人认证完成
//h5 盖章
import Seal from '@/pages/h5/Seal'

//h5 企业
import h5enterprise from '@/pages/h5/enterprise/h5enterprise'//创建企业
import h5enterprise2 from '@/pages/h5/enterprise/h5enterprise2'//创建企业授权
import h5enterpriseYin from '@/pages/h5/enterprise/h5enterpriseYin'//创建企业个人银行卡认证
import h5enterpriseWan from '@/pages/h5/enterprise/h5enterpriseWan'//创建企业个人认证完成
import h5authentication from '@/pages/h5/enterprise/h5authentication'//企业四要素认证流程指引
import h5EnterpriseYiyuan from '@/pages/h5/enterprise/h5EnterpriseYiyuan'//企业意愿认证
import h5corporatePayment from '@/pages/h5/enterprise/h5corporatePayment'//企业对公打款


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account',
      name: 'account',
      meta: {
        requireAuth: true, // 配置此条，进入页面前判断是否需要登陆
        navType: true
      },
      component: account
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        requireAuth: true, // 配置此条，进入页面前判断是否需要登陆
        navType: true
      },
      component: order
    },
    {
      path: '/merchants',
      name: 'merchants',
      meta: {
        rrequireAuth: true, // 配置此条，进入页面前判断是否需要登陆
        navType: true
      },
      component: merchants
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: enterprise
    },
    {
      path: '/h5enterprise',
      name: 'h5enterprise',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5enterprise
    }, 
    {
      path: '/h5corporatePayment',
      name: 'h5corporatePayment',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5corporatePayment
    }, 
    {
      path: '/h5personalYin',
      name: 'h5personalYin',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5personalYin
    }, 
    {
      path: '/h5personalWan',
      name: 'h5personalWan',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5personalWan
    }, 
    {
      path: '/h5enterprise2',
      name: 'h5enterprise2',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5enterprise2
    },  
    {
      path: '/h5enterpriseYin',
      name: 'h5enterpriseYin',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5enterpriseYin
    }, 
    {
      path: '/h5personalShou',
      name: 'h5personalShou',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5personalShou
    }, 
    {
      path: '/h5enterpriseWan',
      name: 'h5enterpriseWan',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5enterpriseWan
    }, 
    {
      path: '/h5authentication',
      name: 'h5authentication',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: h5authentication
    },
    {
      path: '/sign',
      name: 'Sign',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: Sign
    },
    {
      path: '/usageseal',
      name: 'Usageseal',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: Usageseal
    },
    {
      path: '/enterpriseConsole',
      name: 'enterpriseConsole',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: enterpriseConsole
    },
    {
      path: '/emptyvuedraggable',
      name: 'emptyvuedraggable',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: emptyvuedraggable
    },
    {
      path: '/contractManagement',
      name: 'contractManagement',
      meta: {
        requireAuth: true,
        navType: true
      },
      component: contractManagement
    },
    {
      path: '/shenpiManagement',
      name: 'shenpiManagement',
      meta: {
        requireAuth: true,
        navType: true
      },
      component: shenpiManagement
    },
    {
      path: '/enterprise2',
      name: 'enterprise2',
      meta: {
        title: '组织机构实名认证',
        requireAuth: true
      },
      component: enterprise2
    }, 
    {
      path: '/yiyuanRen',
      name: 'yiyuanRen',
      meta: {
        title: '办理人意愿认证',
        requireAuth: true
      },
      component: yiyuanRen
    }, 
    {
      path: '/h5PersonalYiyuan',
      name: 'h5PersonalYiyuan',
      meta: {
        requireAuth: true,
      },
      component: h5PersonalYiyuan
    },
    {
      path: '/h5EnterpriseYiyuan',
      name: 'h5EnterpriseYiyuan',
      meta: {
        requireAuth: true,
      },
      component: h5EnterpriseYiyuan
    },
     {
      path: '/Seal',
      name: 'Seal',
      meta: {
        requireAuth: true,
      },
      component: Seal
    },
    {
      path: '/personalShou',
      name: 'personalShou',
      meta: {
        title: '个人实名认证',
        requireAuth: true
      },
      component: personalShou
    },
    {
      path: '/enterpriseKai',
      name: 'enterpriseKai',
      meta: {
        title: '个人实名认证',
        requireAuth: true
      },
      component: enterpriseKai
    },
    {
      path: '/authentication',
      name: 'authentication',
      meta: {
        requireAuth: true
      },
      component: authentication
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        title: '办理人实名认证',
        requireAuth: true
      },
      component: personal
    },
    {
      path: '/enterpriseYin',
      name: 'enterpriseYin',
      meta: {
        title: '办理人实名认证',
        requireAuth: true
      },
      component: enterpriseYin
    },
    {
      path: '/corporatePayment',
      name: 'corporatePayment',
      meta: {
        requireAuth: true
      },
      component: corporatePayment
    },
    {
      path: '/personal2',
      name: 'personal2',
      meta: {
        requireAuth: true
      },
      component: personal2
    },
    {
      path: '/enterpriseWan',
      name: 'enterpriseWan',
      meta: {
        requireAuth: true
      },
      component: enterpriseWan
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        requireAuth: true
      },
      component: Login
    },
    {
      path: '/nestedContract',
      name: 'nestedContract',
      meta: {
        requireAuth: true
      },
      component: nestedContract
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        requireAuth: true
      },
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true,
        navType: true
      },
      component: Home
    }
  ]
})
