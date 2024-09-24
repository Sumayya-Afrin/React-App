import {useState} from 'react'

function Counter() {

    const [count , setcount] = useState(0);
    
    const [factor , setFactor] = useState(1);
    function IncrementCount()
    {
       setcount(count+factor);
    }

    function decrementCount()
    {
       setcount(count-factor);
    }

    function IncrementFactor()
    {
       setFactor(factor+1);
    }

    function decrementFactor()
    {
       setFactor(factor-1);
    }

  return (
    
    <div>
        <h3>Set the Factor:{factor}</h3>
        <button onClick={IncrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>
        
       <h3>Counter:{count}</h3> 
        <button onClick={IncrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>

        

    </div>
  )
}

export default Counter