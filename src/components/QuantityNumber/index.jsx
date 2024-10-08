import InputNumber from 'rc-input-number'; 
import styles from './quantity.module.scss'
import { useState } from 'react';
const QuantityNumber = () => {
    const [num, setNum] = useState(0);
    const handleDecrement = () => {
         setNum((prev) => Math.max(0, prev - 1));
    }
     const handleIncrement = () => {
    setNum((prev) => prev + 1);
  };
    return (
        <div className={styles.wrapper}>
            <button className={styles.minus } onClick={handleDecrement}>-</button>
            <InputNumber className={styles.input} min={0} max={Infinity} step={1} value={num} onChange={setNum} />
            <button className={styles.plus } onClick={handleIncrement}>+</button>
            </div>
   );
}
export default QuantityNumber;