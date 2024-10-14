import styles from './Button.module.scss';
// eslint-disable-next-line react/prop-types
const Button = ({ actionName, className, color, ...props }) => {
  return (
    <button
      type="button"
      className={`${styles.button} btn btn-dark ${className}`}
      {...props}
    >
      <span style={{ color: color }}>{actionName}</span>
    </button>
  );
};
export default Button;
