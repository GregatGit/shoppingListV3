import React from 'react'
import FlatButtonSimple from '../Button/FlatButton'

const Lists = ({lists, addList}) => {
  const data = lists.map((name, index) => {
    return (
      <div key={index}>
        <FlatButtonSimple function={addList} name={name} />
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
