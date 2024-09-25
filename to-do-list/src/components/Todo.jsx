// eslint-disable-next-line no-unused-vars
import React from 'react'

function Todo({a , index , deleteToDo}) {
  return (
    <>

<div className='action'>
  <div className='todo-work'><p>{a}</p></div>
     
   

      <div className='action-button'>
        <input type="checkbox" />
        <button onClick={()=>deleteToDo(index)}>Delete</button>
      </div>
      </div>

    </>
  )
}

export default Todo