
import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'




function App() {
  const [inputval , setInput]=useState('')
  const [todo , setToDo]=useState([])

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

  console.log(todo)


  return (
    <>
    <h1>To Do List 📝</h1>

 <InputContainer inputval={inputval} addInput={addInput} addToDo={addToDo}></InputContainer>

  <TodoContainer todo={todo}></TodoContainer>
     
    </>
  )
}

export default App
