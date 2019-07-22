import React from 'react'
import { HASH_ROUTE_CONFIG } from '../../constants/index'

export default class Home extends React.Component {

  goList = () => {
    this.props.history.push(HASH_ROUTE_CONFIG.LIST)
  }

  render() {
    return (
      <div>
        <div>Home Page</div>
        <div onClick={this.goList}>go List</div>
      </div>
    )
  }
}