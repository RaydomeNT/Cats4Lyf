import React from 'react'
import {YourSelection, QuantityWrapper, SectionWrapper,CatName} from "./Basket.styles";

const Items = ({ basketItems, addCat, subCat }) => {
  return (
    <YourSelection>
        {basketItems.map((product) => (
          <SectionWrapper >
            <CatName key={product.id}>{product.name}</CatName>
            <QuantityWrapper>
              <button onClick={() => subCat(product)}>-</button>
              <button onClick={() => addCat(product)}>+</button>
              <p>
              {product.quantity} x £{product.price}
              </p>
            </QuantityWrapper>
             
            </SectionWrapper>
        ))}
    </YourSelection>
  )
}

export default Items
