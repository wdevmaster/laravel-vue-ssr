function PageComponent(name) {
  return {
    render: h => h('h3', `Hello from the ${name} page`)
  };
}

import Welcome from '~/pages/welcome'
import Error404 from '~/pages/errors/404'

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/about', component: PageComponent('About'), name: 'about' },
  { path: '/contact', component: PageComponent('Contact'), name: 'contact' },

  { path: '*', component: Error404 }
] 