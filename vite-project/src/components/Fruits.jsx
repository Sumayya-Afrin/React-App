// eslint-disable-next-line no-unused-vars
import React from 'react'
import Fruit  from './Fruit'

function Fruits() {
    const Fruits = [{
        name:'Apple',
        quantity: '3',
        price : '100'

    },
    {
        name:'Banana',
        quantity: '4',
        price : '90'

    },
    {
        name:'orange',
        quantity: '5',
        price : '200'

    }]
  return (
    // eslint-disable-next-line react/jsx-key
    <ul>{Fruits.map((fruit) =>(<Fruit name={fruit.name} quantity={fruit.quantity} price={fruit.price}></Fruit>))}</ul>

  )
}

export default Fruits