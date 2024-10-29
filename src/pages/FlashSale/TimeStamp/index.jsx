import styles from './timestamp.module.scss';
const TimeStamp = ({ className, title, time }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <h3>{time}</h3>
      <p>{title}</p>
    </div>
  );
};
export default TimeStamp;
