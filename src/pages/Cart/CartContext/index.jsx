import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [voucherValue, setVoucherValue] = useState(0); // Giảm giá

  // Tính toán tổng và lưu vào localStorage
  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0,
    );

    const discountedTotal =
      Math.round(calculatedTotal * (1 - voucherValue) * 10) / 10;
    setTotal(discountedTotal);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart, voucherValue]);

  // Thêm sản phẩm vào giỏ hàng
  const addProduct = (product, quantity) => {
    setCart((prev) => {
      const itemExisted = prev.find((item) => item.id === product.id);
      if (itemExisted) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeProduct = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, total, setVoucherValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
