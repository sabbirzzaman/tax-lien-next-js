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
                            <label for="residential">Residential</label>
                        </div>

                        <div className={styles.subChecklist}>
                            <div className={styles.listItem}>
                                <input
                                    type="checkbox"
                                    id="singleFamily"
                                    name="singleFamily"
                                    value="Single Family"
                                />
                                <label for="singleFamily">Single Family</label>
                            </div>
                            <div className={styles.listItem}>
                                <input
                                    type="checkbox"
                                    id="multiFamily"
                                    name="multiFamily"
                                    value="Multi Family"
                                />
                                <label for="multiFamily">Multi Family</label>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Commercial"
                                name="Commercial"
                                value="Commercial"
                            />
                            <label for="Commercial">Commercial</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Other"
                                name="Other"
                                value="Other"
                            />
                            <label for="Other">Other</label>
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
                            <label for="Individual">Individual (s)</label>
                        </div>

                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="LLC"
                                name="LLC"
                                value="LLC/Inc/Corp"
                            />
                            <label for="LLC">LLC/Inc/Corp</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="backRoTrust"
                                name="Bank ro Trust"
                                value="Other"
                            />
                            <label for="backRoTrust">Bank ro Trust</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Estate"
                                name="Estate"
                                value="Estate"
                            />
                            <label for="Estate">Estate</label>
                        </div>
                    </div>
                </div>

                <div className={styles.property}>
                    <p>assessed home value</p>

                    <div className={styles.checklist}></div>
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
                            <label for="3">3 years or fewer</label>
                        </div>

                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="3-10"
                                name="3-10"
                                value="3 - 10 years"
                            />
                            <label for="3-10">3 - 10 years</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="10-20"
                                name="10-20"
                                value="10 - 20 years"
                            />
                            <label for="10-20">10 - 20 years</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="20"
                                name="20"
                                value="20+ years"
                            />
                            <label for="20">20+ years</label>
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
                            <label for="Yes">Yes</label>
                        </div>

                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="No"
                                name="No"
                                value="No"
                            />
                            <label for="No">No</label>
                        </div>
                        <div className={styles.listItem}>
                            <input
                                type="checkbox"
                                id="Ignore"
                                name="Ignore"
                                value="Ignore"
                            />
                            <label for="Ignore">Ignore</label>
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
