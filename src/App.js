import { useEffect, useState } from "react";
import './App.css';
import faker from "faker";

const App  = () =>  { 
  const [item, setItem] = useState("");

  const getData = async () => {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    // const faker = require('faker');
    // const randomName = faker.name,firsName();
    setItem(data[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <body>
      <h1>Which cat will you take home?</h1>
      <img src={item.url} alt='cat' height='600'/>
      {/* {item ? (
        item.breeds.map((breeds, index) => {
          return <Breeds breeds={breeds} />;
        }) */}
       {/* :  */}
        {/* <p>loading...</p> */}
      
      <p>Name: {faker.name.firstName()} '{faker.lorem.word()}' {faker.name.lastName()}</p>
      <p>Breed: {faker.animal.cat()}</p>
      <p>Job: {faker.name.jobType()}</p>
      <p>Description: {faker.commerce.productDescription()}</p>
      <button onClick={getData}>Add to cart: £{faker.commerce.price()}</button>
    </body>
  );
};

// const Breeds = ({ breeds }) => {
//   return (
//       <p>{breeds}</p>
//   );
// };

export default App;