import { HASH_ROUTE_CONFIG } from './constants'
import AsyncPageWrapper from './components/common/AsyncPageWrapper'

const pageRoute = [
  {
    path: HASH_ROUTE_CONFIG.INDEX,
    component: AsyncPageWrapper(() => {
      return import(
        /* webpackChunkName: 'home-page' */
        'containers/Home'
      ).then(module => module.default)
    }),
  },
]

export default pageRoute