/* eslint-disable react/prop-types */
import InputNumber from 'rc-input-number'; 
import styles from './quantity.module.scss';
import { useState, useEffect } from 'react';

const QuantityNumber = ({ onQuantityChange }) => {
    const [num, setNum] = useState(1);

    useEffect(() => {
        onQuantityChange(num);
    }, [num, onQuantityChange]);

    const handleDecrement = () => {
        setNum((prev) => Math.max(1, prev - 1));
    }

    const handleIncrement = () => {
        setNum((prev) => prev + 1);
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.minus} onClick={handleDecrement}>-</button>
            <InputNumber 
                className={styles.input} 
                min={1} 
                max={Infinity} 
                step={1} 
                value={num} 
                onChange={setNum} 
            />
            <button className={styles.plus} onClick={handleIncrement}>+</button>
        </div>
    );
}

export default QuantityNumber;
