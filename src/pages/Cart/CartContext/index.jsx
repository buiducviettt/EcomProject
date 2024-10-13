
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
=======
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
>>>>>>> 66e67fe5c574e6ac1bdccc8057525bdae1a20b21
