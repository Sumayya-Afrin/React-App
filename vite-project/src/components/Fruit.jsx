// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Fruit({price,name}) {
  return (
 <li>{price>150 ? <h3>{name}</h3> : <h3>no such fruit</h3>
 }</li>
  )
}

export default Fruit