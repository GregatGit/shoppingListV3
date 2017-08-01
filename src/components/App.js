import React from 'react'
import Heading1 from '../components/Heading1/Heading1'
import Lists from './Lists/Lists'
import items from '../data/items.json'
import FinalList from './FinalList/FinalList'

const listNames = items.map(list => list.list)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shoppingListReady: false,
      lists: []
    }
  }
  addList = (e) => {
    console.log('addList', e.target.innerText)
    const tempArrList = this.state.lists
    let newList = e.target.innerText
    if (tempArrList.indexOf(newList) === -1){
      tempArrList.push(newList)
      this.setState({lists: tempArrList})
    }
  }
  render () {
    
    return (
      <div>
        <Heading1 />
        {!this.state.shoppingListReady ? (
          <Lists 
          addList={this.addList} 
          lists={listNames}
        />
        ) : (<FinalList lists={this.state.lists} />)}
      </div>
    )
  }
}

export default App
