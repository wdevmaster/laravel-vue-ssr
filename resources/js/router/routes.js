function page (path) {
  return () => import(`~/pages/${path}.vue`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome') },

  { path: '*', component: page('errors/404') }
]