import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: () => import('../views/admin/MenuView.vue'),
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('../views/admin/RoleView.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/admin/UserView.vue'),
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('../views/admin/InfoView.vue'),
      },
      {
        path: 'more',
        name: 'more',
        component: () => import('../views/admin/MoreView.vue'),
        children:[
          {
            path:'nine',
            name:'nine',
            component: () => import('../views/admin/MineView.vue'),
          },
          {
            path:'six',
            name:'six',
            component: () => import('../views/admin/SixView.vue'),
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
