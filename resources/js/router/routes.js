function PageComponent(name) {
  return {
    render: h => h('h3', `Hello from the ${name} page`)
  };
}

export default [
  { path: '/', component: PageComponent('Home'), name: 'home' },
  { path: '/about', component: PageComponent('About'), name: 'about' },
  { path: '/contact', component: PageComponent('Contact'), name: 'contact' }
]