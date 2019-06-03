import Home from '@/views/Home'
export default [
  {
    path: '/',
    name:'home',
    alias:'/home_page', //别名
    component: Home,
    props:route => ({ //函数传参
      food:route.query.food
    }),
    beforeEnter: (to, from, next) => {  //路由内守卫
      // if(from.name === 'about') alert('from about page')
      // else alert('this page is not from about page')
      next()
    }
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