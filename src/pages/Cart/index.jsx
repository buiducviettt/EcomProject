import { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './cart.module.scss';

const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculatedTotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    const roundedTotal = Math.round(calculatedTotal * 10) / 10;
    setTotal(roundedTotal);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <DefaultLayout>
        <div className="container">
          <h1>Your cart is empty</h1>
        </div>
      </DefaultLayout>
    );
  }
  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          <div className="col col-md-7">
            <h1>Your Cart</h1>
            <div className={styles.cartList}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.cartImage}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      Quantity: <span>{item.quantity}</span>
                    </p>
                    <p>
                      Price: <span>${item.price}</span>
                    </p>
                    <button onClick={() => removeProduct(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col col-md-5">
            <h1>Order Summary</h1>
            <table className={styles.tableInfo}>
              <tr>
                <div className={styles.tableRow}>
                  <th>Subtotal</th>
                  <td>{total}</td>
                </div>
              </tr>
              <tr>
                <div className={styles.tableRow}>
                  <th>Total</th>
                  <td>{total}</td>
                </div>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
