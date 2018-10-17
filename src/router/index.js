import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Router from 'vue-router'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
