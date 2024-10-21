/* eslint-disable react/prop-types */
import styles from './layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const FeedbackLayout = ({ name, body }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.star}>
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: '#FFD43B' }} />
        </div>
        <h3>{name}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
export default FeedbackLayout;
