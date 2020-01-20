// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import elementUI from 'element-ui'
import BMap from 'vue-baidu-map'

import router from './router'
import store from './store'
import htmlToPdf from '@/components/htmlToPdf'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(elementUI)
Vue.use(Vuex)
Vue.use(BMap, {
  ak: 'jo1ynPeGnkvyKoLtIM0Ldhh91tChqgKM'
})
Vue.use(htmlToPdf)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

