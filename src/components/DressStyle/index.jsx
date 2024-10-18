/* eslint-disable react/prop-types */
import styles from './dressstyle.module.scss';

const StyleItem = ({ title, image }) => {
    return (
        <div className={styles.dressStyle}>
            <div className={styles.itemImg}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </div>
        </div>
    );
};  


export default StyleItem;
