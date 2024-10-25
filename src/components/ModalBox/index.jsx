import styles from './modal.module.scss';
const Modal = ({ children, show, onClose }) => {
  if (!show) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
