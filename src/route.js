import { HASH_ROUTE_CONFIG } from './constants'
import AsyncPageWrapper from './components/common/AsyncPageWrapper'

const pageRoute = [
  {
    path: HASH_ROUTE_CONFIG.INDEX,
    component: AsyncPageWrapper(() => {
      return import(
        /* webpackChunkName: 'home-page' */
        './containers/Home'
      ).then(module => module.default)
    }),
    exact: true,
  },
  {
    path: HASH_ROUTE_CONFIG.LIST,
    component: AsyncPageWrapper(() => {
      return import(
        /* webpackChunkName: 'list-page' */
        './containers/List'
      ).then(module => module.default)
    }),
  },
  {
    path: HASH_ROUTE_CONFIG.DETAIL,
    component: AsyncPageWrapper(() => {
      return import(
        /* webpackChunkName: 'list-page' */
        './containers/Detail'
      ).then(module => module.default)
    }),
  },
]

export default pageRoute