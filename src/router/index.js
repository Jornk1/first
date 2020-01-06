import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Search from '../components/Search'
import Sz from '../components/Sz'
import Xx from '../components/Xx'
import A1 from '../components/Home/A1'
import A2 from '../components/Home/A2'
import Zx from '../components/Home/Zx'
import A3 from '../components/Home/A3'
import A4 from '../components/Goodslist/A4'
import A5 from '../components/Home/A5'
import GoodsInfo from '../components/Goodslist/GoodsInfo'
import GoodsDesc from '../components/Goodslist/GoodsDesc'
import PhotoInfo from '../components/Home/PhotoInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      component: Search
    },
    {
      path: '/xx',
      component: Xx
    },
    {
      path: '/sz',
      component: Sz
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/Home'

    },
    {
      path: '/home/a1',
      component: A1

    },
    {
      path: '/home/a2',
      component: A2

    },
    {
      path: '/home/a3/:id',
      component: A3
    },
    {
      path: '/home/a4',
      component: A4
    },
    {
      path: '/home/a5',
      component: A5
    },
    {
      path: '/home/zx',
      component: Zx
    },
    {
      path: '/home/goodsinfo/:id',
      component: GoodsInfo,
      name: 'goodsinfo'
    },
    {
      path: '/home/goodsdesc/:id',
      component: GoodsDesc,
      name: 'goodsdesc'
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    }
  ],
  linkActiveClass: 'mui-active'
})
