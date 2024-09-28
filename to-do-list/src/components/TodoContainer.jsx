// eslint-disable-next-line no-unused-vars
import React from 'react'
import Todo from './Todo'

// eslint-disable-next-line react/prop-types
function TodoContainer({todo , deleteToDo }) {
  return (
 
    <div className="container" >
{todo.map((a , index)=> {
    return (
        // eslint-disable-next-line react/jsx-key
        <Todo a={a} index={index}deleteToDo={deleteToDo}></Todo>
    )
})}

</div>

  )
}

export default TodoContainer