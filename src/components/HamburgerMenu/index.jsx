import './hamburger.scss';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';

// eslint-disable-next-line react/prop-types
const Hamburger = ({ className }) => {
  return (
    <Menu className={className}>
      <Link to="/shop" className="menu-item">
        Shop
      </Link>
      <Link
        to="/sale"
        className="menu-item"
        onClick={(e) => e.preventDefault()} // tạm thời chưa deploy
      >
        On Sale
      </Link>
      <Link
        to="/new-arrival"
        className="menu-item"
        onClick={(e) => e.preventDefault()}
      >
        New Arrivals
      </Link>
      <Link
        to="/brands"
        className="menu-item"
        onClick={(e) => e.preventDefault()}
      >
        Brands
      </Link>
    </Menu>
  );
};

export default Hamburger;
