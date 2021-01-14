import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import city from '@/components/city'
import MyHouse from '@/components/MyHouse'
import index from '@/components/index'
import favorHouse from '@/components/favorHouse'
import favorCommunity from '@/components/favorCommunity'
import myAgent from '@/components/myAgent'
import history from '@/components/history'
import delegation from '@/components/delegation'
import searchlist from '@/components/searchlist'
import myWenda from '@/components/myWenda'
import client from '@/components/client'
import VueAMap from "@/components/VueAMap";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/VueAMap',
      name: 'VueAMap',
      component: VueAMap
    },
    {
      path: '/MyHouse',
      name: 'MyHouse',
      component: MyHouse,
      children:[
        {
          path:'/index',
          name:'index',
          component:index
        },
        {
          path:'/favorHouse',
          name:'favorHouse',
          component:favorHouse
        },
        {
          path:'/favorCommunity',
          name:'favorCommunity',
          component:favorCommunity
        },
        {
          path:'/myAgent',
          name:'myAgent',
          component:myAgent
        },
        {
          path:'/history',
          name:'history',
          component:history
        },
        {
          path:'/delegation',
          name:'delegation',
          component:delegation
        },
        {
          path:'/searchlist',
          name:'searchlist',
          component:searchlist
        },
        {
          path:'/myWenda',
          name:'myWenda',
          component:myWenda
        },
        {
          path:'/client',
          name:'client',
          component:client
        },
      ]
    }
  ]
})
