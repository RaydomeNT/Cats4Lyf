import { useEffect, useState } from "react";
import './App.css';
import faker from "faker";
import Navbar from "./Components/Navbar/Navbar";

const App  = () =>  {
  const [item, setItem] = useState("");

  const getData = async () => {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    setItem(data[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id='layout'>
      <header>
        <Navbar />
      </header>
        <main>
          <img src={item.url} alt='cat' height='200'/>         
          <p>Name: {faker.name.firstName()} '{faker.lorem.word()}' {faker.name.lastName()}</p>
          <p>Age: {faker.datatype.number(18)}</p>
          <p>Breed: {faker.animal.cat()}</p>
          <p>Job: {faker.name.jobType()}</p>
          <p>Description: {faker.commerce.productDescription()}</p>
          <button onClick={getData}>Add to cart: £{faker.commerce.price()}</button>
          {/* <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button> */}
        </main>
    </div>
  );
};
    
export default App;