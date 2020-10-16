import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza details...</h3>
  }

  return (
    <div >
      <h2>Order Placed!</h2>
      <p>Name: {details.name}</p>
      <p>Size: {details.size}</p>
      <p>Special Instructions: {details.instructions}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Pizza