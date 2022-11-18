import React from 'react';
import styles from '../styles/ProgressBar.module.css'

export default function ProgressBar() {
    return (
        <div className={styles.container}>
            <div className={styles.process}>
                <div>
                    <span></span>
                    <p>Past Years</p>
                </div>
                <div>
                    <span></span>
                    <p>Main</p>
                </div>
                <div>
                    <span></span>
                    <p>Auction</p>
                </div>
                <div>
                    <span></span>
                    <p>Post Auction Resource Center</p>
                </div>
            </div>
        </div>
    );
}
