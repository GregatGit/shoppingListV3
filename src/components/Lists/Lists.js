import React from 'react'

const Lists = ({lists, addList}) => {
  console.log('addlist', addList)
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
