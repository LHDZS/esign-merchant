// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'lib-flexible'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import './assets/js/mobile-detect.min.js'
import '../theme/index.css'
import echarts from 'echarts'
import axios from 'axios'
import Router from 'vue-router'
import moment from "vue-moment"
import vueEsign from 'vue-esign'
Vue.use(vueEsign)
Vue.use(moment); //实例

import {
  auditTransform,
  invoiceTransform,
  payTransform,
  tradeTransform,
  colorTransform,
  timeTransform
} from './filters/textTransform.js';

Vue.filter('audit', auditTransform);
Vue.filter('invoice', invoiceTransform);
Vue.filter('pay', payTransform);
Vue.filter('trade', tradeTransform);
Vue.filter('time', timeTransform);
Vue.filter('color', colorTransform);

import VueDraggableResizable from 'vue-draggable-resizable'

// 可选择导入默认样式
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts
//全局修改默认配置
ElementUI.Dialog.props.closeOnClickModal.default=false;
console.info(ElementUI.Dialog);
import {
  message
} from './util/resetMessage';

Vue.use(ElementUI)
Vue.prototype.$message = message;

Vue.config.productionTip = false

const whiteList = ['/login','/register','/usageseal'] // 免登录白名单

router.beforeEach((to, from, next) => {
  //console.log(to,from);
  if (to.name == 'Home' && to.query.taskId) {
    console.log('储存taskid')
    // localStorage.setItem('taskId', to.query.taskId)
    sessionStorage.setItem('taskId', to.query.taskId)
  }
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (sessionStorage.getItem('esignmerchantsid')) {
      next()
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        return next({
          path: '/login'
        })
      }
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
