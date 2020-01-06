import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './dist/css/mui.min.css'
import axios from 'axios'
// 引入axios
import VueAxios from 'vue-axios'
import VuePreview from 'vue-preview'
//安装图片预览插件
Vue.use(VuePreview)
// 引入日期事件过滤的js文件
import moment from 'moment'
Vue.use(VueAxios, axios)
Vue.use(Mint)
// 日期时间的过滤方法
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
axios
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
