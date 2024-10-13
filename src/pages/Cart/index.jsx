import { useContext } from 'react';
import { CartContext } from './CartContext';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './cart.module.scss';

const Cart = () => {
  const { cart, removeProduct } = useContext(CartContext);

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
        <h1>Your Cart</h1>
        <div className="row">
          <div className="col col-md-6">
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
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
