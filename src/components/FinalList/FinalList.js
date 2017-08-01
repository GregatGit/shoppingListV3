import React from 'react'
import items from '../../data/items.json'

class FinalList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temp: []
    }
  }
  render () {
    console.log(this.props.lists)
    return (
      <div>
        I'm a list
      </div>
    )
  }
}

export default FinalList
