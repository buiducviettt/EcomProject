/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import styles from './StarRating.module.scss';
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating); // Sao đầy
    const hasHalfStar = rating % 1 !== 0; // Kiểm tra xem có sao nửa hay không
    const totalStars = 5; // Tổng số sao tối đa

    return (
        <div className={styles.starRating}>
            {[...Array(totalStars)].map((_, index) => {
                if (index < fullStars) {
                    return <FontAwesomeIcon key={index} icon={solidStar} className={styles.star} />;
                } else if (index === fullStars && hasHalfStar) {
                    return <FontAwesomeIcon key={index} icon={solidStar} className={`${styles.star} ${styles.halfStar}`} />;
                } else {
                    return <FontAwesomeIcon key={index} icon={regularStar} className={styles.star} />;
                }
            })}
        </div>
    );
};

export default StarRating;
