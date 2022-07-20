import { env } from '@/util'
import viewsRoute from './views'
import modulesRoute from './module'

const setupAutoRouter = () => {
  if (env.VITE_APP_AUTOLOAD) {
    return viewsRoute
  } else {
    return modulesRoute
  }
}

export default setupAutoRouter()
