
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/api', component: () => import('pages/Api.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') }
    ]
  }
]

// Always leave this as last one ---
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
