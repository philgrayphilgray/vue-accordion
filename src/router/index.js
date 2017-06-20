import Vue from 'vue'
import Router from 'vue-router'
import Accord from '@/components/Accord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accord',
      component: Accord
    }
  ]
})
