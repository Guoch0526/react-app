import React from 'react'
import { HASH_ROUTE_CONFIG } from '../../constants/index'

export default class Home extends React.Component {

  goDetail = () => {
    this.props.history.push(HASH_ROUTE_CONFIG.DETAIL)
  }

  render() {
    return (
      <div>
        <div>Home Page</div>
        <div onClick={this.goDetail}>go Detail</div>
      </div>
    )
  }
}