import React from 'react';
import styles from '../styles/Place.module.css';
import mapImg from '../images/map-lg.png';
import arrow from '../images/arrow.png';

export default function Place() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Township of Nutley</h1>
                <p> 134 liens available.</p>
            </div>

            <div className={styles.map}>
                <img src={mapImg.src} alt="map" />

                <div className={styles.details}>
                    <div className={styles.location}>
                        <div className={styles.address}>
                            <h2>State of NJ</h2>
                            <p>Interest cap at 18%</p>
                        </div>

                        <img src={arrow.src} alt="arrow" />
                    </div>

                    <div className={styles.years}>
                        <div>
                            <h3>2 Years</h3>
                            <p>To Redeem</p>
                        </div>
                        <div>
                            <h3>Once A Year</h3>
                            <p>Sale take place</p>
                        </div>
                    </div>

                    <div className={styles.country}>
                        <p>Essex County</p>

                        <div className={styles.rank}>
                            <div>
                                <h3>#1</h3>
                                <p>Home values</p>
                            </div>
                            <div>
                                <h3>#9</h3>
                                <p>Inverster activity</p>
                            </div>
                            <div>
                                <h3>532</h3>
                                <p>Sold last year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
