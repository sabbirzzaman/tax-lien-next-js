import React from 'react';
import styles from '../styles/TaxLiens.module.css';
import dateIcon from '../images/date.png';
import map from '../images/map.png';
import Pagination from './Pagination';

export default function TaxLiens() {
    const myLists = [
        {
            id: '001',
            title: 'Tax Sale Certificate #001',
            saleAmount: '4,451',
            block: '179',
            lot: '16',
            address: '1315 W 6TH ST Piscataway',
            propertyType: 'Resedential',
            ownerType: 'Estate',
            boughtIn: 'Dec 2020',
            assetValue: '34,400',
            image: map,
        },
        {
            id: '002',
            title: 'Tax Sale Certificate #001',
            saleAmount: '4,451',
            block: '179',
            lot: '16',
            address: '1315 W 6TH ST Piscataway',
            propertyType: 'Resedential',
            ownerType: 'Estate',
            boughtIn: 'Dec 2020',
            assetValue: '34,400',
            image: map,
        },
        {
            id: '003',
            title: 'Tax Sale Certificate #001',
            saleAmount: '4,451',
            block: '179',
            lot: '16',
            address: '1315 W 6TH ST Piscataway',
            propertyType: 'Resedential',
            ownerType: 'Estate',
            boughtIn: 'Dec 2020',
            assetValue: '34,400',
            image: map,
        },
        {
            id: '004',
            title: 'Tax Sale Certificate #001',
            saleAmount: '4,451',
            block: '179',
            lot: '16',
            address: '1315 W 6TH ST Piscataway',
            propertyType: 'Resedential',
            ownerType: 'Estate',
            boughtIn: 'Dec 2020',
            assetValue: '34,400',
            image: map,
        },
        {
            id: '005',
            title: 'Tax Sale Certificate #001',
            saleAmount: '4,451',
            block: '179',
            lot: '16',
            address: '1315 W 6TH ST Piscataway',
            propertyType: 'Resedential',
            ownerType: 'Estate',
            boughtIn: 'Dec 2020',
            assetValue: '34,400',
            image: map,
        },
        {
            id: '006',
            title: 'Tax Sale Certificate #001',
            saleAmount: '4,451',
            block: '179',
            lot: '16',
            address: '1315 W 6TH ST Piscataway',
            propertyType: 'Resedential',
            ownerType: 'Estate',
            boughtIn: 'Dec 2020',
            assetValue: '34,400',
            image: map,
        }
    ];

    return (
        <div className={styles.TaxLiens}>
            <div className={styles.title}>
                <div className={styles.titleLeft}>
                    <h3>Tax Liens to be Sold (194)</h3>
                    <p>
                        Sale Amount between $25k and 75k | Property Type:
                        Residential
                    </p>
                </div>

                <div className={styles.titleRight}>
                    <h3>
                        Countdown to <span className="highlight">9/31/22</span>
                    </h3>
                    <p>
                        <img src={dateIcon.src} alt="date" />
                        <span>15 days left at 9:00am..</span>
                    </p>
                </div>
            </div>

            <div className={styles.sorting}>
                <div className={styles.sort}>
                    <span>Sort by</span>
                </div>

                <div className={styles.listBtn}>
                    <button>My List {'>>'}</button>
                </div>
            </div>

            <div className={styles.myLists}>
                {myLists.map((list) => {
                    const {
                        id,
                        address,
                        assetValue,
                        block,
                        boughtIn,
                        image,
                        lot,
                        ownerType,
                        propertyType,
                        saleAmount,
                        title,
                    } = list;

                    return (
                        <div key={id} className={styles.item}>
                            <div className={styles.itemHeading}>
                                <div className={styles.checkList}>
                                    <input
                                        type="checkbox"
                                        id={id}
                                        name={id}
                                        value={id}
                                    />
                                    <label htmlFor={id}>Add</label>
                                </div>

                                <h4>{title}</h4>
                            </div>

                            <div className={styles.details}>
                                <div>
                                    <p>Sale Amount</p>
                                    <span>$ {saleAmount}</span>
                                </div>
                                <div>
                                    <p>Block</p>
                                    <span>{block}</span>
                                </div>
                                <div>
                                    <p>Lot</p>
                                    <span>{lot}</span>
                                </div>
                            </div>

                            <img src={image.src} alt="map" />

                            <div className={styles.otherDetails}>
                                <h4>{address}</h4>

                                <div className={styles.others}>
                                    <div>
                                        <p>Property Type</p>
                                        <span>{propertyType}</span>
                                    </div>
                                    <div>
                                        <p>Owner Type</p>
                                        <span>{ownerType}</span>
                                    </div>
                                    <div>
                                        <p>Bought in</p>
                                        <span>{boughtIn}</span>
                                    </div>
                                    <div>
                                        <p>Asset Value</p>
                                        <span>${assetValue}</span>
                                    </div>
                                </div>
                            </div>

                            <button className={styles.btnInfo}>
                                Property Info
                            </button>
                        </div>
                    );
                })}
            </div>

            <Pagination />
        </div>
    );
}
