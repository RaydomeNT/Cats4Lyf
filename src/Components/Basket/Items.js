import React from 'react'

const Items = ({ basketItems, addCat, subCat }) => {
  return (
    <div>
        {basketItems.map((product) => (
            <div key={product.id}>
            {product.name}
            <button onClick={() => subCat(product)}>-</button>
            <button onClick={() => addCat(product)}>+</button>
            {product.quantity} x £{product.price}
            </div>
        ))}
    </div>
  )
}

export default Items

