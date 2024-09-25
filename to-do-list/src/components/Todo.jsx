// eslint-disable-next-line no-unused-vars
import React from 'react'

function Todo({a}) {
  return (
    <>

<div className='action'>
      <p>{a}</p>
   

      <div className='action-button'>
        <input type="checkbox" />
        <button>Delete</button>
      </div>
      </div>

    </>
  )
}

export default Todo