import React from 'react';
import styles from '../styles/Pagination.module.css';
import previous from '../images/previous.png';
import next from '../images/next.png';

export default function Pagination() {
    return (
        <div className={styles.pagination}>
            <span className={styles.btn}>
                <img src={previous.src} alt="previous" />
                <span>Previous</span>
            </span>

            <div className={styles.page}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <span>...</span>
                <p>8</p>
                <p>9</p>
                <p>10</p>
            </div>

            <span className={styles.btn}>
                <span>Next</span>
                <img src={next.src} alt="next" />
            </span>
        </div>
    );
}
