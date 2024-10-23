import styles from './Header.module.scss';
import Image from '../../../../assets/image/Images';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AuthContext } from '../../../Account/AccountContext';
import { CartContext } from '../../../../pages/Cart/CartContext';
import Button from '../../../Button';
import Hamburger from '../../../HamburgerMenu';
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import SearchInput from '../../../SearchFunction/SearchInput';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isScroll, setisScroll] = useState(false);
  const [products, setProducts] = useState([]); // State lưu tất cả sản phẩm từ API
  const totalItem = cart.reduce((total, item) => total + item.quantity, 0);
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Xử lý sự kiện cuộn trang để thay đổi CSS
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lấy toàn bộ sản phẩm từ API khi component được mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data); // Lưu toàn bộ sản phẩm vào state
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  // ACTION
  const handleUserIconClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      {/* Top Header */}
      <div
        className={`${styles.topHeader} d-flex justify-content-center align-items-center`}
      >
        <p>
          Sign up and get 20% off to your first order.{' '}
          <Link to="/login">Sign Up Now</Link>
        </p>
      </div>

      {/* Main Header */}
      <div
        className={`${styles.mainHeader} ${isScroll ? styles.scrolled : ''}`}
      >
        <div className="container">
          <div
            className={`${styles.inner} d-flex flex-row justify-content-between align-items-center`}
          >
            {/* MobileHeader */}
            <div className={styles.hamburger}>
              <Hamburger />
            </div>
            {/* Logo */}
            <Link to="/">
              <div className={styles.logo}>
                <img src={Image.logo} alt="Logo" />
              </div>
            </Link>

            {/* Navigation Links */}
            <div className={styles.navLink}>
              <Link to="/shop" className={styles.link}>
                Shop
              </Link>
              <Link
                to="/sale"
                className={styles.link}
                onClick={(e) => e.preventDefault()} // tạm thời chưa deploy
              >
                On Sale
              </Link>
              <Link
                to="/new-arrival"
                className={styles.link}
                onClick={(e) => e.preventDefault()}
              >
                New Arrivals
              </Link>
              <Link
                to="/brands"
                className={styles.link}
                onClick={(e) => e.preventDefault()}
              >
                Brands
              </Link>
            </div>

            {/* Search Input */}
            <SearchInput
              products={products}
              className={styles.inputSearchHide}
            />

            {/* Cart and Account Icons */}
            <div className={styles.hdAction}>
              {/* ////////////////////////////////mobile search/////////////////////////////////////////////// */}
              {/* For Mobile Search */}
              <div className={styles.searchMobile}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className={styles.cart}>
                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className={styles.cartIcon}
                  />
                </Link>
                {/* hiển thị số lượng cart  */}
                <div className={styles.cartCount}>
                  <span>{totalItem}</span>
                </div>
              </div>

              {/* Khi chưa đăng nhập qua trang đăng nhập , có rồi thì hover dropdown */}
              {user ? (
                <div className={styles.userIcon}>
                  <Tippy
                    content={
                      <div className={styles.dropdown}>
                        <Link to="/account" className="mb-3 text-center">
                          Thông tin
                        </Link>
                        <Button
                          className={styles.signoutbtn}
                          onClick={handleLogout}
                          actionName="Sign out"
                        />
                      </div>
                    }
                    interactive={true}
                    placement="bottom"
                    onClickOutside={() => setShowDropdown(false)}
                    visible={showDropdown}
                    arrow={true}
                  >
                    <div onClick={handleUserIconClick}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  </Tippy>
                </div>
              ) : (
                <Link to="/account">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
