/* eslint-disable react/prop-types */
import React from 'react';
import styles from './dressstyle.module.scss';

const StyleItem = React.memo(({ title, image }) => {
    return (
        <div className={styles.dressStyle}>
            <div className={styles.itemImg}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </div>
        </div>
    );
});

// Set the display name for better debugging
StyleItem.displayName = 'StyleItem';

export default StyleItem;
