import React from 'react';
import styles from '../styles/Header.module.css';
import avatar from '../images/avatar.png'

export default function Header() {
    return (
        <>
            <div className={styles.upperHeader}>
                <div className={styles.container}>
                    <p>Welcome to</p>

                    <div>
                        <a href="#">register</a>
                        <a href="#">LOGIN</a>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.container}>
                    <h3>Tax Lien</h3>

                    <div className={styles.navigation}>
                        <div className={styles.nav}>
                            <a href="#">Home</a>
                            <a href="#">Dashboard</a>
                            <a href="#">Help center</a>
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                        </div>

                        <div className={styles.user}>
                            <img src={avatar.src} alt="avatar" />
                            <p>Hadeed U.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
