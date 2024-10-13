import { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  // thêm vào giỏ hàng
  const addProduct = (product, quantity) => {
    const newItem = { ...product, quantity };
    setCart((prev) => {
      let itemExisted = false;

      const updatedCart = prev.map((item) => {
        if (item.id === product.id) {
          itemExisted = true;
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      if (!itemExisted) {
        updatedCart.push(newItem);
      }

      return updatedCart;
    });
  };
  const removeProduct = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
