/* eslint-disable react/prop-types */
import styles from './styles.module.scss';
import CountUp from 'react-countup';
const SpecialNumber = ({ number, title }) => {
  return (
    <div
      className={`${styles.wrapper} d-flex flex-row animate__animated animate__fadeInLeft `}
    >
      <div className={styles.number}>
        <CountUp
          start={0}
          end={number}
          duration={2.75}
          separator=","
          suffix="+"
          className={styles.numberDetails}
        />
        <p>{title}</p>
      </div>
      <span></span>
    </div>
  );
};
export default SpecialNumber;
