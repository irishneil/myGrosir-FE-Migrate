const authRoutes = [
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/authentication/Login.vue'),
        meta: {
          layout: 'full',
        },
      },
    ],
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/authentication/PasswordReset.vue'),
    meta: {
      layout: 'full',
    },
  },
]

export default authRoutes
