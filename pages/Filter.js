import React from 'react';
import styles from '../styles/Filter.module.css';

export default function Filter() {
    return (
        <div className={styles.background}>
            <div className={styles.filter}>
                <div className={styles.title}>
                    <h3>Filter by</h3>

                    <div className={styles.options}>
                        <p>Reset</p>
                        <p>Update</p>
                    </div>
                </div>

                <div className={styles.btn}>
                    <button>Apply Changes</button>
                    <button className={styles.btnDropDown}>
                        Saved Filters
                    </button>
                </div>

                <div className={styles.sales}>
                    <p>Sale Amount</p>

                    <div className={styles.saleAmount}>
                        <input type="text" value={'25,000'} />
                        <span>To</span>
                        <input type="text" value={'75,000'} />
                    </div>
                </div>

                <div className={styles.property}>
                    <p>property type</p>

                    <div className={styles.checklist}>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="residential"
                                name="residential"
                                value="Residential"
                            />
                            <label htmlFor="residential">Residential</label>
                        </div>

                        <div className={styles.subChecklist}>
                            <div className={styles.listItem}>
                                <input
                                    type="checkbox"
                                    id="singleFamily"
                                    name="singleFamily"
                                    value="Single Family"
                                />
                                <label htmlFor="singleFamily">Single Family</label>
                            </div>
                            <div className={styles.listItem}>
                                <input
                                    type="checkbox"
                                    id="multiFamily"
                                    name="multiFamily"
                                    value="Multi Family"
                                />
                                <label htmlFor="multiFamily">Multi Family</label>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Commercial"
                                name="Commercial"
                                value="Commercial"
                            />
                            <label htmlFor="Commercial">Commercial</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Other"
                                name="Other"
                                value="Other"
                            />
                            <label htmlFor="Other">Other</label>
                        </div>
                    </div>
                </div>

                <div className={styles.property}>
                    <p>owner type</p>

                    <div className={styles.checklist}>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Individual"
                                name="Individual"
                                value="Individual"
                            />
                            <label htmlFor="Individual">Individual (s)</label>
                        </div>

                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="LLC"
                                name="LLC"
                                value="LLC/Inc/Corp"
                            />
                            <label htmlFor="LLC">LLC/Inc/Corp</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="backRoTrust"
                                name="Bank ro Trust"
                                value="Other"
                            />
                            <label htmlFor="backRoTrust">Bank ro Trust</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Estate"
                                name="Estate"
                                value="Estate"
                            />
                            <label htmlFor="Estate">Estate</label>
                        </div>
                    </div>
                </div>

                <div className={styles.property}>
                    <p>assessed home value</p>

                    <div className={styles.value}>
                        <input type="text" value={'25,000'} />
                        <span>To</span>
                        <input type="text" value={'75,000'} />
                    </div>
                </div>

                <div className={styles.property}>
                    <p>length of ownership</p>

                    <div className={styles.checklist}>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="3"
                                name="3"
                                value="3 years or fewer"
                            />
                            <label htmlFor="3">3 years or fewer</label>
                        </div>

                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="3-10"
                                name="3-10"
                                value="3 - 10 years"
                            />
                            <label htmlFor="3-10">3 - 10 years</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="10-20"
                                name="10-20"
                                value="10 - 20 years"
                            />
                            <label htmlFor="10-20">10 - 20 years</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="20"
                                name="20"
                                value="20+ years"
                            />
                            <label htmlFor="20">20+ years</label>
                        </div>
                    </div>
                </div>

                <div className={styles.history}>
                    <p>Has prior lien history?</p>
                    <span>Within the last 3 years</span>

                    <div className={styles.checklist}>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Yes"
                                name="Yes"
                                value="Yes"
                            />
                            <label htmlFor="Yes">Yes</label>
                        </div>

                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="No"
                                name="No"
                                value="No"
                            />
                            <label htmlFor="No">No</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Ignore"
                                name="Ignore"
                                value="Ignore"
                            />
                            <label htmlFor="Ignore">Ignore</label>
                        </div>
                    </div>
                </div>

                <div className={styles.apply}>
                    <button className={styles.btnApply}>Apply Changes</button>
                </div>
            </div>
        </div>
    );
}
