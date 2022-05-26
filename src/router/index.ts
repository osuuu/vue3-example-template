import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import defaultRouter from './modules/default';

// 关于单层路由，meta 中设置 { single: true } 即可为单层路由，{ hidden: true } 即可在侧边栏隐藏该路由

// 存放动态路由
export const asyncRouterList: Array<RouteRecordRaw> = [

  {
    path: '/',
    redirect: {
      name: 'login'
    },
    component: () => import("@/views/layout/index.vue"),
    children: [{
      path: 'home',
      name: 'home',
      component: () => import("@/views/home/index.vue"),
      // meta: {
      //   title: '控制台',
      //   icon: 'iconfont icon-menu_kongzhitai',
      //   isShow: true
      // }
    },

    ]
  },

];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [...defaultRouter]


export const allRoutes = [...defaultRouterList, ...asyncRouterList];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allRoutes,
})

export default router
