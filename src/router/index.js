import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Community from '@/pages/Community'
import News from '@/pages/News'
import My from '@/pages/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Community',
      name: 'Community',
      component: Community
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
