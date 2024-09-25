// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function InputContainer({inputval,addInput , addToDo}) {
  return (
    <div className='input-container'>

    <input type="text" value={inputval} onChange={addInput} />

    <button onClick={addToDo}>Add Task</button>

    </div>
  )
}

export default InputContainer