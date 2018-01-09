import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'
import Theme from '../pages/Theme.vue'
import Article from '../pages/Article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/theme',
      name: 'Theme',
      component: Theme
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
