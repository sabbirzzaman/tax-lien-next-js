import React from 'react';
import styles from '../styles/Header.module.css';
export default function Header() {
    return (
        <div className={styles.upperHeader}>
            <div className={styles.container}>
                <p>Welcome to</p>

                <div>
                    <a href="#">register</a>
                    <a href="#">LOGIN</a>
                </div>
            </div>
        </div>
    );
}
