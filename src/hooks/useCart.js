import { useState } from "react";

export const useCart = () => {
    const [items, setItems] = useState([]);
    const addToCart = (newItems) => {
        setItems([
            ...items,
            newItems,
        ]);
    };
    return { items, addToCart };
};
