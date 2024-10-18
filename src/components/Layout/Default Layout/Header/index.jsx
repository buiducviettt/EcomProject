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
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isScroll, setisScroll] = useState(false);
  const [searchInput, setSearchInput] = useState(''); // State lưu giá trị tìm kiếm
  const [searchResult, setSearchResult] = useState([]); // State lưu kết quả tìm kiếm
  const [isSearching, setisSearching] = useState(false); // State kiểm tra quá trình tìm kiếm
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

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setisSearching(true);
    const delayDebounce = setTimeout(() => {
      if (searchInput) {
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase()),
        );
        setSearchResult(filteredProducts);
        setisSearching(false);
      } else {
        setSearchResult([]);
      }
    }, 500);

    return () => {
      clearTimeout(delayDebounce);
      setisSearching(false);
    };
  }, [searchInput, products]);

  return (
    <div className={styles.wrapper}>
      {/* Top Header */}
      <div
        className={`${styles.topHeader} d-flex justify-content-center align-items-center`}
      >
        <p>
          Sign up and get 20% off to your first order.{' '}
          <Link to="/sign-up">Sign Up Now</Link>
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
            <div className={styles.hdSearch}>
              <div className={styles.inputSearch}>
                <input
                  type="text"
                  className="form-control"
                  value={searchInput}
                  onChange={handleSearchChange}
                  placeholder="Search for products..."
                />
              </div>
              {/* Hiển thị kết quả tìm kiếm trong bảng */}
              {searchInput && (
                <div className={styles.searchResult}>
                  {isSearching ? (
                    <p>Searching....</p>
                  ) : (
                    <div>
                      {searchResult.length > 0 ? (
                        <table className={styles.resultTable}>
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {searchResult.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <Link to={`/product/${item.id}`}>
                                    {item.title}
                                  </Link>
                                </td>
                                <td>${item.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p>No results found.</p>
                      )}
                    </div>
                  )}
                </div>
              )}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.searchIcon}
              />
            </div>

            {/* Cart and Account Icons */}
            <div className={styles.hdAction}>
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
           actionName="Sign out"/>
           
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
