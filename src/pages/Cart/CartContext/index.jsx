import { createContext } from "react";
const CartContext = createContext();
const CartProvider = (({ children }) => {
    const [cart, setCart] = useState([]);
    // thêm sp 
    const addProduct = (product, quantity) => {
        const newItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: quantity,
            image: product.image

        }
        setCart((prev) => {
            let updatedCart = [...prev];
            if (updatedCart === 0) {
                updatedCart.push(newItem);
            } else {
                let itemExits = false;
                updatedCart.forEach((item) => {
                    if (item.id === newItem.id) {
                        item.quantity += quantity;
                        itemExits = true;
                    }
                    if (!itemExists) {
                        updatedCart.push(newItem);
                    }
                });
            }
            return updatedCart;
        })
    };
    return (
        <CartContext.Provider value={{ cart, addProduct }}>
            {children}
        </CartContext.Provider>)
    

}

)
export { CartContext, CartProvider };