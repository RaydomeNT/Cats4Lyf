import {
    Button,
    CardWrapper,
    CardTextWrapper,
  } from "./ProductCard.styles";

export const ProductCard = (props) => {
    return (

        <CardWrapper>
            <img src={props.url} alt={props.id}/> 
                <div className='card'>
                    <CardTextWrapper>
                        Name: {props.name}<br/>
                        Age: {props.age}<b/>
                        Breed: {props.breed}<b/>
                        Job: {props.job}<b/>
                        Description: {props.description}<b/>
                        Cost: £{props.price}
                    </CardTextWrapper>
                      <Button onClick={() => props.addCat(props)}>Add To Cart</Button>
            </div>
        </CardWrapper>
    );
};