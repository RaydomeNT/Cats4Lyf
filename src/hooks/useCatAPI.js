import { useState, useEffect } from "react";
import * as faker from "faker"

export const useCatAPI = () => {
    const [ results, setResults ] = useState([]);

    const fetchData = async () => {
        const endpoint = "https://api.thecatapi.com/v1/images/search?limit=10";

        const handleResults = data => {
            const parsedResults = (data || []).map((results) => {
                const name = `${faker.name.firstName()} '${faker.lorem.word()}' ${faker.name.lastName()}`;
                const age = faker.datatype.number(18);
                const breed = faker.animal.cat();
                const job = faker.name.jobType();
                const description = faker.commerce.productDescription();
                const price = faker.commerce.price();
                return {
                    id: results.id,
                    url: results.url,
                    name,
                    age,
                    breed,
                    job,
                    description,
                    price,
                }
            })
            setResults([
                ...parsedResults,
            ]);
        };

        const handleError = error => {
            alert(`error: ${error}`);
        };

        fetch(endpoint)
            .then(response => response.clone().json())
            .then(handleResults)
            .catch(handleError);    
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData(); }, []);

    return [...results];
};
 