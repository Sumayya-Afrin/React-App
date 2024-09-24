// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

function Form() {

    const [name , setName]= useState({firstName:'',lastName:''})

    function submission(e)
    {
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>
            <h3>{name.firstName}-{name.lastName}</h3>
        <label htmlFor="">FirstName:</label>
        <input onChange={(e)=> setName({...name,firstName:e.target.value})} type="text" value={name.firstName}/>
        <label htmlFor="">LastName:</label>
        <input onChange={(e)=> setName({...name,lastName:e.target.value})} type="text" value={name.lastName}/>
       <button onClick={(e)=> submission(e)}>Submit</button>
       
    </div>
  )
}

export default Form