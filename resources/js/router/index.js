import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = createRouter()


export default router

/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function createRouter () {
  const router = new Router({
    mode: 'history',
    routes
  })

  return router
}