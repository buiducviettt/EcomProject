/* eslint-disable react/prop-types */
import styles from './item.module.scss';
import StarRating from '../../StarRating';

const ProductItem = ({ product, isFlashSale, flashSalePrice }) => {
  return (
    <div className={`${styles.productItem}`}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <StarRating rating={product.rating.rate} />
      {isFlashSale ? (
        <div className={styles.priceWrapper}>
          <p
            className={styles.price}
            style={{
              textDecoration: 'line-through',
              fontSize: '1.5rem',
              color: 'gray',
            }}
          >
            ${product.price}
          </p>
          <p
            className={styles.discountedPrice}
            style={{ fontSize: '2rem', fontWeight: 'bold', color: 'red' }}
          >
            ${flashSalePrice.toFixed(2)}
          </p>
        </div>
      ) : (
        <p className={styles.price}>${product.price}</p>
      )}
    </div>
  );
};
export default ProductItem;
