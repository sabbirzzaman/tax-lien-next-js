import React from 'react'
import styles from '../styles/Tax.module.css'
import Filter from './Filter'
import TaxLiens from './TaxLiens'

export default function Tax() {
  return (
    <div className={styles.container}>
        <Filter />
        <TaxLiens />
    </div>
  )
}
