import React from 'react'
import FlatButtonSimple from '../Button/FlatButton'

const Lists = (props) => {
  const data = props.lists.map((name, index) => {
    return (
      <div key={index}>
        <FlatButtonSimple function={props.addList} name={name} />
      </div>
    )
  })
  return (
    <div>
      Lists
      {data}
    </div>
  )
}

export default Lists
