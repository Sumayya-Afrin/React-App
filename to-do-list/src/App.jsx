
import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'




function App() {
  const [inputval , setInput]=useState('')
  const [todo , setToDo]=useState([])
  const [check , setCheckBox]=useState('false')


  function checkBox()
  {

    setCheckBox(!check)

  }

  function addInput(e)
  {
     
     setInput(e.target.value);
  }

  function addToDo()
  {
    if(inputval!='')
    {
      setToDo((prev)=>[...prev,inputval])
    }
   
    setInput('')
    
  }

  function deleteToDo(todoIndex)
  {
    setToDo((prevTodos)=>prevTodos.filter((preTodo , preIndex)=>
    {
      return preIndex!=todoIndex;
    }))
  }

  console.log(todo)


  return (
    <>
    <h1>To Do List 📝</h1>

 <InputContainer inputval={inputval} addInput={addInput} addToDo={addToDo}></InputContainer>

  <TodoContainer todo={todo} deleteToDo={deleteToDo} check={check}></TodoContainer>
     
    </>
  )
}

export default App
