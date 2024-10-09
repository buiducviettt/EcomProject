/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

// Tạo context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addToCart = (product, quantity) => {
        setCartItems(prevItems => [...prevItems, { product, quantity }]);
        setCartQuantity(prev => prev + quantity);
    };

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook để sử dụng context
export const useCart = () => {
    return useContext(CartContext);
};
