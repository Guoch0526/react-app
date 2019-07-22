import React from "react"
import ReactDom from "react-dom"
import store from './store'
import {Provider} from 'react-redux'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import route from './route'
import Detail from './containers/Detail'

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        {route.map((page, key) => {
          return <Route key={key} exact={page.exact || false} path={page.path} component={page.component} />
        })}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)