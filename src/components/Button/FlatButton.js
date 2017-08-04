import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const FlatButtonSimple = (props) => (
  <div>
    <FlatButton onClick={props.function} label={props.name} primary={true} />
  </div>
)

export default FlatButtonSimple
