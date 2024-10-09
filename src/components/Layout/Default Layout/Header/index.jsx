// import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Image from '../../../../assets/image/Images'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useCart } from '../../../CartContext'

const Header = () => {
  const { cartItems } = useCart();
const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [isScroll, setisScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setisScroll(true)
            }
            else {
                setisScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    },[])

    return ( 
        <div className={styles.wrapper}>
            <div className={`${styles.topHeader} d-flex justify-content-center align-items-center`}>
                 <p>Sign up and get 20% off to your first order. <Link to ='/sign-up'>Sign Up Now</Link></p>
            </div>
            <div className={`${styles.mainHeader} ${isScroll ? styles.scrolled : ''}`}>
                <div className="container">
                <div className={`${ styles.inner } d-flex flex-row justify-content-between align-items-center`}>
                    <Link to ="/">
                        <div className={styles.logo}>
                        <img src={Image.logo} alt="Logo"/>
                            </div>
                            </Link>
                    <div className={styles.navLink}>
                        <Link to="/shop">Shop</Link>
                        <Link to="/sale">On Sale</Link>
                        <Link to="/new-arrival">New Arrivals</Link>
                        <Link to="/brands">Brands</Link>
                        </div>
                        <div className={styles.hdSearch}>
                            <input type="text" className="form-control" placeholder='Search for products...'  />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={ styles.searchIcon} />
                        </div>
                        <div className={styles.hdAction}>
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                                 {cartQuantity > 0 && <span className={styles.cartQuantity}>{cartQuantity}</span>}
                            </Link>
                            <Link to="/account">
                               <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </div>

                    </div>
                    </div>
            </div>
        </div>
    )
    
}
export default Header