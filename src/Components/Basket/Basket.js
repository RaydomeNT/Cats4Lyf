import React, {useState} from 'react';
import Items from './Items';

const Basket =({ basketItems, addCat, subCat }) => {

    // set Basket button to show content on onclick
    const [modalShow, setModalShow] = useState (false)
    const modalOn = () => {
        setModalShow(!modalShow)
        // setModalShow(click => !click)
        // setModalShow(true);
    };

    

    // Calculate the total price
    const totalPrice = basketItems.reduce((a, current) => a + current.quantity * current.price, 0);

    return (
    
    <div>
        <button onClick = {modalOn}>🛒</button>

        {modalShow ? <div>
       
            <h2>Your Basket</h2>
            <Items basketItems = {basketItems}
            subCat = {subCat}
            addCat = {addCat}/>

            {/* If Basket is empty display a message */}
            {basketItems.length === 0 && (
            <div>
            <p>Your basket is empty</p>
            </div>
            )}

            {/* If Basket length is not equal to 0 show total and checkout */}
            {basketItems.length !== 0 && (
            <div>

            {/* Show total price */}
            <strong>Total Price</strong>
            <strong>£{totalPrice}</strong>

            {/* Fake checkout */}
            <button onClick={() => alert('Checkout!')}>Checkout</button>
            
            </div>
            )}

        </div> :null}
    </div>
  );
}

export default Basket