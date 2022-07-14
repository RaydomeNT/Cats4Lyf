export const ProductCard = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.id} height='200' />         
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Breed: {props.breed}</p>
            <p>Job: {props.job}</p>
            <p>Description: {props.description}</p>
            <p>Price: £{props.price}</p>
            <button onClick={() => props.addCat(props)}>Add To Cart</button>
            {/* <button onClick={() => props.addCat(props)}>Add to cart: £{props.price}</button> */}
        </li>
    );
};
