import React from 'react'
import {connect} from 'react-redux'
import './index.less'
import {addItem, reduceItem} from '../../redux/actions/addAction'

@connect(state => ({
  num: state.add.num
}))
export default class Header extends React.Component {

  addItem = () => {
    this.props.dispatch(addItem())
  }

  reduceItem = () => {
    this.props.dispatch(reduceItem())
  }

  render () {
    const {num} = this.props
    return (
      <div>
        <div className='header'>This is Header</div>
        <div>{num}</div>
        <div onClick={this.addItem}>add Item</div>
        <div onClick={this.reduceItem}>reduce Item</div>
      </div>
    )
  }
}