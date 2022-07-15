import {Button, CardWrapper, CardTextWrapper, ImgWrapper} from "./productCard.styles";

export const ProductCard = (props) => {
    return (

        <CardWrapper>
            <ImgWrapper>
            <img src={props.url} alt={props.id}/>
            </ImgWrapper>
                <div className='card'>
                    <CardTextWrapper>
                        <strong>Name: {props.name}<br/></strong>
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