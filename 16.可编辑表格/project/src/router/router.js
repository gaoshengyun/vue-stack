import Home from '@/views/Home'
import Layout from '../views/layout.vue'
import Table from '../views/table.vue'
export default [
  {
    path: '/',
    name:'home',
    // alias:'/home_page', //别名
    component: Layout,
    children:[
      {
        path:'home',
        component:Home
      },
      {
        path:'table',
        component:Table
      }
    ]
    // props:route => ({ //函数传参
    //   food:route.query.food
    // }),
    // beforeEnter: (to, from, next) => {  //路由内守卫
    //   // if(from.name === 'about') alert('from about page')
    //   // else alert('this page is not from about page')
    //   next()
    // }
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name:'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props:{ //对像传值
      food:'banna'
    },
    meta:{ // 路由元信息
      title:'about'
    }
  },

  //动态路由
  {
    path:'/argu/:name',
    name:'argu',
    component: () => import('@/views/argu.vue'),
    props:true  //动态路由传参
  },
  {
    path:'/count-to',
    name:'count_to',
    component: () => import('@/views/count-to.vue')
  },
  {
    path:'/render-page',
    name:'render_page',
    component: () => import('@/views/render-page.vue')
  },
  {
    path:'/menu-page',
    name:'menu_page',
    component: () => import('@/views/menu-page.vue')
  },
  {
    path:'/split-pane',
    name:'split_pane',
    component: () => import('@/views/split-pane.vue')
  },

  //嵌套路由
  {
    path:'/parent',
    name:'parent',
    component: () => import('../views/parent.vue'),
    children:[
      {
        path:'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  //命名视图
  {
    path:'/name_view',
    components:{
      default:() => import('@/views/child.vue'),
      email:() => import('@/views/email.vue'),
      tel:() => import('@/views/tel.vue')
    }
  },
  //重定向
  {
    path:'/main',
    redirect:to=>{
      return {
        name:'home'
      }
    }
  },
  {
    path:'/store',
    component:() => import('../views/store.vue')
  },
  {
    path:'*',
    component:() => import('../views/404.vue')
  }
]