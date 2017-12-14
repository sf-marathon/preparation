import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/components/Order'
import Info from '@/components/Info'
import MainToolbar from '@/components/MainToolbar'
import SubToolbar from '@/components/SubToolbar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Order',
      components: {
        'content': Order,
        'toolbar': MainToolbar
      }
    },
    {
      path: '/sender',
      name: 'Sender',
      components: {
        'content': Info,
        'toolbar': SubToolbar
      }
    },
    {
      path: '/reciver',
      name: 'Reciver',
      components: {
        'content': Info,
        'toolbar': SubToolbar
      }
    }
  ]
})
