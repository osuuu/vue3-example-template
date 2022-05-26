
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/account/login.vue'),
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    meta: {
      title: '系统维护中'
    },
    component: () => import('@/views/result/maintenance/index.vue')
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '500 Internal Server Error'
    },
    component: () => import('@/views/result/500/index.vue')
  },
  {
    path: '/:error*',
    name: '404',
    meta: {
      title: '404 Not Found'
    },
    component: () => import('@/views/result/404/index.vue')
  },
];
