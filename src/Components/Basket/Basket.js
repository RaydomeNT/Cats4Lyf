import React, {useState} from 'react';
import Items from './Items';
import {BasketWrapper, ModalOff, BottomWrapper, ModalBackground} from "./Basket.styles";

const Basket =({ basketItems, addCat, subCat }) => {

    // set Basket button to show content on onclick
    const [modalShow, setModalShow] = useState (false)
    const modalOn = () => {
        setModalShow(!modalShow)
        // setModalShow(click => !click)
        // setModalShow(true);
    };

    // Set Basket button to hide content on onclick
    const modalOff = () => {setModalShow(false)};

    

    // Calculate the total price
    const totalPrice = basketItems.reduce((a, current) => a + current.quantity * current.price, 0);

    return (
    
    <div>
        <button onClick = {modalOn}>🛒</button>

        

        {modalShow ?<ModalBackground>
            <BasketWrapper>
       
            <ModalOff>
                <button onClick = {modalOff}>X</button>
            </ModalOff>
            <h2>Your Cat Basket</h2>
            <Items basketItems = {basketItems}
            subCat = {subCat}
            addCat = {addCat}/>

            {/* If Basket is empty display a message */}
            {basketItems.length === 0 && (
            <div>
            <p>You have no cats</p>
            </div>
            )}

            {/* If Basket length is not equal to 0 show total and checkout */}
            {basketItems.length !== 0 && (
            <BottomWrapper>

            {/* Show total price */}
            <hr></hr>
            <strong>Total Price:</strong>
            <br/>
            <strong>£{totalPrice}</strong>
            <hr></hr>

            {/* Fake checkout */}
            <button onClick={() => alert(`Purr-Fect! Your Checkout is Complete! Thank you for shopping at cats4life!`)}><strong>Checkout?</strong></button>
            
            </BottomWrapper>
            )}

    </BasketWrapper> 
    </ModalBackground>:null}
    
    </div>
  );
}

export default Basket