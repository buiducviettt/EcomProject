/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styles from './dressstyle.module.scss';

const StyleItem = ({ title, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop?category=${title}`);
  };
  return (
    <div className={styles.dressStyle} onClick={handleClick}>
      <div className={styles.itemImg}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default StyleItem;
