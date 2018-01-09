import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import { Swipe,SwipeItem } from 'mint-ui'
import '../static/css/iconfont.css'
import '../static/css/news_qa.auto.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
