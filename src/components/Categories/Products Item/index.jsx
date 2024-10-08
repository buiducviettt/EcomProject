/* eslint-disable react/prop-types */
import styles from './item.module.scss'
import StarRating from '../../StarRating'
const ProductItem = ({ product }) => {
    return (
        <div className={`${ styles.productItem }`}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <StarRating
                rating ={product.rating.rate}
          />
            <p className={styles.price}>${product.price}</p>
        </div>
    )
}
export default ProductItem