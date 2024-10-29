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
      <Link to="/sale" className="menu-item">
        On Sale
      </Link>
      <Link to="/new-arrival" className="menu-item">
        New Arrivals
      </Link>
      <Link to="/brands" className="menu-item">
        Brands
      </Link>
    </Menu>
  );
};

export default Hamburger;
