import React from 'react'
import {Link} from 'react-router-dom'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        111,
        222,
        333,
        444
      ]
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.listData.map((list, index) => {
            return <Link key={index} to={`/detail/${list}`}><li>{list}</li></Link>
          })}
        </ul>
      </div>
    )
  }
}