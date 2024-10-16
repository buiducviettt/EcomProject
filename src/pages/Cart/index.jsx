import { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
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
                <div key={item.id} className={styles.cartItemWrapper}>
                  <div className={styles.cartItem}>
                    <div className={styles.cartImage}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                      <div className={styles.title}>
                        <h3>{item.title}</h3>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className={styles.trashIcon}
                          onClick={() => removeProduct(item.id)}
                        />
                      </div>
                      <p>
                        Quantity: <span>{item.quantity}</span>
                      </p>
                      <p>
                        Price: <span>${item.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="col col-md-5">
            <h1>Order Summary</h1>
            <div className={styles.tableWrapper}>
              <div className={styles.tableInfo}>
                <div className={styles.row}>
                  <span>Subtotal</span>
                  <span>{total}</span>
                </div>
                <div className={styles.row}>
                  <span>Total</span>
                  <span>{total}</span>
                </div>
                <Button actionName="Check out" className={styles.checkOut} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
