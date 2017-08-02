import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/create'

const style = {
  marginRight: 20
}

const myFloatingActionButton = (props) => (
  <FloatingActionButton style={style} onClick={props.function} >
    GO!
  </FloatingActionButton>
)

export default myFloatingActionButton
