import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Community from '@/pages/community/Community'
import News from '@/pages/news/News'
import My from '@/pages/my/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',    
      redirect:'/Home'
    },
    {
      path: '/Home',
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
    }
  ]
})
