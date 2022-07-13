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
      <h2>{faker.name.firstName}</h2>
      <img src={item.url} alt='cat' width='600'/>
      {item ? (
        item.breeds.map((breeds, index) => {
          return <Breeds breeds={breeds} />;
        })
      ) : (
        <p>loading...</p>
      )}
      <button onClick={getData}>Choose another</button>
    </body>
  );
};

const Breeds = ({ breeds }) => {
  return (
      <p>{breeds}</p>
  );
};

export default App;