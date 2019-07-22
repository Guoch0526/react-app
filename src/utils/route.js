import {Route} from 'react-router-dom'
import React from 'react'

export default (path, config) => Component => {
  return props => <Route path={path} {...config} render={routeProps => <Component {...routeProps} {...props} />} />
}