import { useCatAPI } from "./hooks/useCatAPI";
import { ProductCard } from "./Components/ProductCard/ProductCard";
import { useCart } from "./hooks/useCart";

function App() {
    const catResults = useCatAPI();
    const cart = useCart();

    const handleBuy = (item) => {
        cart.addToCart(item);
        // cart.addToCart(item.id);
        alert(`${JSON.stringify(item)} added to basket`);
    };

    const catItems = (catResults || []).map((result, index) => (
        <ProductCard
            key={index}
            {...result}
            onBuy={handleBuy}
        />
    ));

    console.log(cart.items);

    
    return (
        <div className="App">
            <ul>
                {catItems}
                {catItems}
            </ul>        
        </div>
    );
}

export default App;
