/* eslint-disable react/prop-types */
import styles from './item.module.scss'
const ProductItem = ({ product }) => {
    return (
        <div className={`${ styles.productItem }`}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p className={styles.rating}>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <p className={styles.price}>${product.price}</p>
        </div>
    )
}
export default ProductItem