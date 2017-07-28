import React from 'react'

const Lists = ({lists, addList}) => {
  const data = lists.map((name, index) => {
    return (
      <div key={index}>
        <button onClick={addList}>{name}</button>
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
