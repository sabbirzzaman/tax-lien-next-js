import React from 'react';
import styles from '../styles/Footer.module.css';
import logo from '../images/logo.png';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.upperFooter}>
                <div className={styles.footerLogo}>
                    <img src={logo.src} alt="logo" />
                    <p>
                        Our vision is to provide convenience and help increase
                        your sales business.
                    </p>
                </div>

                <div className={styles.footerLinks}>
                    <div>
                        <h3>About</h3>

                        <a href="#">How it works</a>
                        <a href="#">Featured</a>
                        <a href="#">Partnership</a>
                        <a href="#">Bussiness Relation</a>
                    </div>

                    <div>
                        <h3>Community</h3>

                        <a href="#">Events</a>
                        <a href="#">Blog</a>
                        <a href="#">Podcast</a>
                        <a href="#">Invite a friend</a>
                    </div>

                    <div>
                        <h3>Socials</h3>

                        <a href="#">Discord</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
            </div>

            <div className={styles.copyrightArea}>
                <p>&copy; 2022 Tax Liens. All rights reserved</p>

                <div className={styles.terms}>
                  <a href="#">Privacy & Policy</a>
                  <a href="#">Terms & Condition</a>
                </div>
            </div>
        </div>
    );
}
