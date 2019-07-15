import React from "react"
import ReactDom from "react-dom"
import store from './store'
import {connect, Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import Header from './components/Header'

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)