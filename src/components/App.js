import React from 'react'
import Heading1 from '../components/Heading1/Heading1'
import Lists from './Lists/Lists'
import items from '../data/items.json'
console.log(items)
const listNames = items.map(list => list.list)
console.log(listNames)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shoppingListReady: false,
      lists: []
    }
  }
  addList = (list) => {
    console.log('addList', list)
  }
  render () {
    return (
      <div>
        <Heading1 />
        <Lists 
          addList={() => this.addList() } 
          lists={listNames}
        />
      </div>
    )
  }
}

export default App
