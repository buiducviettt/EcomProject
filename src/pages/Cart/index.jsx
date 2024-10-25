import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Image from '../../assets/image/Images';
import Coupons from '../../components/Coupons';

const Cart = () => {
  const { cart, removeProduct, total, setVoucherValue } =
    useContext(CartContext);
  const [searchInput, setSearchInput] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const voucherCode = searchInput.trim();
    if (voucherCode) {
      const discount = voucherCode === 'VIET_50%' ? 0.5 : 0;
      setVoucherValue(discount);

      setMessage(
        discount
          ? 'Voucher đã được áp dụng thành công và giảm 50% tổng giá trị.'
          : 'Voucher không hợp lệ.',
      );

      setSearchInput('');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  if (cart.length === 0) {
    return (
      <DefaultLayout>
        <div className="container">
          <h1 className={styles.titleEmpty}>Your cart is empty</h1>
          <div className={`${styles.cartEmpty} d-flex justify-content-center`}>
            <img
              style={{ width: '70rem' }}
              src={Image.cartempty}
              alt="Cart empty"
            />
          </div>
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
                  <span>${total}</span>
                </div>

                <div className={styles.voucherRow}>
                  <span className={styles.title}>
                    Voucher: <span>{searchInput}</span>
                  </span>
                </div>

                <div className={styles.row}>
                  <span className={styles.title}>Total</span>
                  <span>${total}</span>
                </div>

                <div className={`${styles.voucherInput} d-flex mt-5`}>
                  <input
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                    className={`form-control ${styles.inputVoucher}`}
                    placeholder="Add a voucher"
                    value={searchInput}
                  />
                  <Button
                    onClick={handleClick}
                    actionName="Apply"
                    className={styles.addVoucherBtn}
                  />
                </div>

                <Coupons />

                {message && (
                  <p
                    style={{
                      color: message.includes('không hợp lệ') ? 'red' : 'green',
                    }}
                  >
                    {message}
                  </p>
                )}

                <Link to="/checkout">
                  <Button actionName="Check out" className={styles.checkOut} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
