import React from "react"
import ReactDom from "react-dom"
import store from './store'
import {Provider} from 'react-redux'
import {Route, Switch, HashRouter} from 'react-router-dom'
import Header from './components/Header'
import Home from './containers/Home'
import Detail from './containers/Detail'

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail' component={Detail} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
)