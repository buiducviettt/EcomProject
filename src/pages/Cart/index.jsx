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
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    alert('Tính năng đang build');
  };
  // addVoucher
  const [searchInput, setSearchInput] = useState('');
  const [addVoucher, setAddVoucher] = useState('');
  const handleClick = () => {
    if (searchInput.trim()) {
      setAddVoucher(searchInput);
      setMessage('Voucher đã được add thành công');
      setSearchInput('');
    } else {
      setAddVoucher('');
    }
  };
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
          <h1 className={styles.titleEmpty}>Your cart is empty</h1>
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
                      <p style={{ fontSize: '2rem' }}>
                        Quantity: <span>{item.quantity}</span>
                      </p>
                      <p style={{ fontSize: '2rem' }}>
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
                  <span className={styles.title}>Subtotal</span>
                  <span>{total}</span>
                </div>
                {/* Voucher */}
                <div className={styles.voucherRow}>
                  <span className={styles.title}>
                    Voucher:
                    <span>{addVoucher}</span>
                  </span>
                </div>
                <div className={styles.row}>
                  <span className={styles.title}>Total</span>
                  <span>{total}</span>
                </div>
                <div className={`${styles.voucherInput} d-flex mt-5 `}>
                  <input
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    className={`form-control ${styles.inputVoucher}`}
                    placeholder="Add a voucher"
                  />
                  <Button
                    onClick={handleClick}
                    actionName="Apply"
                    className={styles.addVoucherBtn}
                    value={searchInput}
                  />
                </div>
                {message && <p>{message}</p>}
                <Button
                  actionName="Check out"
                  className={styles.checkOut}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
